$(document).ready(function() {

	var i = 0;

	$( "#menu-button" ).click(function() {
		$( "#mobile-menu-row" ).slideToggle( "slow" );
	});

	$( ".button-price" ).click(function() {
		$( ".price-in-list" ).slideToggle( "slow" );
		if (i == 1) {
			$( ".bold-font" ).removeClass( "for-bold" );
			i = 0;
		} else {
  			$( ".bold-font" ).addClass( "for-bold" );
  			i = 1;
		};
	});

	$( ".button-price-first" ).click(function() {
		$( ".price-first-list" ).slideToggle( "slow" );
		if (i == 1) {
			$( ".bold-font-first" ).removeClass( "for-bold" );
			i = 0;
		} else {
  			$( ".bold-font-first" ).addClass( "for-bold" );
  			i = 1;
		};
	});

	$( ".button-price-second" ).click(function() {
		$( ".price-secont-list" ).slideToggle( "slow" );
		if (i == 1) {
			$( ".bold-font-second" ).removeClass( "for-bold" );
			i = 0;
		} else {
  			$( ".bold-font-second" ).addClass( "for-bold" );
  			i = 1;
		};
	});

	$("a.menu-items").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });

	$(".up").animated("fadeInDown");
	$(".left").animated("fadeInLeft");
	$(".right").animated("fadeInRight");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
