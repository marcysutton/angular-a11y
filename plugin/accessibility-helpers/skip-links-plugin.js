/*!
 * skip-links-plugin.js
 * MIT licensed
 *
 * Copyright (C) 2013 Marcy Sutton, http://marcysutton.com
 */

var SkipLinks = (function(){

	'use strict';

  var SKIP_TO_NAV_LINK_SELECTOR = '#skip-to-toc',
    SLIDE_SKIP_LINKS_SELECTOR = 'table-of-contents',
    SLIDE_SELECTOR = '.slides section[id^="slide"]',
    SKIP_LINK_TARGET_SELECTOR = '.accessibilityWrapper',
    CONTROLS_SELECTOR = '.controls',
    NUM_SLIDES = 1,

		// Cached references to DOM elements
		dom = {};

    // Copy options over to our config object
    if( typeof options === 'object' ) extend( config, options );

    // if controls are present, we'll insert table of contents after them
    if( document.querySelector( CONTROLS_SELECTOR )){
      dom.controls = document.querySelector( CONTROLS_SELECTOR );
    }

    // if the skip to nav link is present, we'll make it jump to our links
    if( document.querySelector( SKIP_TO_NAV_LINK_SELECTOR ) ){

      SLIDES = document.querySelectorAll( SLIDE_SELECTOR );
      NUM_SLIDES = SLIDES.length;

      buildSkipLinks();
    }

  /**
	 * Build skip links.
	 */
  function buildSkipLinks() {
		dom.wrapper = document.querySelector( '.reveal' );

    var skipLinkHTML = '';

    for(var i = 1; i < NUM_SLIDES; i++) {
      var slideText = SLIDES[i].querySelector('h2').textContent;
      console.log(slideText);
      skipLinkHTML += '<li><a href="#/slide' + i + '">' + i + slideText + '</a></li>';
    }
    skipLinkHTML += '</ul>';

		dom.skipLinks = createNodeAfterSibling( dom.wrapper, 'ul', SLIDE_SKIP_LINKS_SELECTOR, 'skip-links', skipLinkHTML, dom.controls, {'aria-hidden': true} );

		initSkipLinks();
  }
  /**
	 * Enable skip links.
	 */
	function initSkipLinks() {
    dom.skipToNavLink = document.querySelector( SKIP_TO_NAV_LINK_SELECTOR );

    var wrapperEls = document.querySelectorAll( SKIP_LINK_TARGET_SELECTOR );
    for(var g=wrapperEls.length; g--;){
    	wrapperEls[g].setAttribute('tabIndex', '-1');
    }

    dom.slideSkipLinks = dom.skipLinks.querySelectorAll('a');

    dom.skipToNavLink.addEventListener('focus', skipLinkFocus);
    dom.skipToNavLink.addEventListener('blur', skipLinkBlur);
    dom.skipToNavLink.addEventListener('click', skipToNavLinkClick);

    var numSkipLinks = dom.slideSkipLinks.length;
    for(var i=numSkipLinks; i--;){
      dom.slideSkipLinks[i].addEventListener('focus', skipLinksFocus);
      dom.slideSkipLinks[i].addEventListener('blur', skipLinkBlur);
      dom.slideSkipLinks[i].addEventListener('click', skipLinkClick);
    }
	  document.addEventListener('keydown', blurSkipLink);
	}
	function blurSkipLink(event) {
		if(event.which === 27){
			event.preventDefault();
			event.target.blur();
		}
	}
  function skipToNavLinkClick(event) {
    event.preventDefault();
		dom.skipLinks.setAttribute('aria-hidden', false);
    dom.slideSkipLinks[0].focus();
  }
	/**
	 * Change visibility of skip links on focus
	 */
	function skipLinkFocus(event) {
		event.currentTarget.style.left = '0px';
	}
  function skipLinksFocus(event){
  	skipLinkFocus(event);
		dom.skipLinks.setAttribute('aria-hidden', false);
  }
	/**
	 * Hide skip links on blur
	 */
	function skipLinkBlur(event) {
		dom.skipLinks.setAttribute('aria-hidden', true);
		// dom.skipToNavLink.focus();
		event.currentTarget.style.left = '-50000px';
	}
	/**
	 * Send focus to selected slide
	 */
	function skipLinkClick(event) {
		skipLinkBlur(event);
		var href = event.currentTarget.getAttribute('href');
		var section = document.querySelector('#'+href.split('#/')[1]);
		section.querySelector( SKIP_LINK_TARGET_SELECTOR ).focus();
	}


	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}
	/**
	 * Creates an HTML element and returns a reference to it.
	 * If a sibling element is passed through, element is
	 * inserted after.
	 */
	function createNodeAfterSibling( container, tagname, id, classname, innerHTML, sibling, options ) {

		var node = document.createElement( tagname );
		node.setAttribute('id', id);
		node.classList.add( classname );
		if( innerHTML !== null ) {
			node.innerHTML = innerHTML;
		}
		if(options){
			for(var option in options){
				node.setAttribute(option, options[option]);
			}
		}
		if(sibling) {
  		container.insertBefore( node, sibling.nextSibling );
		}
		else {
  		container.appendChild( node );
		}
		return node;

	}
})();
