angular.module("HomeModule", [])
    .controller("HomeController", ["$scope", "$state", "$rootScope","ajax",function ($scope, $state,$rootScope,ajax) {
        // console.info("in")
        document.title = "JackJones中国官网";
        //轮播
        var imgArr = ["./images/home/slider1.jpg","./images/home/slider2.jpg","./images/home/slider3.jpg","./images/home/slider4.jpg","./images/home/slider5.jpg","./images/home/slider6.jpg","./images/home/slider7.jpg"]
        autoSlider(imgArr);
        function autoSlider(imgArr) {
            var count = 1;
            var isStarted = false;
            var sliderContainer = $(".slider-container");
            for(var i = 0; i < imgArr.length; ++i) {
                sliderContainer.append($("<li>").addClass("sliderImg").append($("<a href=''>").append($("<img>").attr("src",imgArr[i]))))
            }
            sliderContainer.children().eq(0).css("opacity",1);
            var autoSlide = setInterval(function () {
                slider(true);
            },2000);
            $(".mask").hover(function () {
                clearInterval(autoSlide);
                $(".prev").css("display","block");
                $(".next").css("display","block")
            }, function () {
                $(".prev").css("display","none");
                $(".next").css("display","none");
                autoSlide = setInterval(function () {
                    slider(true)
                },2000)
            });
            function slider(toggle) {
                sliderContainer.children().stop().animate({rotateX: "90deg",opacity: 0},1000);
                sliderContainer.children().eq(count).stop().animate({rotateX: "0deg",opacity: 1},1000);
                if(toggle) ++count;else --count;
                if(count > imgArr.length - 1) count = 0; else if(count < 0) count = imgArr.length - 1;
                isStarted = true;
            }
            $(".prev").on("click", function () {
                if(!isStarted){
                    count = -1;
                }
                slider(false)
            });
            $(".next").on("click", function () {
                slider(true)
            })
        }
        //ajax请求数据

            /*   
                1. 将数据库获取的数据赋给$scope
                2. 在页面上用{{}}表达式显示出来  

            */

            /**

                ng-repeat="变量 in $scope.homeDatas = homeDatas 的数组"
                
            **/

        ajax({
            type: "get",
            url: "/JackJonesUser/getHomeDatas",
            //"/JackJonesUser"为app.js中配置的路径/getHomeDatas是JackJonesUser.JS中配置的路径
            success: function(homeDatas) {
               $scope.homeDatas = homeDatas ;
            }
        })
    }])