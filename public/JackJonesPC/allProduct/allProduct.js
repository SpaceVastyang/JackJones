angular.module("allProductModule", [])
	.controller('allProductCtroller', ['$scope', '$state','ajax',function ($scope,$state,ajax) {
		//点击跳转详情页面
		$scope.goToDetails = function(){
			$state.go("details",{productId: $(this)[0].commodityDatas._id});	
			console.info($(this))
			//$(this)是一个数组我们需要的id在$(this)[0].commodityDatas里面
		};


		// 页面跳转传参数
		/*
			 1.在跳转页面用$stateParams接收{productId: $(this)[0].commodityDatas._id}这个对象
			 2.在页面需传入productId
			 3.在跳转页面的.stata中url还需要配置如下
			 .state("shoppingCart", {
			 url: "/shoppingCart/:productImg/:productName/:productPrice",
			 templateUrl: "./shoppingCart/shoppingCart.html",
			 controller: "shoppingCartController"
			 })
		 */
		 
		//angular ajax data传值为对象
		//这个方法是全局传值
		//$rootScope.productId = {productId:$(this)[0].commodityDatas._id};

		//请求数据
		ajax({
			type: "get",
			url: "/JackJonesUser/getAllProductDatas",
			//"/JackJonesUser"为app.js中配置的路径/getHomeDatas是JackJonesUser.JS中配置的路径
			success: function(allProductDatas) {
				$scope.allProductDatas = allProductDatas;
			}
		});
	}])


	//自定义指令,html元素中需要用到这个指令加入 commodity-hover即可
	// 字符串replace("需要替换的内容","替换后的内容")
	.directive("commodityHover", function(){
		return {
			restrict: "A",
			link: function(scope, element, attr) {
				$(element).hover( function() {
					$(this).attr("src",$(this).attr("src").replace("6.jpg","2.jpg"));
					$(this).next().show()
				}, function () {
					$(this).attr("src",$(this).attr("src").replace("2.jpg","6.jpg"));
					$(this).next().hide()
				});
			}
		}
	});
