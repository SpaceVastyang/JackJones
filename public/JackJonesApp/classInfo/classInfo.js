define(["$","shoppingCar"],function($,shoppingCar){
	var load = function(){
		$(".content").load("./classInfo/classInfo.html",function(){
			$(".details-buy-now").on("click",function(){
				shoppingCar.load();
			})
		})
	};
	return {
		load: load
	}
})