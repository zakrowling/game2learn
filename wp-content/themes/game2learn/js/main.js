$(document).ready(function(){

				
	// ---------------------
	//  Home Slideshow
	// ---------------------

	$('#home_slideshow .slides').nivoSlider({
		effect: 'sliceUpDownLeft',
		slices: 1,
		boxCols: 8,
		boxRows: 4,
		animSpeed: 1000,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: false,	//set true for Navigation arrows
		directionNavHide: false,
		controlNav: false,		//set true for Navigation slide buttons
		controlNavThumbs: false,
		controlNavThumbsFromRel: true,
		keyboardNav: true,
		pauseOnHover: true,
		captionOpacity: 0,
		manualAdvance: false
	});
	
	// Dropdown Content Areas
	$('#main .open').click(function() {
		$(this).nextAll('.more_details:first').slideToggle('fast');
	});
	
	
	// Add Last Class to Menu
	$('#header .menu ul li').last().addClass('last');
		
		
});