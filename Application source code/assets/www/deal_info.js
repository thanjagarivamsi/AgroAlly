/*
 * JS for deal_info generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '54bfebde-ff0b-4959-8e0a-400531094339';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "dealersreg",
    "location": "dealersreg.html"
}, {
    "name": "sel_dist",
    "location": "sel_dist.html"
}, {
    "name": "Agrotips",
    "location": "Agrotips.html"
}, {
    "name": "crops",
    "location": "crops.html"
}, {
    "name": "Screen4",
    "location": "Screen4.html"
}, {
    "name": "Insurance",
    "location": "Insurance.html"
}, {
    "name": "dealers_page",
    "location": "dealers_page.html"
}, {
    "name": "deal_info",
    "location": "deal_info.html"
}, {
    "name": "deal_login",
    "location": "deal_login.html"
}, {
    "name": "deler_det",
    "location": "deler_det.html"
}];

function deal_info_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'deal_info_mobilebutton_11',
        'spacer_21': 'deal_info_spacer_21',
        'mobileworkarea_18': 'deal_info_mobileworkarea_18',
        'mobileimage_26': 'deal_info_mobileimage_26',
        'mobilelabel_27': 'deal_info_mobilelabel_27',
        'mobilelabel_28': 'deal_info_mobilelabel_28',
        'mobilelabel_29': 'deal_info_mobilelabel_29',
        'mobilelabel_30': 'deal_info_mobilelabel_30',
        'mobileimage_3': 'deal_info_mobileimage_3',
        'mobilelabel_20': 'deal_info_mobilelabel_20',
        'Crops': 'deal_info_Crops',
        'Insurance': 'deal_info_Insurance',
        'Agrotips': 'deal_info_Agrotips'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'deal_info';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var deal_info_onLoad = function() {
            deal_info_elementsExtraJS();

            deal_info_deviceEvents();
            deal_info_windowEvents();
            deal_info_elementsEvents();
        };

    // screen window events


    function deal_info_windowEvents() {

        $('#deal_info').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function deal_info_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function deal_info_elementsExtraJS() {
        // screen (deal_info) extra code

    };

    // screen elements handler


    function deal_info_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#deal_info_mobileheader [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="deal_info_panel_2"]').panel("open");

                }
            },
        }, '#deal_info_mobileheader [name="mobilebutton_11"]');

        $(document).off("click", '#deal_info_panel_2 [name="Crops"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('crops', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#deal_info_panel_2 [name="Crops"]');
        $(document).off("click", '#deal_info_panel_2 [name="Insurance"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Insurance', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        }, '#deal_info_panel_2 [name="Insurance"]');
        $(document).off("click", '#deal_info_panel_2 [name="Agrotips"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Agrotips', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#deal_info_panel_2 [name="Agrotips"]');

    };

    $(document).off("pagebeforeshow", "#deal_info").on("pagebeforeshow", "#deal_info", function(event, ui) {
        Apperyio.CurrentScreen = "deal_info";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    deal_info_onLoad();
};

$(document).off("pagecreate", "#deal_info").on("pagecreate", "#deal_info", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    deal_info_js();
});