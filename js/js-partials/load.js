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
    