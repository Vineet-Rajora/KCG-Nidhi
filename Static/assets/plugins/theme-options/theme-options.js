/*
 *
 *		THEME-OPTIONS.JS
 *
 */

$(document).ready(function() {
    
	// THEME OPTIONS //
	var theme_options_content = ' \
		<h4>Change Theme Options</h4> \
		<a href="#"></a> \
		<br> \
		<h5>Change Color</h5> \
		<div class="colors clearfix"> \
			<a id="default" href="#" data-style="default"></a> \
			<a id="blue" href="#" data-style="blue"></a> \
			<a id="green" href="#" data-style="green"></a> \
			<a id="red" href="#" data-style="red"></a> \
			<a id="brown" href="#" data-style="brown"></a> \
		</div><!-- colors --> \
		<h5>Sticky Header</h5> \
		<div class="sticky clearfix"> \
			<div class="toggle-button"> \
				ON <span class="button"><a class="sticky-on" href="#" data-style="sticky-header-on"></a><a class="sticky-off" href="#" data-style="sticky-header-off"></a></span> OFF \
			</div><!-- toggle-button --> \
		</div><!-- sticky --> \
		<h5>Footer Style</h5> \
		<div class="footer clearfix"> \
			<div class="toggle-button"> \
				Parallax <span class="button"><a class="footer-parallax-on" href="#" data-style="footer-parallax-on"></a><a class="footer-parallax-off" href="#" data-style="footer-parallax-off"></a></span> Classic \
			</div><!-- toggle-button --> \
		</div><!-- footer --> \
	\ ';
	
	
	$("#theme-options").prepend(theme_options_content);
	
	$("#theme-options > a").on("click", function(e) {
        
		e.preventDefault();
		e.stopPropagation();
		$("#theme-options").toggleClass("open");
		
    });
	
	$("#theme-options").on("click", function(e) {
        
		e.stopPropagation();
		
    });
	
	$("body").on("click", function() {
		if ($("#theme-options").hasClass("open")) {
			$("#theme-options").removeClass("open");
		}
	});
	
	$(".sticky .button a").on("click", function(e) {
		e.preventDefault();
		$(".sticky .button a").removeClass("active")
		$(this).addClass("active");
	});
	
	$(".footer .button a").on("click", function(e) {
		e.preventDefault();
		$(".footer .button a").removeClass("active")
		$(this).addClass("active");
	});
	
	
	var link = $('link[data-style="styles"]');
	var materia_industrial_colors = $.cookie('materia_broker_colors'),
		materia_industrial_sticky = $.cookie('materia_broker_sticky'),
		materia_industrial_footer = $.cookie('materia_broker_footer');
		
	if (!($.cookie('materia_broker_colors'))) {
		
		$.cookie('materia_broker_colors', 'default', 365);
		materia_industrial_colors = $.cookie('materia_broker_colors');
		$('#theme-options .colors a[data-style="'+materia_industrial_colors+'"]');
		
	} else {
		
		link.attr('href','assets/css/alternative-styles/' + materia_industrial_colors + '.css');
		$("#logo img").attr('src','assets/css/alternative-styles/logos/logo-' + materia_industrial_colors + '.png');
		$(".header-style-2 #logo img, .header-style-3 #logo img, .header-style-6 #logo img").attr('src','assets/css/alternative-styles/logos/logo-black-' + materia_industrial_colors + '.png');
		$("#footer-bottom .widget-text img").attr('src','assets/css/alternative-styles/logos/footer-logo-' + materia_industrial_colors + '.png');
		$('#theme-options .colors a[data-style="'+materia_industrial_colors+'"]');
		
	};
	
	
	if (!($.cookie('materia_broker_sticky'))) {
		
		$.cookie('materia_broker_sticky', 'sticky-header-on', 365);
		materia_industrial_sticky = $.cookie('materia_broker_sticky');
		$("body").addClass(materia_industrial_sticky);
		$('#theme-options .sticky a[data-style="sticky-header-on"]');
		
	} else {
		
		if (materia_industrial_sticky=="sticky-header-off") {
			
			$("body").addClass(materia_industrial_sticky);
			$("body").removeClass("sticky-header-on");
			
		} else { 
		
			$("body").addClass(materia_industrial_sticky);
			$("body").removeClass("sticky-header-off");
			
		};
		
	};
	
	
	if (!($.cookie('materia_broker_footer'))) {
		
		$.cookie('materia_broker_footer', 'footer-parallax-on', 365);
		materia_industrial_footer = $.cookie('materia_broker_footer');
		$("body").addClass(materia_industrial_footer);
		$('#theme-options .footer a[data-style="footer-parallax-on"]');
		
	} else {
		
		if (materia_industrial_footer=="footer-parallax-off") {
			
			$("body").addClass(materia_industrial_footer);
			$("body").removeClass("footer-parallax-on");
			
		} else { 
		
			$("body").addClass(materia_industrial_footer);
			$("body").removeClass("footer-parallax-off");
			
		};
		
	};


	// CHANGE COLOR //
	$('#theme-options .colors a').on('click',function(e) {
		
		var $this = $(this),
			materia_industrial_colors = $this.data('style');
			
		e.preventDefault();
		
		link.attr('href', 'assets/css/alternative-styles/' + materia_industrial_colors + '.css');
		$("#logo img").attr('src', 'assets/css/alternative-styles/logos/logo-' + materia_industrial_colors + '.png');
		$(".header-style-2 #logo img, .header-style-3 #logo img, .header-style-6 #logo img").attr('src','assets/css/alternative-styles/logos/logo-black-' + materia_industrial_colors + '.png');
		$("#footer-bottom .widget-text img").attr('src', 'assets/css/alternative-styles/logos/footer-logo-' + materia_industrial_colors + '.png');
		$.cookie('materia_broker_colors', materia_industrial_colors, 365);
		
	});
	
	
	// STICKY ON //
	$('#theme-options .sticky a.sticky-off').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("sticky-header-off");
		$("body").removeClass("sticky-header-on");
		$.cookie('materia_broker_sticky', 'sticky-header-off', 365);
		
	});

	// STICKY OFF //
	$('#theme-options .sticky a.sticky-on').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("sticky-header-on");
		$("body").removeClass("sticky-header-off");
		$.cookie('materia_broker_sticky', 'sticky-header-on', 365);
		
	});
	
	
	// FOOTER PARALLAX ON //
	$('#theme-options .footer a.footer-parallax-off').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("footer-parallax-off");
		$("body").removeClass("footer-parallax-on");
		$.cookie('materia_broker_footer', 'footer-parallax-off', 365);
		
	});

	// FOOTER PARALLAX OFF //
	$('#theme-options .footer a.footer-parallax-on').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("footer-parallax-on");
		$("body").removeClass("footer-parallax-off");
		$.cookie('materia_broker_footer', 'footer-parallax-on', 365);
		
	});
	
	
	if ($("body").hasClass("sticky-header-off") || (!$("body").hasClass("sticky-header"))) {
		$("#theme-options .sticky .button a.sticky-off").addClass("active");
	} else {
		$("#theme-options .sticky .button a.sticky-on").addClass("active");
	}
	
	if ($("body").hasClass("footer-parallax-off") || (!$("body").hasClass("footer-parallax"))) {
		$("#theme-options .footer .button a.footer-parallax-off").addClass("active");
	} else {
		$("#theme-options .footer .button a.footer-parallax-on").addClass("active");
	}
	
	
	
	// DEMOS PANNEL //
	var demos_pannel = ' \
		<h3>Materia Demos</h3> \
		<div class="demos-container"> \
			<div class="item-preview"> \
				<a href="../materia-industrial/index.html"> \
					<img src="assets/plugins/theme-options/images/materia-industrial.jpg" alt=""> \
					<span>Live Preview</span> \
				</a> \
				Materia Industrial \
			</div><!-- item-preview --> \
			<div class="item-preview"> \
				<a href="../materia-energy/index.html"> \
					<img src="assets/plugins/theme-options/images/materia-energy.jpg" alt=""> \
					<span>Live Preview</span> \
				</a> \
				Materia Green Energy \
			</div><!-- item-preview --> \
			<div class="item-preview"> \
				<a href="../materia-trading/index.html"> \
					<img src="assets/plugins/theme-options/images/materia-trading.jpg" alt=""> \
					<span>Live Preview</span> \
				</a> \
				Materia Trading \
			</div><!-- item-preview --> \
			<div class="item-preview"> \
				<a href="index.html"> \
					<img src="assets/plugins/theme-options/images/materia-broker.jpg" alt=""> \
					<span>Live Preview</span> \
				</a> \
				Materia Bancking &amp; Finance \
			</div><!-- item-preview --> \
			<div class="item-preview"> \
				<a href="../materia-insurance/index.html"> \
					<img src="assets/plugins/theme-options/images/materia-insurance.jpg" alt=""> \
					<span>Live Preview</span> \
				</a> \
				Materia Insurance \
			</div><!-- item-preview --> \
			<div class="item-preview"> \
				<a href="../materia-factory/index.html"> \
					<img src="assets/plugins/theme-options/images/materia-factory.jpg" alt=""> \
					<span>Live Preview</span> \
				</a> \
				Materia Plant &amp; Factory \
			</div><!-- item-preview --> \
		</div><!-- demos-container --> \
		<a class="btn btn-default" href="https://themeforest.net/item/materia-consortium-multiuse-pack-html5-css3-template/16814868" target="_blank">Purchase Materia</a> \
	\ ';
	
	$("#demos-pannel").prepend(demos_pannel);
	
	$("#demos-pannel > h3").on("click", function(e) {
        
		e.preventDefault();
		e.stopPropagation();
		$("#demos-pannel").toggleClass("open");
		
    });
	
	$("#demos-pannel").on("click", function(e) {
        
		e.stopPropagation();
		
    });
	
	$("body").on("click", function() {
		if ($("#demos-pannel").hasClass("open")) {
			$("#demos-pannel").removeClass("open");
		}
	});

});    	