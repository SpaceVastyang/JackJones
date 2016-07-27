angular.module("loginModule", [])
	.controller('loginController', ['$scope', '$state','ajax',function ($scope,$state,ajax) {
		$scope.loginSubmit = function(){
			ajax({
				type: "POST",
				url: "/JackJonesUser/login",
				data: $scope.loginUser,
				success: function (data) {
					if (data == "true") {	
						$state.go("shoppingCart")
						location.reload() 			
					} else {
						alert("用户名或密码错误")
					}
					// console.info(data)
				}
			})
		} 
	}])
	.directive("sessionUsername", function(ajax){
        return {
            restrict: "A",
            link: function(scope, element, attr) {    
                ajax({
                    type: "get",
                    url: "/JackJonesUser/isLogin",
                    success: function(data) {
                        // console.info(data)	                
                    	if(data){
                    		$(element).children().first().html("欢迎您," + data)  
	                    	$(element).hover(function(){
	                    		$(this).children().first().html("退出登录");
	                    	},function(){
	                    		$(this).children().first().html("欢迎您," + data);
	                    	}).on("click", function () {
	               				ajax({
	               					type: "psot",
                    				url: "/JackJonesUser/loginOut",
                    				success: function(data){
                    					// console.info(data)
                    					location.reload()  
                    				}
	               				})
	           				});
                    	}
                    }        
                })  
            }
        }
    });

