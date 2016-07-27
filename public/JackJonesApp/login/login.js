define(["$","reg"], function($,reg) {
	var load = function(){
		$("body").load("./login/login.html", function() {
			$(".reg").on("click", function(){
				reg.load();
			})
			$(".loginBack").on("click",function(){
				location.href = "./index.html";
			})	

			$(".btn").on("click",function(){
				$.ajax({
					type: "POST",
					url: "/JackJonesUser/login",
					data: "username=" + $("#username").val() + "&password=" + $("#password").val(),
					success: function(msg){
						console.info(msg)
						if(msg == "true"){
							location.href = "./index.html";
						} else {
							$("#tips").html("用户名或密码错误,请核对后重新输入!!").css("color","red");
						}
					}
				})
			})	
		})
	};
	return {
		load: load
	}
});
