$('.nav__trigger').click(function(event) {
	event.preventDefault();
	$('.nav__list').toggleClass('nav__list--active');
});

$('.content').click(function(event) {
	$('.nav__list').removeClass('nav__list--active');
	$('.nav__item').removeClass('nav__item--active');
});

$('.nav__item').click(function(event) {
	event.preventDefault();
	$('.nav__item').removeClass('nav__item--active');
	$(this).toggleClass('nav__item--active');
});