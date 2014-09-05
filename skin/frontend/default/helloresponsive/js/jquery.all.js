jQuery(document).ready(function(jQuery){

	
jQuery("ul#nav li").find('ul').append('<span class="arrow"></span>');


function mini_cart () {
	
jQuery('.site-links li.cart a').click(function(){
	jQuery(this).toggleClass("hover");
    jQuery(".notification").next('.mini-cart').fadeToggle(100);
});

}

function switcher () {


	
jQuery('.switcher a.switch').click(function(){
	jQuery(this).toggleClass("hover");
    jQuery(this).next('.options').slideToggle(100);

	
});

}

function layered_nav () {

	 jQuery('.block-layered-nav dt').each(function(){
                                jQuery(this).addClass('hover');
                                jQuery(this).toggle(function(){
                                    jQuery(this).removeClass('hover').next().slideUp(200);
                                },function(){
                                    jQuery(this).addClass('hover').next().slideDown(200);
                                })
                            });                        
                                            
                    
jQuery('.block-layered-nav dt').append('<span class="toggle"></span>');
}

layered_nav ();			
mini_cart();
switcher();

});
