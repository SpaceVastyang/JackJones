angular.module("shoppingCartModule", [])
	.controller('shoppingCartController', ['$scope','$state','ajax',function ($scope,$state,ajax){	
		ajax({
			type: "get",
			url: "/JackJonesUser/getProductInfoData",
			success: function(data) {
				// console.log(data)
				$scope.ProductInfoData = data;
			}
		})
	}])
	.directive("deleteBtn", function(ajax){
        return {
            restrict: "A",
            link: function(scope, element, attr) {
               $(element).on("click",function(){
               		var setClassName = {className: $(this).parent().parent().children().eq(1).html()};
               		ajax({
						type: "post",
						url: "/JackJonesUser/setClassName",
						data: setClassName,
						success: function(data) {
							console.info(data)
							if (data == "true") {
								history.go(0) 
								// location.reload() 
							}		
						}
					})	
               })
            }
        }
    });