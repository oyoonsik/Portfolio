$(function(){
	
	//입력 상자에 데이터가 입력이 안된상태이면 입력을 요구하는 
	//유효성검사 
	
	
	//키보드 접근성
	$('#idirum').on({
		keyup:	function(){
			if( $(this).val() != '' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
			
			errorBoxFn();
			
		},
		focusout:	function(){
			if( $(this).val() != '' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
		}
	});
	
	$('#idemail').on({
		keyup:	function(){
			if( $(this).val() != '' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
			
			errorBoxFn();
		},
		focusout:	function(){
			if( $(this).val() != '' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
		}
	});
	
	$('#idmessage').on({
		keyup:	function(){
			if( $(this).val() != '' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
			
			errorBoxFn();
			
		},
		focusout:	function(){
			if( $(this).val() != '' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
		}		
	});
	
	
	function errorBoxFn(){
		if( $('#idirum').val()!='' && $('#idemail').val()!='' && $('#idmessage').val()!='' ){
			$('.errorBox').removeClass('addClassInput');	
		}
		else{
			$('.errorBox').addClass('addClassInput');
		}
	}
	
	
	
	$('.sendBtn').on({
		click:	function(){
			
			if( $('#idirum').val()=='' || $('#idemail').val()=='' || $('#idmessage').val()=='' ){
				
				$('.errorBox').addClass('addClassInput');
				
				if( $('#idirum').val()=='' ){
					$('#idirum').addClass('addClassInput');
					$('#idirum').focus();
					// return false;
				}
				else{
					$('#idirum').removeClass('addClassInput');
				}
				
				if( $('#idemail').val()=='' ){
					$('#idemail').addClass('addClassInput');
					$('#idemail').focus();
					// return false;
				}
				else{
					$('#idemail').removeClass('addClassInput');	
				}
				
				if( $('#idmessage').val()=='' ){
					$('#idmessage').addClass('addClassInput');
					$('#idmessage').focus();
					// return false;
				}
				else{
					$('#idmessage').removeClass('addClassInput');	
				}
				
			}
			else{
				$('.errorBox').addClass('addClassInput');
				contactForm.submit();	
			}
			
		}
	});

	
	
	
}); //section14.js