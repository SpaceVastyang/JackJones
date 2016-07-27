angular.module("mainApp", ["ui.router" ,"HomeModule", "registerModule","loginModule","allProductModule","shoppingCartModule","detailsModule"])
	.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        
        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "./home/home.html",
            controller: "HomeController"
        })
        //注册
        .state("register", {
        	url: "/register",
            templateUrl: "./register/register.html",
            controller: "registerController"
        })
        //登录
        .state("login", {
        	url: "/login",
            templateUrl: "./login/login.html",
            controller: "loginController"
        })
        //所以商品
        .state("allProduct", {                                 // allProduct页面的名称
        	url: "/allProduct",                                // 跳转页面地址栏状态
        	templateUrl: "./allProduct/allProduct.html",       // 加载页面相对于index.heml路径
        	controller: "allProductCtroller"                   // 定义其作用域单个页面的js
        })
        //购物车
        .state("shoppingCart", {
            url: "/shoppingCart",
            //url: "/shoppingCart/:productName/:productPrice/:productImg",
            templateUrl: "./shoppingCart/shoppingCart.html",
            controller: "shoppingCartController"
        })
        //详情
        .state("details", {
            url: "/details/:productId",
            templateUrl: "./details/details.html",
            controller: "detailsController"
        });
    })
	.controller("mainController", ["$scope","$state",function ($scope,$state) {
		// 1. 在标签上绑定 ng-click="goToRegister()" 
		//2. 添加点击事件加载注册页面
		$scope.goToRegister = function () {
            $state.go("register");
        };
        $scope.goToLogin = function () {
            $state.go("login");
        };
        $scope.goToAllProduct = function(){
        	$state.go("allProduct");
        };
        $scope.goToCart = function(){
            $state.go("shoppingCart");
        };
        $scope.toTop = function(){
            $(window).scrollTop(0)
        };
	}])


    //自定义服务
    .factory("ajax", function($http) {
        return function(config) {
            if (config.type == "get") {
                var params = "?";
                for (var attr in config.data) {
                    params += attr + "=" + config.data[attr] + "&"
                }   
                $http.get(config.url + params).success(function(data) {
                    config.success(data);
                })
            } else {
                $http.post(config.url, config.data).success(function(data) {
                    config.success(data);
                })
            }
        }
    })

    //搜索功能
    .directive("searchCommodity",function (ajax) {
        return {
            restrict: "A",
            link: function ($rootScope, element) {
                $(element).on("input", function () {
                    var searchValue = {searchValue: $(element).val()};
                    console.info(searchValue)
                    ajax({
                        type: "get",
                        url: "/JackJonesUser/search",
                        data: searchValue,
                        success: function(allData) {
                            // $rootScope.allData = allData;
                            console.info(allData)
                        }
                    })
                })
            }
        }
    })



