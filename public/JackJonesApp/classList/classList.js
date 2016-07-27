define(["$","classInfo"],function($,classInfo){
	var load = function(){
		$(".content").load("./classList/classList.html",function(){
			$(".commodity-block").on("click",function(){
				classInfo.load();
			})
		})
	};
	return {
		load: load
	}
});