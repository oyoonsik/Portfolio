$(function(){
	var sTop = $('#section9').offset().top-300;
	var t=0;
		formatFn();
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= sTop ){
			if(t==0){
				animationFn();
				t=1;
			}
		}
		else{
			if(t==1){
				formatFn();
				t=0;
			}
		}
	});
	
		function formatFn(){
			$('.section9-ani').eq(0).stop().animate({top:600, opacity:0},1200);
			$('.section9-ani').eq(1).stop().animate({top:600, opacity:0},1400);
			$('.section9-ani').eq(2).stop().animate({top:600, opacity:0},1600);
			$('.section9-ani').eq(3).stop().animate({top:600, opacity:0},1800);
		}
		
		function animationFn(){
			$('.section9-ani').eq(0).stop().delay(0).animate({top:0, opacity:1},1000);
			$('.section9-ani').eq(1).stop().delay(200).animate({top:0, opacity:1},1000);
			$('.section9-ani').eq(2).stop().delay(400).animate({top:0, opacity:1},1000);
			$('.section9-ani').eq(3).stop().delay(600).animate({top:0, opacity:1},1000);
		}
		
});  //section9.js