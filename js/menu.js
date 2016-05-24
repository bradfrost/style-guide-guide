$('.nav__trigger').click(function(event) {
	event.preventDefault();
	$('.nav__list').toggleClass('nav__list--active');
});

$('.nav__item').click(function(event) {
	$('.nav__item').removeClass('nav__item--active');
	event.preventDefault();
	$(this).toggleClass('nav__item--active');
});