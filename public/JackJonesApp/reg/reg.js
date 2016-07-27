define(["$","login"],function($,login) {
	var load = function() {
		$("body").load("./reg/reg.html", function() {
			$(".backLogin").on("click",function(){
				require("login").load();
				
			});

			// $(".btn").on("tap", function(){
			// 	console.info($("#username").val())
			// 	ajax({
			// 		type: "POST",
			// 		url: "/JackJonesUser/setRegData",
			// 		data: 
			// 		success: function (data) {
			// 			console.info(data)
			// 		}
			// 	})
			// })

		})
	};
	return {
		load: load 
	}
});