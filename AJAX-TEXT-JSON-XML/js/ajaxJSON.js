$(function(){
	
	$('#Btn2').on({
		click:	function(){
			
			$.ajax({  //ajax 이벤트 핸들러(리스너)
				url:'./json/data.json',
				dataType:'JSON',
				success:	function(data){
					$('#bindList').empty();		
					
					$.each(data.addr,function(){
						$('#bindList').append('<li>' + this.name + ' ' + this.phone  + '</li>');
					});
					
					$('#bindList').listview('refresh');
				},
				error:		function(){
					alert('Ajax 바인딩 실패 !!! ');
				}
			});
			
		}
	});
	
	
});  //ajaxJSON.js