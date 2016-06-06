$('.c-nav__trigger').click(function(event) {
	event.preventDefault();
	$('.c-nav').toggleClass('c-nav--is-active');
});

$('.content').click(function(event) {
	$('.c-nav').removeClass('c-nav--is-active');
	$('.c-nav__item').removeClass('c-nav__item--is-active');
});

$('.js-c-nav__link').click(function(event) {
	if($(this).parent('.c-nav__item').children('.c-nav__sublist').hasClass('c-nav__sublist--has-children')) {
	event.preventDefault();
	$('.c-nav__item').removeClass('c-nav__item--is-active');
	$(this).parent('.c-nav__item').toggleClass('c-nav__item--is-active');
	}
});