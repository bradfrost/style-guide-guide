/**
 * Style Guide specific JavaScript
 */
(function(){

	/**
	 * Trigger iframe resize height interval
	 * 1) Some components further down the page may not have loaded the necessary assets on page load, which means
	 *    the auto-resizing of the iframe needs to recalculate its height on an interval
	 */

	var counter = 0;

	var iframeInterval = setInterval(function(){
		//Iframe resize height functionality
		$('.iffframe__iframe').iFrameResize({heightCalculationMethod:'max',resizeFrom:'child'});
		counter++;

	    if (counter >= 20) {
	        clearInterval(iframeInterval);
	    }

	}, 250);

	/**
	 * Iframe resize handle
	 * 1) Add resize width functionality to iframes. Drag the right side of the iframe and resize the content.
	 */

	// States for the iframe resize handle.
	var drag_active = false;
	var drag_element = '';

	// Resizeable iframe
	$(".iffframe__handle").on("mousedown", function(evt){
	    drag_element = $(this).parent();
	    drag_active = true;
	    $(this).addClass("active");
	    // Disable pointer events in iframes while user resizes
	    drag_element.find("iframe").css("pointer-events", "none");
	});

	$(document).on("mouseup", function(evt){
	    drag_active = false;
	    $(".iffframe__iframe").css("pointer-events", "auto");
	    $(".iffframe__handle").removeClass("active");
	});

	$(document).on("mousemove", function(evt){
	    if (drag_active){
	        var offset = element_position(drag_element.get(0));
	        var mouseX = evt.pageX - offset.x - 5 ;
	        drag_element.width(mouseX);
	        update_iframe_status(drag_element, mouseX);
	    }
	});

	// Updates the px/em tag on iframes
	function update_iframe_status(elem, width){
	    // $(elem).find("#pixels").html(width);
	    // $(elem).find("#rems").html(px_to_em(width));
	}

	// Calculates an elements offset for relative mouse positioning
	function element_position(e) {
	  var x = 0, y = 0;
	  var inner = true ;
	  do {
	      x += e.offsetLeft;
	      y += e.offsetTop;
	      var style = getComputedStyle(e,null) ;
	      var borderTop = getNumericStyleProperty(style,"border-top-width") ;
	      var borderLeft = getNumericStyleProperty(style,"border-left-width") ;
	      y += borderTop ;
	      x += borderLeft ;
	      if (inner){
	        var paddingTop = getNumericStyleProperty(style,"padding-top") ;
	        var paddingLeft = getNumericStyleProperty(style,"padding-left") ;
	        y += paddingTop ;
	        x += paddingLeft ;
	      }
	      inner = false ;
	  } while (e = e.offsetParent);

	  return { x: x, y: y };
	}

	// Returns a numeric style property for use in offset calculations
	function getNumericStyleProperty(style, prop){
	  return parseInt(style.getPropertyValue(prop),10);
	}

	// Converts pixels to ems
	function px_to_em(input) {
	    //var emSize = parseFloat($("body").width());
	    //return Math.round((input / emSize) * 100) / 10;
	    return Math.round((input/16) * 10)/10;
	}

	// Converts ems to px
	function em_to_px(input) {
	    return Math.round((input*16) * 10)/10;
	}

	// Copy to clipboard functionality
	var clipboard = new Clipboard('.pattern-code-copy-btn');

	clipboard.on('success', function(e) {
	    e.trigger.textContent = 'Copied';
	});

	//iframe viewport change size

	var smallButton = document.querySelectorAll(".js-small-btn");
	var mediumButton = document.querySelectorAll(".js-medium-btn");
	var largeButton = document.querySelectorAll(".js-large-btn");
	var iFrame = document.querySelectorAll('.iffframe');
	var iFrameHandle = document.querySelectorAll('.iffframe__handle');

	for (i=0; i<iFrameHandle.length; i++) {
		iFrameHandle[i].addEventListener('mouseover',function(e){
			for(j=0; j<iFrame.length; j++) {
				iFrame[j].style.transition = "none";
			}
		});
	}

	for (i=0; i<smallButton.length; i++) {
		smallButton[i].addEventListener('click',function(e){
			for (j=0; j<iFrame.length; j++) {
				var thisParent = this.parentNode.parentNode.parentNode.parentNode.parentNode;
				var thisIframe = thisParent.nextElementSibling;
				var randomNumber = Math.floor(Math.random() * (500 - 320 + 1)) + 320;
				thisIframe.setAttribute("style", "width:"+randomNumber+"px; transition: width 0.6s ease;");
			}
		});
	}
	for (i=0; i<mediumButton.length; i++) {
		mediumButton[i].addEventListener('click',function(e){
			for (j=0; j<iFrame.length; j++) {
				var thisParent = this.parentNode.parentNode.parentNode.parentNode.parentNode;
				var thisIframe = thisParent.nextElementSibling;
				var randomNumber = Math.floor(Math.random() * (800 - 500 + 1)) + 500;
				thisIframe.setAttribute("style", "width:"+randomNumber+"px; transition: width 0.6s ease;");
			}
		});
	}
	for (i=0; i<largeButton.length; i++) {
		largeButton[i].addEventListener('click',function(e){
			for (j=0; j<iFrame.length; j++) {
				var thisParent = this.parentNode.parentNode.parentNode.parentNode.parentNode;
				var thisIframe = thisParent.nextElementSibling;
				var randomNumber = Math.floor(Math.random() * (1200 - 800 + 1)) + 800;
				thisIframe.setAttribute("style", "width:"+randomNumber+"px; transition: width 0.6s ease;");
			}
		});
	}

	/**
	 * Show more button
	 * 1) Add class of is-expanded to the grandparent element to expand the contents inside
	 * 2) On click of the show more button, remove this and its parent to get rid of the faded contents.
	 */
	var showMore = document.querySelectorAll('.js-show-more-btn');
	for (i=0; i<showMore.length; i++) {
		showMore[i].addEventListener('click', function (e) {
			e.preventDefault();
			var thisParent = this.parentNode;
			var thisGrandparent = this.parentNode.parentNode;
			thisGrandparent.classList.add('is-expanded');
			thisGrandparent.removeChild(thisParent); /* 2 */
		});
	}
	var patternCode = document.querySelectorAll('.pattern-code-block');
	for (i=0; i<patternCode.length; i++) {
	function getTheStyle(){
		var theCSSprop = window.getComputedStyle(patternCode[i],null).getPropertyValue("height");
		//console.log(theCSSprop);
	}
		getTheStyle();
	}

	/**
	 * Show more button removal on short height elements
	 * 1) After content is loaded, get client height of code block. Added after DOM content is
	 *    loaded due to prism adding the styling (and the code block height) for the code blocks.
	 * 2) Remove "show all code" button if height of block is less than 400px
	 * 3) On click of variation tabs, target the parentNodes to select show-more div
	 * 4) Once clicked on, remove the "show all code" button if the height of the code block is
	 *    less than 400px
	 */

	document.addEventListener('DOMContentLoaded', function() { /* 1 */
			if (document.querySelector('.pattern-code')) {
				var patternCode = document.querySelector('.pattern-code');
				if (document.querySelector('.pattern-code').clientHeight <= 400 && patternCode.querySelector('.show-more')) {/* 2 */
					var showMoreBtn = patternCode.querySelector('.show-more');
					patternCode.removeChild(showMoreBtn); /* 2 */
				}
			}
	}, false);

})();
