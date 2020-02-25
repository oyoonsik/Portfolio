$(function(){
	var sTop = [];
	var	winH = $(window).innerHeight();
	var	imgH = $('#section4 img').innerHeight()*2;
		
		//섹션별 포지션 탑값
 		sTop[0]=$('#section2') .offset().top+winH-60;
		sTop[1]=$('#section4') .offset().top+winH-60;
		sTop[2]=$('#section5') .offset().top+winH+imgH-60;
		sTop[3]=$('#section9') .offset().top+winH+imgH-60;
		sTop[4]=$('#section11').offset().top+winH+imgH-60;

		
	//화면에서 스크롤값이 30이상이면 헤더를 상단에 고정하고 높이를 60으로 조정
	//로고 네비게이션 높이도 적절하게 조절
	//goTop버튼도 페이드인아웃
	$(window).scroll(function(){
		if( $(window).scrollTop() >=30 ){
			$('.headClass').addClass('addfixed');
			$('.goTop').stop().fadeIn(1000);
			$('.mainBt').css('color','white');
			$('.logoBt').css('color','white');
		}
		else{
			$('.headClass').removeClass('addfixed');
			$('.goTop').stop().fadeOut(1000);
			$('.mainBt').css('color','#000');
			$('.logoBt').css('color','#000');
		}
	});

	//goTop버튼 클릭시 화면 맨 상단위로 부드럽게 이동
	//스무스스크롤링
	$('.goTopBt, .logoBt').on({
		click:	function(){
			$('html, body').stop().animate({scrollTop:0}, 800,'easeInOutExpo');
		}
	});

	//섹션2, 섹션4, 섹션5, 섹션9, 섹션10, 섹션11 이동
	$('.mainBt').each(function(index){
		$(this).on({
			click:	function(){
				$('html, body').stop().animate({scrollTop:sTop[index]}, 800,'easeInOutExpo');
			}
		});
	});
	
	
}); //header.js