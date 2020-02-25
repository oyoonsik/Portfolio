$(function(){
	var t=0,t2=0;
	$('.mutedBtn').children('i').attr('class','fas fa-volume-up');
	
	
//비디오 일시정지 버튼 클릭 이벤트
$('.videoPlayBtn').on({
	click:	function(){
		if(t==0){
			t=1;
			$('.introVideo').get(0).pause();  //일시정지
			$(this).children('i').attr('class','fas fa-play'); //플레이 가능하도록 아이콘 변경
		}
		else{
			t=0;
			$('.introVideo').get(0).play();  //재시작
			$(this).children('i').attr('class','fas fa-pause'); //일시정지 가능하도록 아이콘 변경
		}
	}
});

//소리 끄기 켜기
$('.mutedBtn').on({
	click:	function(){

		if( $('.introVideo').get(0).muted == false ){
			$('.introVideo').get(0).muted=true;   	//켜기
			$(this).children('i').attr('class','fas fa-volume-up'); //fas fa-volume-up
		}
		else if( $('.introVideo').get(0).muted == true ){
			$('.introVideo').get(0).muted=false;   	//끄기
			$(this).children('i').attr('class','fas fa-volume-mute');
		}
		
	}
});

	// $('.mainVideo').each(function(index){
		// $(this).on({
			// mouseenter:	function(){
				// $('.mainVideo').eq(index).get(0).pause();
			// },
			// mouseleave:	function(){
				// $('.mainVideo').eq(index).get(0).play();
			// },
			
		// });
	// });






}); //video.js