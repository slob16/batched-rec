    /*=============================================
    = TEMPLATE VARIABLES
    =============================================*/
    slb.getObj = function() {
        var obj = {
            $window             : $(window),
            $html               : $("html"),
            $slbBody           : $(".body"),
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
    