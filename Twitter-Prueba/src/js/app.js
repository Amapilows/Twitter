import $ from'jquery';
window.$ = $;
require ('bootstrap');

$('document').ready(function(){
	$("#push__Tweet").on('submit', function(event){
		var text = $("#myTweet").val();
		event.preventDefault();
		$(".new__post").prepend(
			'<div class="new__twitter container">'
			+'<div class="new__twitter--white">'
			+'<img>'
			+'<i class="fas fa-trash-alt button__delete">'
			+'<i class="fas fa-heart"></i>'
			+ text
			+'</div>'
			+'</div>');
	});

	$('#new_tweet').on('click', function (){
		console.log($(this).parent());
	});
		
	$('.card__like').click('click', function(e){
		$(this).toggleClass('card__like--red');
		e.preventDefault();
		e.stopPropagation();
	});

	$('.card__follow-btn').click('click', function(e){
		$(this).toggleClass('card__follow-btn--following');
		e.preventDefault();
		e.stopPropagation();
	});
	$("#author").on("change", function(){
	$(".create__profile img").attr("src", "../src/img/profiles/" + $(this).val());
	});

	
	
});