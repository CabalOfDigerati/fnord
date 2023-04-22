'use strict';

/**
 * DIGERATI Utilities.
 * 
 * @author Digerati <cabal@digerati.design>
 */
class DigeratiUtilities {
  
    /**
     * Create a New Instance.
     *
     * @return {void} 
     */
    constructor() {
        this.concatenateEmailAddresses = this.concatenateEmailAddresses.bind(this);
        this.displayCopyrightYear = this.displayCopyrightYear.bind(this);
        this.focusSearchFormField = this.focusSearchFormField.bind(this);
      	this.init = this.init.bind(this);
      	this.skipToMainContent = this.skipToMainContent.bind(this);
    }
  
    /**
     * Concatenate Email Addresses.
     *
     * @return {void}
     */
    concatenateEmailAddresses() {
    	alert('concatenateEmailAddresses');
    	console.log('concatenateEmailAddresses');
    }
    
    /**
     * Display Copyright Year
     *
     * F'in Sweet WebFlow Hacks - Current year in footer
     * 
     * @link https://finsweet.com/hacks-typescript/hacks/automatically-show-current-year-in-footer-with-span-and-js 
     *
     * @return {void}
     */
  	displayCopyrightYear() {
  		alert('displayCopyrightYear');
  		console.log('displayCopyrightYear');
        const yearSpan = document.querySelector('[fs-hacks-element="year"]');
        if(!yearSpan) {
            return;
        }
        const currentYear = new Date().getFullYear();
        yearSpan.innerText = currentYear.toString();
    }
  	
  	/**
     * Focus Search Form Field.
     *
     * @return {void}
     */
  	focusSearchFormField() {
  		const showSearchFormTrigger = document.querySelector('[digerati-search-form-field-focus="trigger"]');
  		showSearchFormTrigger.addEventListener('click', function() {
	    	const searchFormField = document.querySelector('[digerati-search-form-field-focus="target"]');
          	if(!searchFormField) {
                return;
            }
      	    searchFormField.focus();
	    });
    }
  
    /**
     * Initialise.
     *
     * @return {void}             
     */
  	init() {
      	this.concatenateEmailAddresses();
        this.displayCopyrightYear();
      	this.skipToMainContent();
      	this.focusSearchFormField();
    }

    /**
     * Skip to Main Content.
     *
     * @return {void}             
     */
    skipToMainContent() {
	    $('#skip-to-main').on('click keydown', function(e) {
		    if (e.type === "keydown" && e.which !== 13) {
			    return;
		    }
		    e.preventDefault();
		    const $target = $('#main');
		    $target.attr('tabindex', '-1');
      	    $target.focus();
	    });
    }
}
