import $ from'jquery';
window.$ = $;
require ('bootstrap');

$('document').ready(function(){
	$("#push__Tweet").on('submit', function(event){
		var text = $("#myTweet").val();
		var img = $("#create__profile").val(); 
		event.preventDefault();
		$(".new__post").prepend(
			'<div class="new__twitter container">'
			+ '<div class="new__twitter--white">'
			+ '<img src="../src/img/profiles/" class="create__img">'
			+ img
			+ '<i class="fas fa-trash-alt button__delete">'
			+ '<i class="fas fa-heart card__like" id="counter"></i>'
			+ text
			+ '</div>'
			+ '</div>');
	});

	$('#new_tweet').on('click', function (){
		console.log($(this).parent());
	});
		
	$('.card__like').click('click', function(e){
		$(this).addClass('card__like--red');
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

	$(".post__like").on('click', function(){
		counter = $("#counter").text();
		counter =parseInt(counter);
		console.log(counter + 1);
		$('#counter').text(counter + 1);
	})

	
	
});