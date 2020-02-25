$(function(){
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= 2500 ){
			$('.section5-ani1').addClass('addSec5Ani1');
		}
		else{
			$('.section5-ani1').removeClass('addSec5Ani1');
		}
	});
/*---------------------------------------------------------------------*/

	//모달

	$('.setction5ClickBtn').on({
		click: function(){
			$('.modalGallery2').show(0);
		}
	});


	$('.modalGallery2').on({
		click: function(){
			$('.modalGallery2').hide(0);
		}
	});



});