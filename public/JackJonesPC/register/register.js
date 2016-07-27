angular.module("registerModule", [])
	.controller("registerController", ["$scope","$state",'ajax',function ($scope,$state,ajax) {
		/*
			1. angular 表单提交 在需要提交数据的表单中加入  ng-model="对象名.数据名"
				如：ng-model="user.username"
					ng-model="user.password"
			2.提交按钮绑定ng-click=“js中定义的函数名”
			3.ajax传数据可以直接通过$scope.user传数据
				console.info($scope.user)
				user = {
					username：用户输入值，
					password：用户输入值
				 }
		 */
		$scope.regSubmit = function(){
			ajax({
				type: "POST",
				url: "/JackJonesUser/setRegData",
				data: $scope.user,
				success: function (data) {
					console.info(data)
					if (data == "true") {//在服务层判断数据保存成功
						$state.go("login");//加载登录页面
					}
				}
			})
		}
		//用户名重复验证
		$scope.onBlur = function(){
			var username = $scope.user.username
			console.info(username)
			var Reg = /^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/;
			if (reg(Reg,username)) {
				ajax({
					type: "POST",
					url: "/JackJonesUser/isReg",
					data: $scope.user,
					success: function (data) {
						console.info(data)
						if (data == "true") {
							$("#password-tips").html("该手机号已经被注册，请重新输入").css("color","red");
							$(".reg-btn").attr("disabled");
						} else {
							$("#password-tips").html("该手机号可以注册，请输入密码").css("color","green");
							$(".reg-btn").removeAttr("disabled");
						}
					}
				})
			} else {
				$("#password-tips").html("手机号号码格式错误").css("color","red");
				$(".reg-btn").attr("disabled","disabled");
			}	
		}

		 //用户输入验证方法
   		function reg (reg,val){
	        if(reg.test(val)){
	            return true;
	        }
	        else{
	            return false;
	        }
   		}


	}]);
