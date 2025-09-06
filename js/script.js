var $ = jQuery.noConflict();

var slb = slb || {};

package_ver = 'v1.0';

;(function($) {
    "use strict";

    /*=============================================
    = FUNCTIONS
    =============================================*/

    /*----------  GET VARIABLE FUNCTION  ----------*/
    slb.getvar = function (v, default_v, val_type) {
		'use strict';
		if (val_type == 'n') {
			return v ? parseInt(v, 10) : default_v;
		}
		if (val_type == 'b') {
			if (v == 'true') { return true; }
			else if (v == 'false') { return false; }
			else { return default_v; }
		}
		if (val_type == 's') {
			if (v == 'false') {
				return false;
			} else {
				return v ? v : default_v;
			};

		}
	}

    /*----------  BACKGROUND IMAGE  ----------*/
    slb.backgroundImage = function (element) {
        element.css({ 
            backgroundImage: "url('" + element.attr("data-bg-image") + "')" 
        });
	}

	/*----------  TEMPLATE - FIND THEME  ----------*/
	slb.findTheme = function (element) {
		var themeIs = $(".page-section.active-page").attr("data-theme");
		element.addClass(themeIs);
	}
	
	/*----------  BACKGROUND SLIDESHOW  ----------*/
	slb.slideshow = function (element) {
        if($().vegas) {
			var s1 = element.attr('data-slide-image'),
				s2 = s1.split('|'),
				bgslides = [];
			
			$.each(s2, function (index, val) {
				bgslides.push({ src: val });
			});

			element.vegas({
				delay: 4000,
				slides: bgslides,
				timer: false,
				animation: 'kenburns'
			});
		}
	}

	/*----------  BACKGROUND VIDEO YOUTUBE  ----------*/
	slb.backgroundYoutube = function(element) {
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		if (isMobile.any()) {
			element.css("display", "none");
		}
		else {
			element.css("display", "block");
			if (element.attr('data-videoid')) {
				element.YTPlayer({
	    			videoId: element.attr('data-videoid'),
	    			start: element.attr('data-start') ? parseInt(element.attr('data-start')) : 0,
					onReady: function (player) { }
				});
			}
		}
	}

	/*----------  HOSTED VIDEO  ----------*/
	slb.hostVideo = function (element) {
		'use strict';

		var videofile = element.attr("data-vide-src");
		element.animate({ opacity: 1 }, 500, function () { });
		element.vide({
			mp4: videofile,
			webm: videofile,
			ogv: videofile,
			poster: videofile + ".jpg"
		}, 
		{
			volume: 1,
			playbackRate: 1,
			muted: true,
			loop: true,
			autoplay: true,
			position: 'center center', // Similar to the CSS `background-position` property.
			posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
			resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
			bgColor: 'transparent', // Allow custom background-color for Vide div,
			className: '' // Add custom CSS class to Vide div
		});
	}

    /*----------  LINEAR GRADIENT  ----------*/
    slb.linearGredient = function(element) {
        
        var grdColors = $(element).attr('data-linear-gradient'),
        grdColor = grdColors.split('|');

        element.css({ 
            background: "linear-gradient(to bottom, " + grdColor[0] + " 0%, " + grdColor[1] + " 100%)",
        });
	}
	
	/*----------  RADIAL GRADIENT  ----------*/
    slb.radialGredient = function(element) {
		
		var rgrdColors = $(element).attr('data-radial-gradient'),
			rgrdColor = rgrdColors.split('|');

		element.css({ 
			background: "radial-gradient(circle, " + rgrdColor[0] + " 0%, " + rgrdColor[1] + " 100%)",
		});
    }

    /*----------  PARALLAX BACKGROUND  ----------*/
    slb.parallaxImage = function(element) {
        if($().jarallax) {
            
            var parallaxConfig = {};

            parallaxConfig = {
                
            };

            element.jarallax({
                
            });

        }
    }

    /*----------  PAGE TRANSITION  ----------*/
    slb.pageTransition = function(element) {

    }

    /*----------  OWL CAROUSEL ITEM  ----------*/
    slb.carouselItem = function(arr) {
        if($().owlCarousel) {
            if (typeof (arr) == "string" && arr != 'false') {
                var t1 = arr.split('|');
                var t2 = {};
                $.each(t1, function (index, val) {
                    var str = val;
                    var newarr = str.split(',');
                    t2[newarr[0]] = {}
                    t2[newarr[0]] = { items: parseInt(newarr[1], 10) };
                });
                return t2;
            } 
            else if (arr === 'false') {
                return {};
            } 
            else {
                return false;
            }   
        }
    }

    /*----------  OWL CAROUSEL  ----------*/
    slb.carousel = function(element) {
        if($().owlCarousel) {
            
            var carouselConfig,
                navLeft = '<i class="pe-7s-angle-left"></i>',
                navRight = '<i class="pe-7s-angle-right"></i>';

            // RESPONSIVE VARIABLE
            var resObj = {
                0: { items: 1 },
                420: { items: 2 },
                600: { items: 3 },
                768: { items: 3 },
                980: { items: 4 }
            }

            // CAROUSEL OBJECTS
            var carouselElement = $(element + ' .owl-carousel'),
                carouselObj = $(element);
            
            // CAROUSEL CONFIG
            carouselConfig = {
                items : slb.getvar(carouselObj.attr('data-carousel-items'), 3, 'n'),
                margin : slb.getvar(carouselObj.attr('data-carousel-margin'), 0, 'n'),
                loop : slb.getvar(carouselObj.attr('data-carousel-loop'), false, 'b'),
                center : slb.getvar(carouselObj.attr('data-carousel-center'), false, 'b'),
                mouseDrag : slb.getvar(carouselObj.attr('data-carousel-mousedrag'), true, 'b'),
                touchDrag : slb.getvar(carouselObj.attr('data-carousel-touchdrag'), true, 'b'),
                pullDrag : slb.getvar(carouselObj.attr('data-carousel-pulldrag'), true, 'b'),
                freeDrag : slb.getvar(carouselObj.attr('data-carousel-freedrag'), false, 'b'),
                stagePadding : slb.getvar(carouselObj.attr('data-carousel-stagepadding'), 0, 'n'),
                navTextLeft : slb.getvar(carouselObj.attr('data-carousel-navleft'), navLeft, 's'),
                navTextRight : slb.getvar(carouselObj.attr('data-carousel-navright'), navRight, 's'),
                merge : slb.getvar(carouselObj.attr('data-carousel-merge'), false, 'b'),
                mergeFit : slb.getvar(carouselObj.attr('data-carousel-margefit'), true, 'b'),
                autoWidth : slb.getvar(carouselObj.attr('data-carousel-widthauto'), false, 'b'),
                startPosition : slb.getvar(carouselObj.attr('data-carousel-startpos'), 0, 'n'),
                URLhashListener : slb.getvar(carouselObj.attr('data-carousel-hashurl'), false, 'b'),
                nav : slb.getvar(carouselObj.attr('data-carousel-nav'), false, 'b'),
                rewind : slb.getvar(carouselObj.attr('data-carousel-rewind'), true, 'b'),
                slideBy : slb.getvar(carouselObj.attr('data-carousel-sideby'), 1, 'n'),
                slideTransition : slb.getvar(carouselObj.attr('data-carousel-transition'), 'linear', 's'),
                dots : slb.getvar(carouselObj.attr('data-carousel-dots'), true, 'b'),
                lazyLoad : slb.getvar(carouselObj.attr('data-carousel-lazyload'), false, 'b'),
                lazyLoadEager : slb.getvar(carouselObj.attr('data-carousel-dots'), 0, 'n'),
                autoplay : slb.getvar(carouselObj.attr('data-carousel-autoplay'), false, 'b'),
                autoplayTimeout : slb.getvar(carouselObj.attr('data-carousel-autoplaytimeout'), 5000, 'n'),
                autoplayHoverPause : slb.getvar(carouselObj.attr('data-carousel-hoverpause'), false, 'b'),
                smartSpeed : slb.getvar(carouselObj.attr('data-carousel-smartspeed'), 250, 'n'),
                autoplaySpeed : slb.getvar(carouselObj.attr('data-carousel-autoplayspeed'), false, 'b'),
                video : slb.getvar(carouselObj.attr('data-carousel-video'), false, 'b'),
                animateOut : slb.getvar(carouselObj.attr('data-carousel-out'), 'fadeOut', 's'),
                animateIn : slb.getvar(carouselObj.attr('data-carousel-in'), 'fadeIn', 's'),
                responsive : carouselObj.attr('data-carousel-itemrange') ? slb.carouselItem(carouselObj.attr('data-carousel-itemrange')) : resObj,
                responsiveBaseElement : slb.getvar(carouselObj.attr('data-carousel-rbase'), carouselObj.parent(), 's'),
            };

            carouselElement.owlCarousel({
                items : carouselConfig.items,
                margin : carouselConfig.margin,
                loop : carouselConfig.loop,
                center : carouselConfig.center,
                mouseDrag : carouselConfig.mouseDrag,
                touchDrag : carouselConfig.touchDrag,
                pullDrag : carouselConfig.pullDrag,
                freeDrag : carouselConfig.freeDrag,
                stagePadding : carouselConfig.stagePadding,
                navText : [carouselConfig.navTextLeft, carouselConfig.navTextRight],
                merge : carouselConfig.merge,
                mergeFit : carouselConfig.mergeFit,
                autoWidth : carouselConfig.autoWidth,
                startPosition : carouselConfig.startPosition,
                URLhashListener : carouselConfig.URLhashListener,
                nav : carouselConfig.nav,
                rewind : carouselConfig.rewind,
                slideBy : carouselConfig.slideBy,
                slideTransition : carouselConfig.slideTransition,
                dots : carouselConfig.dots,
                lazyLoad : carouselConfig.lazyLoad,
                lazyLoadEager : carouselConfig.lazyLoadEager,
                autoplay : carouselConfig.autoplay,
                autoplayTimeout : carouselConfig.autoplayTimeout,
                autoplayHoverPause : carouselConfig.autoplayHoverPause,
                smartSpeed : carouselConfig.smartSpeed,
                autoplaySpeed : carouselConfig.autoplaySpeed,
                video : carouselConfig.video,
                animateOut : carouselConfig.animateOut,
                animateIn : carouselConfig.animateIn,
                responsive : carouselConfig.responsive,
                responsiveBaseElement : carouselConfig.responsiveBaseElement
            });

        }

	}


    /*----------  FORM FUNCTIONS  ----------*/
    slb.global_validation = {
		form: '',
		rules: {
			email: { required: true, email: true },
			name: { required: true },
			message: { required: true },
			phone: { required: true, number: true },
			date: { required: true, date: true },
			datetime: { required: true, date: true },
			people: { required: true, number: true }
		},
		msgpos: 'normal',
		msg: {
			email: { email: "Please, enter a valid email" }
		},
		subscribe_successMsg: "You are in list. We will inform you as soon as we finish.",
		form_successMsg: "Thank you for contact us. We will contact you as soon as possible.",

		successMsg: "",
		errorMsg: "Oops! Looks like something went wrong. Please try again later."
	}

    slb.formVaidate = function (obj) {
		'use strict';
		var msgpos = $(obj.form).attr('data-msgpos') ? $(obj.form).attr('data-msgpos') : 'normal';
		if (msgpos == 'append') {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				errorPlacement: function (error, element) {
					if (msgpos == 'append') {
						error.appendTo(element.closest("form").find('.msg-wrp'));
					};
				},
				success: function (element) {
					element.remove();
				}
			});
		} else {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				success: function (element) {
					element.remove();
				}
			});
		};
    }
    
    slb.resetForm = function (form) {
		'use strict';
		$(form).find('input[type="text"], input[type="email"], textarea').val(null);
	}

	slb.contactForm = function ($form, formData, validate_data) {
		'use strict';

		if ($form.find('label.error').length > 0) { $form.find('label.error').hide(); }

		var $btn = $form.find(".btn").button('loading');
		var timer = 4000;

		if ($form.valid()) {
			$.ajax({
				url: $form.attr('action'),
				type: 'POST',
				data: formData,
				success: function (data) {
					if (data.status == 'error') {
						
						// EMAIL SUBSCRIPTION ERROR MESSAGE
						swal("Error!", data.type, "error");
						$btn.button('reset');
						slb.resetForm($form);
					} 
					else {
						swal({
							type: "success",
							title: "Success!",
							text: validate_data.successMsg,
							timer: timer
						})
						.then(function(argument){
							if ($form.attr('data-success-redirect') === 'y') {
								window.location = slb.config.success_url;
							}
						});
						$btn.button('reset');
						$.magnificPopup.close();
						slb.resetForm($form);
					};
				},
				error: function () {
					swal("Error!", validate_data.errorMsg, "error");
					$btn.button('reset');
					$.magnificPopup.close();
					setTimeout(function () { swal.close(); }, timer);
				}
			});
		} else {
			$form.find("label.error").delay(timer).fadeOut('400', function () {
				$(this).remove();
			});
			$btn.button('reset');
		};
	}

	slb.formWidget = function (obj) {
		'use strict';

		var config = {
			popup_selector: $(obj).attr('data-popup') ? '.' + $(obj).attr('data-popup') : false,
			form_type: $(obj).attr('data-formtype') ? $(obj).attr('data-formtype') : 'normal',
			form_selector: obj
		}

		var $form = $(config.form_selector);

		// VALIDATION RULES
		slb.global_validation.form = config.form_selector;
		var validate_data = slb.global_validation;

		// Pop up form
		if (config.popup_selector) {
			$(config.popup_selector).each(function (index, el) {
				$(this).magnificPopup({
					type: 'inline',
					preloader: false
				});
			});
		};

		// DATE AND TIME PICKER OPTIONS
		if ($form.find(".date-pick").length > 0 || $form.find(".datetime-pick").length > 0) {
			var date_script_arr = [
				"lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"
			];

			slb.getMultiScripts(date_script_arr, '').done(function () {
				// DATE PICKER
				if ($form.find(".date-pick").length > 0) {
					$form.find(".date-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true,
							startView: 2,
							minView: 2
						});
					});
				};

				// DATE TIME PICKER
				if ($form.find(".datetime-pick").length > 0) {
					$form.find(".datetime-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true
						});
					});
				};
			});
		}
		

		// FORM VALIDATION
		slb.formVaidate(validate_data);

		// FORM
		$form.find('button').off('click').on('click', function (e) {
			e.preventDefault();
			if (config.form_type == "newsletter") {
				slb.global_validation.successMsg = slb.global_validation.subscribe_successMsg;
			} else {
				slb.global_validation.successMsg = slb.global_validation.form_successMsg;
			};
			slb.contactForm($form, $form.serializeObject(), validate_data);
			return false;
		});
	}

	$.fn.serializeObject = function () {
		'use strict';

		var o = {};
		var a = this.serializeArray();
		$.each(a, function () {

			// Field labels
			var field_label = $('[name=' + this.name + ']').attr('data-label') ? $('[name=' + this.name + ']').attr('data-label') : this.name;

			// Field values
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push({ val: this.value, label: field_label } || '');
			} else {
				//o[this.name] = this.value || '';
				o[this.name] = { val: this.value, label: field_label } || '';
			}
		});
		return o;
	};
	
	/*----------  IMAGE POPUP  ----------*/
	slb.popupImageFunction = function(element) {
		
		// VARIABLE
		var val_delegate = "a",
		val_type = "image",
		val_fixedContentPos = true,
		val_mainClass = "mfp-zoom-in mfp-bg",
		val_removalDelay = 500,
		val_duration = 400,
		val_imageVerticalFit = false,
		val_galleryEnabled = true,
		val_animClass1 = "val_animClass1",
		val_animClass2 = "mfp-figure mfp-with-anim";

		element.magnificPopup({
			delegate: val_delegate,
			type: val_type,
			fixedContentPos: val_fixedContentPos,
			mainClass: val_mainClass,
			removalDelay: val_removalDelay,
			duration: val_duration,
			image: {
				verticalFit: val_imageVerticalFit,
			},
			gallery: {
				enabled: val_galleryEnabled
			},
			callbacks: {
				beforeOpen: function() {
				   this.st.image.markup = this.st.image.markup.replace(val_animClass1, val_animClass2);
				}
			},
		});
	}
    
    /*=============================================
    = INTIAL FUNCTIONS
    =============================================*/
    slb.intials = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            slb.intials.pageTransition();
        },

        /*----------  PAGE TRANSITION  ----------*/
        pageTransition: function() {

            if($o.$sectionTo) {
                // if($o.$html.hasClass("device-desktop")){
                    $o.$sectionTo.on("click", function() {
                        $o.$slbBody.addClass("page-section-active");
    
                        var sectionIs = $(this).attr("data-page-section");
                        $o.$pageSection.removeClass("active-page");
                        $o.$pageSectionWrp.find(sectionIs).addClass("active-page");
    
                        slb.findTheme($o.$slbBody);
                    });
                // }
            }

            if($o.$menuIcon) {
                $o.$menuIcon.on("click", function(){
                    $(this).toggleClass("active");
                    $o.$slbBody.toggleClass("active-menu");
                });
            }

            if($o.$closeSection) {
                $o.$closeSection.on("click", function(){
                    $o.$slbBody.toggleClass("page-section-active");
                    $o.$slbBody.removeClass("theme-light theme-dark");
                    $o.$navigationLink.removeClass("active-link");
                });
            }

            if($o.$navigationLink) {
                $o.$navigationLink.on("click", function(){
                    $o.$navigationLink.removeClass("active-link");
                    $(this).addClass("active-link");
                });

                if($o.$html.hasClass("device-mobile")) {
                    $o.$navigationLink.on("click", function(){
                        $o.$menuIcon.toggleClass("active");
                        var toSection = $(this).attr("data-page-section");
                        var $toSection = $(toSection);

                        $('html, body').animate({
                            scrollTop: $toSection.offset().top - 40
                        }, 600);

                        $o.$slbBody.removeClass("theme-light theme-dark");
                        $o.$slbBody.removeClass("active-menu");
                    });
                }
            }

        },

    };
    
    /*=============================================
    = HEADER FUNCTIONS
    =============================================*/
    slb.header = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            
        },

    };
    
    /*=============================================
    = PORTFOLIO FUNCTIONS
    =============================================*/
    slb.portfolio = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            slb.portfolio.popupImage()
        },

        /*----------  MAGNIFIC POPUP  ----------*/
        popupImage: function() {
            if($o.$zoomGallery && $().magnificPopup) {

                for (var i = 0; i < $o.$zoomGallery.length; i++) {
                    var loopObj = $($o.$zoomGallery);

                    slb.popupImageFunction(loopObj);
                }
            }
        },

    };
    
    /*=============================================
    = WIDGET FUNCTIONS
    =============================================*/
    slb.widget = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            slb.widget.background();
            slb.widget.parallax();
            slb.widget.lGradient();
            slb.widget.rGradient();
            slb.widget.carousel();
            slb.widget.scrollToSection();
            slb.widget.formWidgetFunction();
            slb.widget.popupFunction();
            slb.widget.tooltipFunction();
            slb.widget.backgroundSlideshow();
            slb.widget.backgroundYouVideo();
            slb.widget.backgroundVideo();
        },

        /*----------  BACKGROUND  ----------*/
        background: function() {
            if($o.$backgroundImage) {
                for (var i = 0; i < $o.$backgroundImage.length; i++) {
                    var loopObj = $($o.$backgroundImage[i]);

                    // FUNCTION CALL
                    slb.backgroundImage(loopObj);
                }
            }
        },

        /*----------  BACKGROUND SLIDESHOW  ----------*/
        backgroundSlideshow: function() {
            if($o.$slideshow) {
                for (var i = 0; i < $o.$slideshow.length; i++) {
                    var loopObj = $($o.$slideshow[i]);

                    // FUNCTION CALL
                    slb.slideshow(loopObj);
                }
            }
        },

        /*----------  BACKGROUND VIDEO YOUTUBE  ----------*/
        backgroundYouVideo: function() {
            if($o.$youVideo) {
                for (var i = 0; i < $o.$youVideo.length; i++) {
                    var loopObj = $($o.$youVideo[i]);

                    // FUNCTION CALL
                    slb.backgroundYoutube(loopObj);
                }
            }
        },

        /*----------  BACKGROUND VIDEO HOST  ----------*/
        backgroundVideo: function() {
            if($o.$hostVideo) {
                for (var i = 0; i < $o.$hostVideo.length; i++) {
                    var loopObj = $($o.$hostVideo[i]);

                    // FUNCTION CALL
                    slb.hostVideo(loopObj);
                }
            }
        },

        /*----------  LINEAR GRADIENT  ----------*/
        lGradient: function() {
            if($o.$linearGradient) {
                for (var i = 0; i < $o.$linearGradient.length; i++) {
                    var loopObj = $($o.$linearGradient[i]);

                    // FUNCTION CALL
                    slb.linearGredient(loopObj);
                }
            }
        },

        /*----------  RADIAL GRADIENT  ----------*/
        rGradient: function() {
            if($o.$radialGradient) {
                for (var i = 0; i < $o.$radialGradient.length; i++) {
                    var loopObj = $($o.$radialGradient[i]);

                    // FUNCTION CALL
                    slb.radialGredient(loopObj);
                }
            }
        },

        /*----------  PARALLAX  ----------*/
        parallax: function() {
            if($o.$parallaxmage) {

                for (var i = 0; i < $o.$parallaxmage.length; i++) {
                    var loopObj = $($o.$parallaxmage[i]);

                    // var parallaxWrp = 'parallax' + i;
			        // $(loopObj).attr("id", parallaxWrp).addClass(parallaxWrp);

                    // FUNCTION CALL
                    // slb.parallaxImage($("#" + parallaxWrp));
                    slb.parallaxImage(loopObj);
                }
            }

        },

        /*----------  CAROUSEL  ----------*/
        carousel: function() {
            if($o.$carouselWidget) {
                for (var i = 0; i < $o.$carouselWidget.length; i++) {
                    var loopObj = $($o.$carouselWidget[i]);

                    var carouselObj = 'owl' + i;
                    loopObj.attr("id", carouselObj).addClass(carouselObj);
                    slb.carousel("#" + carouselObj);
                }
            }

        },

        /*----------  SCROLL TO SECTION  ----------*/
        scrollToSection: function() {
            if($o.$scrollTo) {
                $o.$scrollTo.on("click", function(event){
                    event.preventDefault();
                    var sectionId = $(this).attr("href"),
                        $sectionId = $(sectionId),
                        headerHeight = "0",
                        bodyAndHtml = $('body, html');

                    if($sectionId.length === 0) {
                        return true;
                        console.log("NOTE: SECTION IS NOT AVAILABLE PLEASE CHECK");
                    }
                    else {
                        var sectionPosition = $sectionId.offset().top - headerHeight;
                        bodyAndHtml.animate({ scrollTop: sectionPosition }, 1200);
                    }
                });
            }
        },

        /*----------  FORM FUNCTION  ----------*/
        formWidgetFunction: function() {
            if($o.$forms) {
                for (var i = 0; i < $o.$forms.length; i++) {
                    var loopObj = $($o.$forms[i]);

                    slb.formWidget(loopObj);
                }
            }
        },

        /*----------  POPUP  ----------*/
        popupFunction: function() {
            if($o.$setpop) {
                for (var i = 0; i < $o.$setpop.length; i++) {
                    var loopObj = $($o.$setpop[i]);

                    var popup = loopObj.attr('href');

                    loopObj.magnificPopup({
                        type: 'inline',
                        preloader: false,
                        mainClass: 'mfp-fade',
                        callbacks: {
                            beforeOpen: function () {
                                $(popup).removeClass('animate fadeInDown').addClass('animate fadeInDown');
                            }
                        }
                    });
                }
            }
        },

        /*----------  TOOLTIP  ----------*/
        tooltipFunction: function() {
            if($o.$tooltip) {
                for (var i = 0; i < $o.$tooltip.length; i++) {
                    var loopObj = $($o.$tooltip[i]);

                    loopObj.tooltip();

                }
            }
        }

    };
    
    /*=============================================
    = HELPER FUNCTIONS
    =============================================*/
    slb.help = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {

        },

       

    };
    
    /*=============================================
    = RESPONSIVE FUNCTIONS
    =============================================*/
    slb.responsiveScreen = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            slb.responsiveScreen.deviceIs();
        },

        /*----------  DETECT DEVICES  ----------*/
        deviceIs: function() {

            // MEDIA QUARIES VARIABLE
            var deviceDesktop = "screen and (min-width: 992px)",
                deviceMobile = "(min-width: 200px) and (max-width: 991px)"

            enquire.register(deviceDesktop, {
                match : function() {
                    $o.$html.addClass("device-desktop");
                },
                unmatch : function() {
                    
                }
            }).register(deviceMobile, {
                match : function() {
                    $o.$html.addClass("device-mobile");
                },  
                unmatch : function() {
                    
                }
            });	
        },

    };
    
    /*=============================================
    = DOCUMENT READY FUNCTIONS
    =============================================*/
    slb.onReady = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            slb.responsiveScreen.init();
            slb.intials.init();
            slb.widget.init();
            slb.header.init();
            slb.portfolio.init();
        },

    };
    
    /*=============================================
    = WINDOW LOAD FUNCTIONS
    =============================================*/
    slb.onLoad = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            slb.responsiveScreen.init();
            slb.onLoad.pageLoader()
        },

        /*----------  PAGE LOADER  ----------*/
        pageLoader: function() {
            if($o.$pageloader) {
                $("#loader").fadeOut(600, function() {
                    $("#loader").css("display", "none");
                });
            }

        },

    };
    
    /*=============================================
    = TEMPLATE VARIABLES
    =============================================*/
    slb.getObj = function() {
        var obj = {
            $window             : $(window),
            $html               : $("html"),
            $slbBody           : $(".slb-body"),
            $pageloader         : $("#loader"),
            $backgroundImage    : $("[data-bg-image]").length > 0 ? $("[data-bg-image]") : false,
            $linearGradient     : $("[data-linear-gradient]").length > 0 ? $("[data-linear-gradient]") : false,
            $radialGradient     : $("[data-radial-gradient]").length > 0 ? $("[data-radial-gradient]") : false,
            $parallaxmage       : $("[data-bgholder='parallax-image']").length > 0 ? $("[data-bgholder='parallax-image']") : false,
            $slideshow          : $("[data-bgholder='slideshow']").length > 0 ? $("[data-bgholder='slideshow']") : false,
            $youVideo           : $("[data-bgholder='yvideo']").length > 0 ? $("[data-bgholder='yvideo']") : false,
            $hostVideo           : $("[data-bgholder='hvideo']").length > 0 ? $("[data-bgholder='hvideo']") : false,
            $menuIcon           : $(".menu-icon").length > 0 ? $(".menu-icon") : false,
            $extraPageLink      : $(".e-page-link").length > 0 ? $(".e-page-link") : false,
            $navigationLink     : $(".navlink").length > 0 ? $(".navlink") : false,
            $carouselWidget     : $(".carousel-widget").length > 0 ? $(".carousel-widget") : false,
            $navlinkLauncher    : $(".navlink-launcher").length > 0 ? $(".navlink-launcher") : false,
            $scrollTo           : $(".scroll-to-section").length > 0 ? $(".scroll-to-section") : false,
            $sectionTo          : $(".section-to").length > 0 ? $(".section-to") : false,
            $forms              : $(".form-widget").length > 0 ? $(".form-widget") : false,
            $setpop             : $(".set-popup").length > 0 ? $(".set-popup") : false,
            $tooltip            : $('[data-toggle="tooltip"]').length > 0 ? $('[data-toggle="tooltip"]') : false,
            $zoomGallery        : $("[data-zoom-gallery='yes']").length > 0 ? $("[data-zoom-gallery='yes']") : false,
            $pageSectionWrp     : $(".page-section-wrp").length > 0 ? $(".page-section-wrp") : false,
            $pageSection        : $(".page-section").length > 0 ? $(".page-section") : false,
            $closeSection       : $(".close-section").length > 0 ? $(".close-section") : false,
            $navigationLink     : $(".navigation-a").length > 0 ? $(".navigation-a") : false,
        }
        return obj;
    };
    
    /*=============================================
    = CALL FUNCTIONS
    =============================================*/
    var $o = slb.getObj();
    $(document).ready(slb.onReady.init);
    $(window).load(slb.onLoad.init)
    
})(jQuery);