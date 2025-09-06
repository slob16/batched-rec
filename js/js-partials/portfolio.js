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
    