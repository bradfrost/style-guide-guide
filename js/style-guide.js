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

})();

/*------------------------------------*\
    #TABS
\*------------------------------------*/
/**
 * Tabs Activation
 * 1) Add active class to the first tab and panel by default
 * 2) Add active class to first js-tabs-list__item (used in code tabs in styleguide)
 * 3) On click of tab, prevent page jumping and run openTab function
 */

(function(){

	var tabContainer = document.querySelectorAll('.js-tabs');
	var tabBtn = document.querySelectorAll('.js-tab');
	var tabContent = document.querySelectorAll('.js-tabs-panel');
	var tabsList = document.querySelectorAll('.js-tabs-list');

	for (i=0; i<tabContainer.length; i++) {
		var tabFirst = tabContainer[i].querySelector('.js-tab:first-child'); /* 1 */
		var tabPanelFirst = tabContainer[i].querySelector('.js-tabs-panel:first-child'); /* 1 */
		tabFirst.classList.add('is-active'); /* 1 */
		tabPanelFirst.classList.add('is-active'); /* 1 */
	}

	for (i=0; i<tabsList.length; i++) {
		var tabsListItem = tabsList[i].querySelector('.js-tabs-list-item:first-child'); /* 2 */
		tabsListItem.classList.add('is-active'); /* 2 */
	}

	for (i=0; i<tabBtn.length; i++) {
		tabBtn[i].addEventListener('click', function (e) { /* 3 */
			e.preventDefault();/* 3 */
			openTab(this);/* 3 */
		});
	}

	/**
	 * Open Tab function
	 * 1) Pass in clicked tab into function as el
	 * 2) Get href of the clicked tab. Also get the data-code-tabs attribute.
	 *    These are used to show and hide proper tab panel or tabs-list__items
	 *    when the correlating variation is clicked on
	 * 3) Remove active class from all tabs on click (click event above).
	 *    Add active class to clicked tab.
	 * 4) Select this tab's href and create new Href. If tab href exists on click,
	 *    add active class to the tab.
	 * 5) Select all tabs panels. On click remove all active classes from panels.
	 *    Add class to panel associated with tab clicked on.
	 * 6) For all tabs lists (list of code block tabs on styleguide), select all
	 *    tab list items. If data-code-tabs matches between variation tab
	 *    clicked and tabs list item, remove active classes from all tab list
	 *    items and add active class to item with same data-code-tabs value.
	 * 7) Add active class to tab whose href matches the correct tabs panel.
	 */
	function openTab(el) { /* 1 */
		thisHref = el.getAttribute('href'); /* 2 */
		thisData = el.getAttribute('data-code-tabs');/* 2 */

		var tabParent = el.parentNode.parentNode.parentNode;
		var tabBtns = tabParent.querySelectorAll('.js-tab');

		for (j=0; j<tabBtns.length; j++) {
			tabBtns[j].classList.remove('is-active'); /* 3 */
		}

		el.classList.add('is-active'); /* 3 */

		var newHref = document.querySelector(thisHref); /* 4 */
		var newerHref = newHref.querySelector('.js-tabs-panel');
		var firstLink = newHref.querySelector('.js-tab'); /* 4 */
		if (firstLink) {
			firstLink.classList.add('is-active'); /* 4 */
		}

		var tabsPanel = tabParent.querySelectorAll('.js-tabs-panel');
		for (j=0; j<tabsPanel.length; j++) {
			tabsPanel[j].classList.remove('is-active'); /* 5 */
			if (newerHref) {
				newerHref.classList.add('is-active'); /* 5 */
			}
		}

		var tabsList = document.querySelectorAll('.js-tabs-list');
		for (k=0; k<tabsList.length; k++) { /* 6 */
			var tabsListItem = tabsList[k].querySelectorAll('.js-tabs-list-item'); /* 6 */
			for (l=0; l<tabsListItem.length; l++) {
				if (el.getAttribute('data-code-tabs') == tabsListItem[l].getAttribute('data-code-tabs')) { /* 6 */
					var tabsItems = tabsList[k].querySelectorAll('.js-tabs-list-item');
					for (m=0; m<tabsItems.length; m++) {
						tabsItems[m].classList.remove('is-active');/* 6 */
					}
					tabsListItem[l].classList.add('is-active');/* 6 */
				}
			}
		}

		document.querySelector(thisHref).classList.add('is-active'); /* 7 */
	}

})();

