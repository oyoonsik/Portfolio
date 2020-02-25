$(function(){ 
	var imgH=0, z=0, clickNum=0, t=0, cols=4, rows=2, cnt=-1;
	var a=[];
	var winW = $(window).innerWidth();
	var n=$('.section4-gallery-wrap>li').length;  //총이미지 갯수		
		
		
		//모달창열기
		$('.section4-gallery-wrap a').on({
			click:	function(){				
				//현재 클릭된 앵커버튼(Anchor Button)의 자식 이미지 가져오기
				imgName   = parseInt($(this).find('img').attr('src').slice(14,16));				
			
				imgGalleryFn( imgName );

				$('.modalGallery').show(0);
				$('html').addClass('addModal');
			}
		});
		
		function imgGalleryFn( z ){
			$('.modalGallery-image>img').attr('src', 'img/portfolio-0' + z + '.jpg' );								
		}
		
		
		//클릭이벤트 다음(Next) 이미지 이벤트
		$('.modalGallery-next-Btn').on({
			click:	function(){
				imgName++;  //imgName=imgName+1
				if( imgName > 8 ){
					imgName=1;   //8보다 큰 이미지는 없으니까 초기화 1로 설정
				}				 //마지막 이미지이면 처음 이미지(1)로 설정

				imgGalleryFn( imgName );

			}
		});
		
		//클릭이벤트 이전 (Prev) 이미지 이벤트
		$('.modalGallery-prev-Btn').on({
			click:	function(){
				imgName--;  //imgName=imgName-1
				if( imgName < 1 ){
					imgName=8;   //1보다 작은 이미지는 없으니까 마지막 이미지 번호 8로 설정
				}
				
				imgGalleryFn( imgName );
				
			}
		});
		
		
		
	
		//모달창 닫기
		$('.mCloseBt').on({
			click:	function(){
				//$('#modal').hide(0);
				$('.modalGallery').hide(0);
				$('html').removeClass('addModal');
			}
		});	
		resizeGalleryMainFn( 0 );			
		$('.s4galleryBt').each(function(index){
			$(this).on({
				click:	function(){
					clickNum = index ;
					resizeGalleryMainFn( index );			
				}	//클릭 콜백 끝
			});
		});			
		$(window).resize(function(){
			winW = $(window).innerWidth();
			resizeGalleryMainFn( clickNum );	
		});			
		//갤러리 함수 - 반응형 과 버튼 클릭 
		//          : 클릭할때 호출하고 그리고 창크기 리사즈도 되고 두가지
		function resizeGalleryMainFn( z ){
			
			$('.section4-gallery-wrap li div').removeClass('addSec4Scale');							
			$('.s4galleryBt').removeClass('addSec4Hover');
			$('.s4galleryBt').eq(z).addClass('addSec4Hover');
			
			
			if( z == 0 ){			
				n = 8;  	//show() 이미지 갯수
				h = 0;
				
				if( $(window).innerWidth() >= 1100 ){	
					cols = 4;
				}
				else if(  $(window).innerWidth() >= 800 ){
					cols = 3;
				}	
				else if(  $(window).innerWidth() >= 600 ){
					cols = 2;
				}	
				else if(  $(window).innerWidth() >= 0 ){
					cols = 1;
				}	
				
				rows = parseInt(n/cols+0.9);  // 줄수(행의 수)    2=8/4,   3=parseInt(8/3+0.9) (2.666+0.9) 4=8/2  8=8/1
				imgH = (winW/cols)*0.75;	//이미지높이 = 이미지가로너비*세로비율				
				$('.section4-gallery-wrap').stop().animate({height: imgH*rows }); //갤러리전체 박스 높이 = 이미지1개당 높이*줄수			
				cnt=-1;	
				for(i=0; i<rows; i++){  //0, 1
					for(j=0; j<cols; j++){  //0, 1, 2, 3
						cnt++;     //cnt=cnt+1;  0 1 2 3 4 5 6 7
						$('.section4-gallery-wrap li').eq(cnt).stop().show().animate({left:( (100/cols) * j )+'%', top:( imgH * i ), width:(100/cols)+'%' ,height:imgH },500);
					}
				}								
			}
			else{
				n = 5;  	//show() 이미지 갯수
				h = 3;      //hide() 이미지 갯수(보이지 않는 이미지 갯수)
				
				if( z == 1 ){
					a=[0,1,4,2,3,5,6,7];
				}
				else if( z == 2 ){
					a=[0,5,6,1,2,3,4,7];
				}
				else if( z == 3 ){
					a=[1,3,5,0,2,4,6,7];
				}
				else if( z == 4 ){
					a=[3,4,7,0,1,2,5,6];
				}
				
				if( $(window).innerWidth() >=1100 ) {
					cols = 4;
				}	
				else if( $(window).innerWidth() >=800 ) {
					cols = 3;
				}
				else if( $(window).innerWidth() >=600 ) {
					cols = 2;		
				}
				else if( $(window).innerWidth() >=0 ) {
					cols = 1;
				}										
				rows = parseInt(n/cols+0.9);  // 줄수(행의 수)    2=8/4,   3=parseInt(8/3+0.9) (2.666+0.9) 4=8/2  8=8/1
				imgH = (winW/cols)*0.75;	//이미지높이 = 이미지가로너비*세로비율				
				$('.section4-gallery-wrap').stop().animate({height: imgH*rows }); //갤러리전체 박스 높이 = 이미지1개당 높이*줄수
				
				$('.section4-gallery-wrap li').eq(a[0]).stop().hide().animate({width:0, height:0},500)     					
				$('.section4-gallery-wrap li').eq(a[1]).stop().hide().animate({width:0, height:0},500);
				$('.section4-gallery-wrap li').eq(a[2]).stop().hide().animate({width:0, height:0},500);
						
				cnt=2;	
				for(i=0; i<rows; i++){  //0, 1
					for(j=0; j<cols; j++){  //0, 1, 2, 3
						cnt++;     //cnt=cnt+1;  3 4 5 6 7
						$('.section4-gallery-wrap li').eq( a[ cnt ] ).stop().show().animate({left:( (100/cols) * j )+'%', top:( imgH * i ), width:(100/cols)+'%' ,height:imgH },500);
					}
				}
			} //if문 end			
			$('.section4-gallery-wrap li div').addClass('addSec4Scale');						
		}			
}); //section4.js