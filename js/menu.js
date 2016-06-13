$('.c-nav__trigger').click(function(event) {
	event.preventDefault();
	$('.c-nav').toggleClass('c-nav--is-active');
});

$('.js-nav__link').click(function(event) {
	if($(this).parent('.c-nav__item').children('.c-nav__sublist').hasClass('c-nav__sublist--has-children')) {
	event.preventDefault();
	$(this).parent('.c-nav__item').toggleClass('c-nav__item--has-children--is-active');
	}
});
