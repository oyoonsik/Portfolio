$(function(){ 

var leftH=0; 
var t=0;
	
	//그래프 바 애니메이션
	function graphBarFn(){
		$('.s8-bar-wrap').eq(0).children().stop().animate({width:'100%'},2000);
		$('.s8-bar-wrap').eq(1).children().stop().animate({width:'100%'},3000);
		$('.s8-bar-wrap').eq(2).children().stop().animate({width:'90%'},2500);
		$('.s8-bar-wrap').eq(3).children().stop().animate({width:'90%'},1800);
		$('.s8-bar-wrap').eq(4).children().stop().animate({width:'80%'},1800);
		$('.s8-bar-wrap').eq(5).children().stop().animate({width:'80%'},1800);
		$('.s8-bar-wrap').eq(6).children().stop().animate({width:'70%'},1800);
	}
	
	function graphBarformatFn(){
		$('.s8-bar-wrap').eq(0).children().stop().animate({width:'0%'},1000);
		$('.s8-bar-wrap').eq(1).children().stop().animate({width:'0%'},1000);
		$('.s8-bar-wrap').eq(2).children().stop().animate({width:'0%'},1000);
		$('.s8-bar-wrap').eq(3).children().stop().animate({width:'0%'},1000);
		$('.s8-bar-wrap').eq(4).children().stop().animate({width:'0%'},1000);
		$('.s8-bar-wrap').eq(5).children().stop().animate({width:'0%'},1000);
		$('.s8-bar-wrap').eq(6).children().stop().animate({width:'0%'},1000);
	}
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= $('#section2').offset().top ){
			if( t==0 ){
				graphBarFn();
				t=1;				
			}
		}
		else{
			if(t==1){
				graphBarformatFn();
				t=0;
			}		
		}
	});
	
	
	
	sec8LeftBoxResize();
	
	$(window).resize(function(){  //너비나 높이가 변경이 되어야 실행
		sec8LeftBoxResize();
	});
	
	//섹션3의 좌측 상자높이로 우측상자 높이 설정
	function sec8LeftBoxResize(){
		leftH = $('.section8-content-wrap>li').eq(0).innerHeight();  //1번째상자 높이값
		$('.section8-content-wrap>li').eq(1).css({ height : leftH }); //2번째 상자
		$('.section8-content-wrap>li').eq(2).css({ height : leftH }); //3번재 상자
	}
	
}); //section8.js