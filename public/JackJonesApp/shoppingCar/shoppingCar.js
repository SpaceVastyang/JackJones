define(["$"],function($){
	var load = function(){
		$(".content").load("./shoppingCar/shopping.html",function(){
			console.info("shoppingCar")
		})
	};
	return {
		load: load
	}
});