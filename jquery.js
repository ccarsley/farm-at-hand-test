// JavaScript Document


	$(document).ready(function(){

/////////modal windows///////////// 	 
	 
//login 
	 
	 
	 
//sign up box 
	 $("#continue").click(function(){
    	$("#signUp2").show();
		$("#signUp").hide();
		 });
	
	$("#other").click(function(){
    	$("#other-text").show();
		 });
//end sign up


/////////scroll to top button/////////
		 $(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#scrollUp').fadeIn();	
		} else {
			$('#scrollUp').fadeOut();
		}
	});
 
	$('#scrollUp').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});
		 
//end scroll up button


//features icon states//
 	 
	 $("#icon-activities").mouseover(function(){
    	$("#icon-text-activities").show();
		$("#icon-activities").hide();
		 });
		 
	$("#icon-text-activities").mouseout(function(){
    	$("#icon-text-activities").hide();
		$("#icon-activities").show();
		 }); 

$("#icon-calendar").mouseover(function(){
    	$("#icon-text-calendar").show();
		$("#icon-calendar").hide();
		 });
		 
	$("#icon-text-calendar").mouseout(function(){
    	$("#icon-text-calendar").hide();
		$("#icon-calendar").show();
		 }); 		 

$("#icon-equipment").mouseover(function(){
    	$("#icon-text-equipment").show();
		$("#icon-equipment").hide();
		 });
		 
	$("#icon-text-equipment").mouseout(function(){
    	$("#icon-text-equipment").hide();
		$("#icon-equipment").show();
		 }); 
		 
$("#icon-storage").mouseover(function(){
    	$("#icon-text-storage").show();
		$("#icon-storage").hide();
		 });
		 
	$("#icon-text-storage").mouseout(function(){
    	$("#icon-text-storage").hide();
		$("#icon-storage").show();
		 }); 
		 
$("#icon-deliveries").mouseover(function(){
    	$("#icon-text-deliveries").show();
		$("#icon-deliveries").hide();
		 });
		 
	$("#icon-text-deliveries").mouseout(function(){
    	$("#icon-text-deliveries").hide();
		$("#icon-deliveries").show();
		 });

$("#icon-commodity").mouseover(function(){
    	$("#icon-text-commodity").show();
		$("#icon-commodity").hide();
		 });
		 
	$("#icon-text-commodity").mouseout(function(){
    	$("#icon-text-commodity").hide();
		$("#icon-commodity").show();
		 });

$("#icon-calculator").mouseover(function(){
    	$("#icon-text-calculator").show();
		$("#icon-calculator").hide();
		 });
		 
	$("#icon-text-calculator").mouseout(function(){
    	$("#icon-text-calculator").hide();
		$("#icon-calculator").show();
		 });

$("#icon-yields").mouseover(function(){
    	$("#icon-text-yields").show();
		$("#icon-yields").hide();
		 });
		 
	$("#icon-text-yields").mouseout(function(){
    	$("#icon-text-yields").hide();
		$("#icon-yields").show();
		 });	

$("#icon-contracts").mouseover(function(){
    	$("#icon-text-contracts").show();
		$("#icon-contracts").hide();
		 });
		 
	$("#icon-text-contracts").mouseout(function(){
    	$("#icon-text-contracts").hide();
		$("#icon-contracts").show();
		 });

$("#icon-message").mouseover(function(){
    	$("#icon-text-message").show();
		$("#icon-message").hide();
		 });
		 
	$("#icon-text-message").mouseout(function(){
    	$("#icon-text-message").hide();
		$("#icon-message").show();
		 });		 		  		 		 		 
//end feature states



	
 });//end jquery