jQuery(function($){
	
	/************************* 
	 Functions
	**************************/
	
	function showAnswerFAQ(){ 
		
		$( ".faq-question").click(function(e) {		
		    $(this).siblings().slideToggle().parents('.faq-holder').toggleClass('active');
		});
		
		$( ".faq-icon").click(function(e) {	
			$(this).siblings('.faq-content').find('.faq-answer').slideToggle().parents('.faq-holder').toggleClass('active');
		});
	}
	
	
	/************************* 
	 Execution
	**************************/

	$(document).ready(function(){
		showAnswerFAQ();
   	});


});