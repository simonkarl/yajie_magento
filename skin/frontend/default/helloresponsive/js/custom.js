var $jQ = jQuery.noConflict();

$jQ(document).ready(function(){	

	//Homepage
	$jQ('#featured').orbit({
		 animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
		 animationSpeed: 800,                // how fast animtions are
		 timer: true, 			 // true or false to have the timer
		 resetTimerOnClick: false,           // true resets the timer instead of pausing slideshow progress
		 advanceSpeed: 4000, 		 // if timer is enabled, time between transitions 
		 pauseOnHover: false, 		 // if you hover pauses the slider
		 startClockOnMouseOut: false, 	 // if clock should start on MouseOut
		 startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
		 directionalNav: false, 		 // manual advancing directional navs
		 captions: false, 			 // do you want captions?
		 captionAnimation: 'fade', 		 // fade, slideOpen, none
		 captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
		 bullets: false,			 // true or false to activate the bullet navigation
		 bulletThumbs: false,		 // thumbnails for the bullets
		 bulletThumbLocation: '',		 // location from this file where thumbs will be
		 afterSlideChange: function(){}, 	 // empty function 
		 fluid: true                         // or set a aspect ratio for content slides (ex: '4x3') 
	});	
	
	$jQ('#brands').elastislide({
		imageW  : 230
	});
	
	$jQ('#brands li a').click(function(){
		var url = $jQ(this).attr('href');
		window.location = url;
	});
	
	$jQ('.featured-products li').hover(function(e){
		e.preventDefault();
		$jQ(this).toggleClass("hover");
		$jQ(this).find('.details').fadeToggle(0);
	});
	
	//Category List
	$jQ('.products-grid li').hover(function(e){
		e.preventDefault();
		$jQ(this).find('.catalog-image a').toggleClass('hover');
		$jQ(this).toggleClass('hover');
		$jQ(this).find('.product-info').fadeToggle(100);
	});

	$jQ('.product-actions').css({top:'50%',left:'50%',margin:'-'+($jQ('.product-actions').height() / 2)+'px 0 0 -'+($jQ('.product-actions').width() / 2)+'px'});
	$jQ('.products-grid li').each(function() {
		var view = $jQ(this).find('.product-actions, .add-to-links');
		$jQ('.catalog-image', this).hover(function() {
			view.stop().css('display','block').animate({
				opacity: 1
			}, 200);
		}, function() {
			view.stop().animate({
				opacity: 0
			}, 200, function() {
				$jQ(this).css('display','none');
			});
		});
		view.hide();
	});
	
	//My Account
	$jQ('.account-create .fieldset:last').css('margin-right','0');
	
	//Vertical Navigation
	$jQ(".category").click(function() {
		var open = this.getAttributeNode('lang').value;
		jQuery(".subcategory_" + open).slideToggle('medium');
		jQuery(".subcategory_" + open).parent().prev().toggleClass('openn');
	}); 
	
								
});