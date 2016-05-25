$('.nav__trigger').click(function(event) {
	event.preventDefault();
	$('.nav').toggleClass('nav--is-active');
});

$('.content').click(function(event) {
	$('.nav').removeClass('nav--is-active');
	$('.nav__item').removeClass('nav__item--is-active');
});

$('.js-nav__link').click(function(event) {
	event.preventDefault();
	$('.nav__item').removeClass('nav__item--is-active');
	$(this).parent('.nav__item').toggleClass('nav__item--is-active');
});