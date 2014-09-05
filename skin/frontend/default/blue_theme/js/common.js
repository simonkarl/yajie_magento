jQuery.noConflict();
  jQuery(window).load(function() {
    jQuery('.banner').flexslider({
          animation: "slide"
    });
	 jQuery('.testimonial').flexslider({
          animation: "slide"
    });
            jQuery('html, body').animate({scrollTop: '0px'}, 800);


  });
jQuery(function(){
jQuery('.searchhint').hint(); // hint text
});
  jQuery(document).ready(function () {
      jQuery('.mycarousel_related').jcarousel({
		scroll: 1,
        wrap: 'circular'
    });
	    jQuery('#mycarouselleft').jcarousel({
    	wrap: 'circular',
		scroll: 1
    });
	jQuery('#mycarouselfeatured').jcarousel({
    	wrap: 'circular',
		scroll: 1
    });
	 jQuery("#close_btn").click(function () {
      jQuery("#close_banner").slideToggle("slow");
	  if(jQuery('#close_btn').attr('class')=="active"){
	  	jQuery('#close_btn').removeClass('active');
	  }else{
		jQuery('#close_btn').addClass('active');   
      }
    });
	jQuery("#featured_pan").click(function(){
		jQuery('#featured_box').slideToggle("slow");
		if(jQuery('#featured_pan').attr('class')=="active"){
			jQuery('#featured_pan').removeClass('active');
			}else{
			jQuery('#featured_pan').addClass('active');	
		}	
	});
	jQuery("#bestseller_pan").click(function(){
		jQuery('#bestseller_box').slideToggle("slow");
		if(jQuery('#bestseller_pan').attr('class')=="active"){
			jQuery('#bestseller_pan').removeClass('active');
			}else{
			jQuery('#bestseller_pan').addClass('active');	
				}
	});

	
	jQuery("#popup").click(function () {
	  jQuery(".header_login").slideUp(200);
	  jQuery(".header_cart").slideToggle("slow");
	  jQuery('#para1').removeClass('active');
	  if(jQuery('#popup').attr('class')=="active"){
	  	jQuery('#popup').removeClass('active');
	  }else{
		jQuery('#popup').addClass('active');   
      }
    });     
	
	jQuery(".show_box").click(function () {
	  jQuery(".header_cart").slideUp(200);
	  jQuery('#popup').removeClass('active'); 	
	  jQuery(".header_login").slideToggle("slow");
	  if(jQuery('#para1').attr('class')=="active"){
		  jQuery('#para1').removeClass('active');
		 }else{
			 jQuery('#para1').addClass('active');
			 }
    }); 
	
	jQuery("a[rel=example_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
	
	});
	
 jQuery(function() {
               jQuery(".capslide_img_cont4").capslide({
                    caption_color	: 'black',
                    caption_bgcolor	: '',
                    overlay_bgcolor : '',
                    border			: '',
                    showcaption	    : false
                });

            });