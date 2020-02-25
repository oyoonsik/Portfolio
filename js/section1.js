$(function(){
	var sec1H=winH=txtHposTop=0; 

	// var sec1H=0; 	//섹션1 높이 변수
	// var winH=0;  	//윈도우(창) 높이 변수
	// var txtH=0;		//텍스트상자(글상자) 높이 변수
	// var posTop=0;	//텍스트상자(글상자) 탑값 변수(absolte - top: posTop)
	
	windowResizeFn();
	sec1TextTopResize();
	
	//섹션1은 윈도우 창높이로 높이 설정
	$(window).resize(function(){  //너비나 높이가 변경이 되어야 실행
		windowResizeFn();
		sec1TextTopResize();
	});
	
	function windowResizeFn(){
		sec1H = $(window).innerHeight(); //창높이 변경되는 즉시 반응 높이 설정
		$('#section1').css({ height : sec1H });
	}
	
	//섹션1의 텍스트 콘텐츠 상하 가운데 정렬
	function sec1TextTopResize(){
		//포지션탑값=(창높이-텍스트상자높이)/2
		winH = $(window).innerHeight();  //창높이값
		txtH = $('.section1-content-wrap').innerHeight(); //텍스트상자높이값
		posTop = (winH-txtH)/2;  //포지션 탑값
		$('.section1-content-wrap').css({ top : posTop });
	}


	
}); //section1.js