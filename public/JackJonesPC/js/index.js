//    定义placeholder输入提示函数
function showPlaceholder(className ,placeholder){
    $("."+ className +"").focus(function () {
        $("."+ className +"").removeAttr("placeholder");
    }).blur(function () {
        if($(this).val() == "")$("."+ className +"").attr("placeholder",placeholder);
    })
}
showPlaceholder("searchAll","搜索");

//搜索框动画
$(".searchAll").focus(function () {
    $(this).parent().css({
        border: "1px solid lightblue"
    });
    $(this).animate({
       width: 200
    },500)
}).blur(function () {
    $(this).parent().css({
        border: "1px solid #b3b3b3"
    });
    $(this).animate({
        width: 113
    },500)
});

   
//固定侧边栏

//当用户滚动指定的元素时，会发生 scroll 事件。
//scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。

$(window).scroll(function () {
    $(".fixed-operate").css({
        top: $(window).scrollTop() + 180 //$(window).scrollTop()取top值
    });
});
