define(["$"],function($){
	var load = function() {
		$(".content").load("./search/search.html", function() {
			console.info("search")
		})
	};
	return {
		load: load
	}
});