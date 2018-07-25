$(function(){

	$('.card').click('click', function(){
		$(this).toggleClass('card--open')
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

	$("#image").on("change", function(e){
	$(".create__image img").attr("src", "src/img/squared/" + $(this).val());
	});

	$("#author").on("change", function(){
	$(".create__profile img").attr("src", "src/img/profiles/" + $(this).val());
	});

	$
	
});
