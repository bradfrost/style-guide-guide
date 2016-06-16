
/**
 * Add Active State to Current Page(and parent link if it is a sublist page) in Nav 
 */
$(function() {
     var pgurl = window.location.href.replace(/^.*\/\/[^\/]+/, '');
     $(".c-nav__link").each(function(){
	     console.log(pgurl);
	     console.log($(this).attr("href"));
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' ) {
          $(this).addClass("c-nav__link--is-active");
          $(this).parentsUntil('.c-nav__list').children('.c-nav__link').addClass('c-nav__link--is-active');
          }
     })
});

/**
 * Open and Close Nav With Nav Trigger
 */
$('.c-nav__trigger').click(function(event) {
	var trigger = $('.c-nav__trigger');
	event.preventDefault();
	$('.c-nav').toggleClass('c-nav--is-active');
	trigger.toggleClass('c-nav__trigger--is-active');
	$('.c-header').toggleClass('c-header--is-active');
	$('.content').toggleClass('content--is-overlayed');
	if (trigger.hasClass("c-nav__trigger--is-active")) {
            trigger.html("close");
        } 
    else {
        trigger.html("menu");
    }
});

/**
 * Close Nav on Small Screens by Clicking Anywhere Within the .content Portion of the Page 
 */
$('.content').click(function(event) {
	event.preventDefault();
	$('.c-nav').removeClass('c-nav--is-active');	
});

/**
 * Expand Sublist In Nav By Adding Active Class to Parent List Item
 */
$('.js-nav__link').click(function(event) {
	if($(this).parent('.c-nav__item').children('.c-nav__sublist').hasClass('c-nav__sublist--has-children')) {
	event.preventDefault();
	$(this).parent('.c-nav__item').toggleClass('c-nav__item--has-children--is-active');
	}
});