$(function(){ 
var leftH=0; 
	
	sec3LeftBoxResize();
	
	$(window).resize(function(){  //너비나 높이가 변경이 되어야 실행
		sec3LeftBoxResize();
	});
	
	//섹션3의 좌측 상자높이로 우측상자 높이 설정
	function sec3LeftBoxResize(){
		leftH = $('.section3-content-left-wrap').innerHeight();  //좌측상자 높이값
		$('.section3-content-right-wrap').css({ height : leftH }); 
	}
	
}); //section3.js