$(function(){
	$.ajax({
		url:'./ajax/address.json',
		type:'GET', // 겟방식
		dataType:'JSON', //JSON,HML,HTML,TEXT,CSV 방식
		success: function(data){ 
			console.log(data);
		}, //성공메세지 성공시 데이터를 보내준다.
		error: function(){
			console.log('바인딩 에러');
		} //에러메세지
		
	});
});
