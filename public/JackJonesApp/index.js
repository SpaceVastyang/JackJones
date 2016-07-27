define(["$","login","search","classList","home"],function($,login,search,classList,home){
	$(".user").on("click", function() {
		login.load();
	});
	$(".collect").on("click",function(){
		classList.load();
	});
	$(".logo").on("click",function(){
		home.load();
	});
	$(".find").on("click",function(){
		search.load();
	});
});