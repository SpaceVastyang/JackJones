define(["$"], function($) {
	var load = function(){
		$(".content").load("./home/home.html", function() {//index的相对路径
			var count = 0;
			var liEle = $(".icons li");
			//滑动切换图片
			$(".sliderWrap").on("swipeLeft",".slider",function(){//事件委托
				console.info(count)
				if (count < 4) {
					count++;
					$(this).animate({
						"left": -100 * count + "%", 
					},1000);
					//icons变换
					$(this).next().children().css("backgroundColor","#fff");
					$(this).next().children().eq(count).css("backgroundColor","#000");
				}
			}).on("swipeRight",".slider",function(){
				console.info(count)	
				if (count > 0) {
					--count;
					$(this).animate({
						"left": -100 * count + "%", 
					},1000);
					//icons变换
					$(this).next().children().css("backgroundColor","#fff");
					$(this).next().children().eq(count).css("backgroundColor","#000");
				}
			})

			//请求数据

			//msg[i].sliderImg是一个对象，sliderImgs是变量出这个对象中每一个属性，获取这个属性的值要用[]
			$.ajax({
				type: "GET",
				url: "/appUser/getAppHomeDatas",
				success: function(msg){
					for (var i = 0;i < msg.length; ++i){
						var slideDiv = $("<div>").addClass("slide");
						var sliderDiv = $("<div>").addClass("slider");
						var ul = $("<ul>").addClass("icons")

						slideDiv.appendTo($(".sliderWrap")).append(sliderDiv,ul)
						$.each(msg[i].sliderImg,function(index, el) {
							// console.info(index,el)
							var li = $("<li>")	
							var imgDiv = $("<div>").addClass("img");
							var imgEle = $("<img>");
							li.appendTo(ul);
							sliderDiv.prepend(imgDiv)//append()方法添加到最后，prepend（）方法添加到最后
							imgDiv.append($("<img>").attr("src",el.img))
						});
					}
				}
			})
		})
	};
	return {
		load: load
	}
})