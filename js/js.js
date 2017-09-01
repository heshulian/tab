$(".list li").on("click",function(){
	var ind=$(this).index();
	var liw=$(this).width()
	$(this).addClass("on").siblings().removeClass("on");
	$(".border").stop().animate({"left":ind*liw},200)
	$("main").eq(ind).show().siblings("main").hide();
})