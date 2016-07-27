angular.module('detailsModule', [])
	.controller('detailsController', ['$scope', '$state','ajax','$stateParams','$rootScope', function ($scope ,$state,ajax,$stateParams,$rootScope) {
		//用$rootScope.productId传过来的值刷新页面就会消失
		//用$stateParams= main.js中的{productId: $(this)[0].commodityDatas._id}
		// $stateParams就是一个对象，req.query.productId就得到值，传过来的值不会消失;
		console.info($stateParams)
		//请求数据
		ajax({
			type: "get",
			url: "/JackJonesUser/getDetailsData",
			//"/JackJonesUser"为app.js中配置的路径/getHomeDatas是JackJonesUser.JS中配置的路径
			//angular ajax data传值为对象
			data: $stateParams,
			success: function(DetailsData) {
				$scope.DetailsData = DetailsData;		
				var upEle = $(".detail-prev");
				var nextEle = $(".detail-next");
				var LeftImgEle = $(".detail-choose-img");
				var LeftImgsArr = LeftImgEle.children();
				var detailCurrentImgEle = $(".detail-current-img");
				var fangDaEle = $(".fangDaImg");
				//向上
				upEle.on("click",function(){LeftImgEle.animate({
						top: -156
					},1000,function(){
						LeftImgEle.animate({
							top: 23
						}, 0);
					LeftImgEle.children().first().appendTo(LeftImgEle);
					});
				});
				//向下
				nextEle.on("click",function(){
					LeftImgEle.animate({
						top: -156
					}, 0);
					LeftImgEle.children().last().prependTo(LeftImgEle);
					LeftImgEle.animate({
						top: 23
					}, 1000);
				});
				//选择图片
				for (var i = 0;i < LeftImgsArr.length ;++i){
					LeftImgEle.children().eq(i).on("click",function(){
						LeftImgsArr.css("border","1px solid #f1f1f1");
						$(this).css({
							border: "1px solid #000"
						});
						//stop()方法解决快速点击效果迟缓
						//animate（）动画里面的top只是表现效果没有改变css样式
						//,后面的函数为同步步执行，要等前面的执行完成后才执行
						//appendTo删除元素添加到最后面
						LeftImgEle.stop().animate({
							top: -156
						}, 1000,function(){
							LeftImgEle.animate({
								top: 23
							}, 0);
							LeftImgEle.children().first().appendTo(LeftImgEle);
						});

						//更换左边为当前图片，获取当前图片的src属性的值$(this).attr("src").replace(".jpg","_1.jpg")
						detailCurrentImgEle.children().first().attr("src",$(this).attr("src").replace(".jpg","_1.jpg"));
					})
				}
				//放大镜
				detailCurrentImgEle.on("mouseenter",function(){
					detailCurrentImgEle.on("click",function(){
						fangDaEle.show();
						$(".inner").show();
						//点击创建右边框的img，replace("_1.jpg","_2.jpg")修改替换为大图src属性
						var ingEle = $("<img>").appendTo(fangDaEle).attr("src",detailCurrentImgEle.children().first().attr("src").replace("_1.jpg","_2.jpg"));
						$(document).on("mousemove", ".detail-current-img", function(e) {
							var left = e.pageX - this.offsetLeft- $(".inner").outerWidth() / 2;
							var top = e.pageY - this.offsetTop- $(".inner").outerHeight() / 2;
							if(left < 0) {
								left = 0;
							} else if(left > $(".detail-current-img").outerWidth() - $(".inner").outerWidth()) {
								left = $(".detail-current-img").outerWidth() - $(".inner").outerWidth();
							}
							if(top < 0) {
								top = 0;
							} else if(top > $(".detail-current-img").outerHeight() - $(".inner").outerHeight()) {
								top = $(".detail-current-img").outerHeight() - $(".inner").outerHeight();
							}
							$(".inner").css({
								top: top,
								left: left
							});

							//放大图片的top
							ingEle.css({
								//右边大图片outerHeight()/左边小图的outerHeight()*inner的top
								//inner的大小算法，左边小图/inner宽度 = 右边大图/固定div宽度
								top: -fangDaEle.children().first().outerHeight() / detailCurrentImgEle.children().first().outerHeight()* top,
								left: -fangDaEle.children().first().outerWidth() / detailCurrentImgEle.children().first().outerWidth()* left
							})
						})
					});
				});
				detailCurrentImgEle.on("mouseleave",function(){
					fangDaEle.empty().hide();
					$(".inner").hide()
				})
			}
		});

		//产品信息提示框功能
		var infoEle = $(".product-info");
		var promptEle = $(".warm-prompt");
		var infoTips = $("#info");
		var promptTips = $("#prompt");
		var notesTips = $("#notesTips");
		var notesEle = $("#notes");
		infoEle.toggle(function(){//点击循环
			infoTips.hide();
			$("#infoIcon").css("background","url('./images/details/lUp.jpg')")
		},function(){
			infoTips.show();
			$("#infoIcon").css("background","url('./images/details/lDown.jpg')")
		});
		promptEle.toggle(function(){//点击循环
			promptTips.hide();
			$("#promptIcon").css("background","url('./images/details/lUp.jpg')")
		},function(){
			promptTips.show();
			$("#promptIcon").css("background","url('./images/details/lDown.jpg')")
		});
		notesEle.toggle(function(){//toggle(fn,fn)点击循环
			notesTips.hide();
			$("#notesIcon").css("background","url('./images/details/lUp.jpg')")
		},function(){
			notesTips.show();
			$("#notesIcon").css("background","url('./images/details/lDown.jpg')")
		})


		//加入购物车
		$scope.goToShoppingCart = function(productImg,productName,productPrice){
			var str = {
				productImg: productImg,
		        productName: productName,
		        productPrice: productPrice
			}
			//存数据
			ajax({
	            type: "GET",
	            url: "/JackJonesUser/setProductInfoData",
	            data: str,
	            success: function(data){
	                // console.info(data)
	            }
		    });

		    //登录状态判断
			ajax({
            	type: "get",
            	url: "/JackJonesUser/isLogin",
            	success: function(data) {
            		if(data){
            			$state.go("shoppingCart");	
            		} else {
            			$state.go("login");	
            		}
           	 	}
       		})	
   			// $state.go("shoppingCart");	
		};
	}]);