/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Toggles active class on the primary nav item
 * 1) Select all nav dropdown triggers and cycle through them
 * 2) If not a button, add ARIA role and - to be safe - tabindex=0
 * 3) Add explicit keyboard handling for SPACE (like a real <button>)
 * 4) Add aria-expanded (based on initial state)
 * 5) On click, find the nav dropdown trigger parent
 * 6) If the nav dropdown trigger parent already has active class, remove it and set aria-expanded=false on toggle.
 * 7) If the nav dropdown trigger parent does not have an active class, add it and set aria-expanded=true on toggle.
 */
(function(){

	var navLink = document.querySelectorAll('.js-nav-dropdown-trigger'); /* 1 */

	for (i=0; i<navLink.length; i++) { /* 1 */

		if (navLink[i].nodeName != 'BUTTON') { /* 2 */
			  navLink[i].setAttribute('role','button');
				navLink[i].setAttribute('tabindex','0');
				
				navLink[i].addEventListener('keypress',function(event){ /* 3 */
							if (event.keyCode == 32) {
									event.preventDefault();
									this.click();
							}
				});
		}
		
		if (navLink[i].parentNode.classList.contains('is-active')) {  /* 4 */
				navLink[i].setAttribute('aria-expanded','true');
		}
		else {
				navLink[i].setAttribute('aria-expanded','false');
		}

		navLink[i].addEventListener('click',function(event){ /* 5 */
	        event.preventDefault();
	        var navLinkParent = this.parentNode; /* 5 */

	        if (navLinkParent.classList.contains('is-active')) { /* 6 */
	            navLinkParent.classList.remove('is-active');
							this.setAttribute('aria-expanded', 'false');
	        }
	        else { /* 7 */
	            navLinkParent.classList.add('is-active');
							this.setAttribute('aria-expanded', 'true');
	        }
		});
	}

	/**
	 * Toggles active class on the primary nav panel
	 * 1) Select all nav triggers and cycle through them
	 * 2) If not a button, add ARIA role and - to be safe - tabindex=0
	 * 3) Add explicit keyboard handling for SPACE (like a real <button>)
	 * 4) Add aria-expanded (based on initial state)
	 * 5) On click, find the nav panel within the header
	 * 6) If the navPanel already has active class, remove it and set aria-expanded=false on toggle.
	 * 7) If the navPanel does not have an active class, add it and set aria-expanded=true on toggle.
	 */
	var navToggle = document.querySelectorAll('.js-nav-trigger');/* 1 */

	for (i=0; i<navToggle.length; i++) { /* 1 */

		if (navToggle[i].nodeName != 'BUTTON') { /* 2 */
			  navToggle[i].setAttribute('role','button');
				navToggle[i].setAttribute('tabindex','0');
				
				navToggle[i].addEventListener('keypress',function(event){ /* 3 */
							if (event.keyCode == 32) {
									event.preventDefault();
									this.click();
							}
				});
		}
		
		if (navToggle[i].parentNode.classList.contains('is-active')) {  /* 4 */
				navToggle[i].setAttribute('aria-expanded','true');
		}
		else {
				navToggle[i].setAttribute('aria-expanded','false');
		}
		
		navToggle[i].addEventListener('click',function(event){ /* 5 */
	        event.preventDefault();
	        var navToggleParent = this.parentNode; /* 5 */
	        var navPanel = navToggleParent.querySelector('.js-nav-panel'); /* 5 */

	        if (navPanel.classList.contains('is-active')) { /* 6 */
	            navPanel.classList.remove('is-active');
							this.setAttribute('aria-expanded', 'false');
	        }
	        else { /* 7 */
	            navPanel.classList.add('is-active');
							this.setAttribute('aria-expanded', 'true');
	        }
		});
	}
	
	/**
	 * Sets aria-current to the current navigation link
	 * 1) Select all items denoted as current
	 * 2) Add the aria-current attribute
	 */
	 
	 	var navLink = document.querySelectorAll('.is-current'); /* 1 */
	 
	 	for (i=0; i<navLink.length; i++) { /* 1 */
			navLink[i].setAttribute('aria-current', 'page'); /* 2 */
		}

})();
