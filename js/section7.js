$(function(){
	var cnt=-1;
		
	//카운트
	setId = setInterval(countFn,10);
	
	
	function countFn(){
		cnt++;
		
		if(cnt <= 414){
			$('.s7Num').eq(0).text(cnt);
		}
		
		if(cnt <= 1992){
			$('.s7Num').eq(1).text(cnt);
		}
		else{
			clearInterval(setId);
		}
		
		if(cnt <= 28 ){
			$('.s7Num').eq(2).text(cnt);
		}
		
	}
	
	
});  //section9.js