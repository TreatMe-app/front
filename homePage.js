/*
 * JS for homePage generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '28f345f4-a55d-4adb-b356-697afb04e327';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "mapPage",
    "location": "#mapPage"
}, {
    "name": "homePage",
    "location": "#homePage"
}, {
    "name": "profilePage",
    "location": "#profilePage"
}];

homePage_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'p1headerselectmenu': 'homePage_p1headerselectmenu',
        'mobileselectmenuitem_74': 'homePage_mobileselectmenuitem_74',
        'mobileimage_113': 'homePage_mobileimage_113',
        'mobilegrid_60': 'homePage_mobilegrid_60',
        'mobilegridcell_61': 'homePage_mobilegridcell_61',
        'p1image': 'homePage_p1image',
        'p1label': 'homePage_p1label',
        'mobilegridcell_62': 'homePage_mobilegridcell_62',
        'p1toggle': 'homePage_p1toggle',
        'p1search': 'homePage_p1search',
        'mobilegrid_95': 'homePage_mobilegrid_95',
        'mobilegridcell_96': 'homePage_mobilegridcell_96',
        'mobilebutton_102': 'homePage_mobilebutton_102',
        'mobilegridcell_97': 'homePage_mobilegridcell_97',
        'mobilebutton_103': 'homePage_mobilebutton_103',
        'mobilegridcell_98': 'homePage_mobilegridcell_98',
        'mobilebutton_104': 'homePage_mobilebutton_104',
        'mobilegridcell_99': 'homePage_mobilegridcell_99',
        'mobilebutton_109': 'homePage_mobilebutton_109',
        'mobilegridcell_100': 'homePage_mobilegridcell_100',
        'mobilebutton_110': 'homePage_mobilebutton_110',
        'mobilegridcell_101': 'homePage_mobilegridcell_101',
        'mobilebutton_106': 'homePage_mobilebutton_106',
        'mobilebutton_114': 'homePage_mobilebutton_114',
        'p1navbarbutton1': 'homePage_p1navbarbutton1'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=footer]").css("bottom", "-36px");
    }

    Appery.CurrentScreen = 'homePage';

    /*
     * Nonvisual components
     */
    var datasources = [];

    DoctoraliaGetSpecialities = new Appery.DataSource(Doctoralia, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("homePage");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['country'],
            'ATTR': 'fr'
        }]
    });

    datasources.push(DoctoraliaGetSpecialities);

    PlacesAutocompleteGetPredictions = new Appery.DataSource(PlacesAutocomplete, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("homePage");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['input'],
            'ID': 'p1search',
            'ATTR': 'value'
        }, {
            'PATH': ['sensor'],
            'ATTR': 'true'
        }, {
            'PATH': ['key'],
            'ATTR': 'AIzaSyCoX1wNDyuj2Sf2OTdQEb8oD3c5KvGhg1s'
        }, {
            'PATH': ['language'],
            'ATTR': 'fr'
        }, {
            'PATH': ['components'],
            'ATTR': 'country:fr'
        }, {
            'PATH': ['radius'],
            'ATTR': '1000'
        }, {
            'PATH': ['types'],
            'ATTR': 'geocode'
        }, {
            'PATH': ['location'],
            'ATTR': '21,42'
        }]
    });

    datasources.push(PlacesAutocompleteGetPredictions);

    /*
     * Events and handlers
     */

    // Before Show
    homePage_beforeshow = function() {
        Appery.CurrentScreen = "homePage";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_3671_onLoad = homePage_onLoad = function() {
        screen_3671_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        homePage_deviceEvents();
        homePage_windowEvents();
        screen_3671_elementsEvents();
    }

    // screen window events
    screen_3671_windowEvents = homePage_windowEvents = function() {
        $('#homePage').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#homePage').bind({
            pageshow: function() {
                localStorage.setItem('isEmergency', Appery('p1toggle').val());
                //Appery('p1search').val('');
                //Appery('p1search').val(localStorage.getItem('isEmergency'));
            },
        });

    }

    // device events
    homePage_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_3671_elementsExtraJS = homePage_elementsExtraJS = function() {
        // screen (homePage) extra code

        /* p1headerselectmenu */

        $("#homePage_p1headerselectmenu").parent().find("a.ui-btn").attr("tabindex", "23");

        $("#homePage_p1headerselectmenu").closest("div[data-role=fieldcontain]").addClass("ui-btn-right");

        /* p1toggle */

        $("#homePage_p1toggle").parent().find("a.ui-slider-handle").attr("tabindex", "20");
        $("#homePage_p1toggle").val("on").slider('refresh');

    }

    // screen elements handler
    screen_3671_elementsEvents = homePage_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#homePage_p1header [name="p1headerselectmenu"]').die().live({
            change: function() {
                var lang = Appery('p1headerselectmenu');
                localStorage.setItem('lang', lang.val());

                var localLang = localStorage.getItem('lang');

                if (localLang == 'fr') {
                    Appery('p1label').html('Urgence ?');
                    //$('select[name=p1toggle] option:first').text('Non');    
                } else if (localLang == 'es') {
                    Appery('p1label').html('&iquest Urgencia ?');
                } else {
                    Appery('p1label').html('Emergency ?');
                };
            },
        });

        $('#homePage_p1container [name="p1toggle"]').die().live({
            change: function() {
                localStorage.setItem('isEmergency', Appery('p1toggle').val());
                //Appery('p1search').val('');
                //Appery('p1search').val(localStorage.getItem('isEmergency'));
            },
        });

        $('#homePage_p1footer [name="p1navbarbutton1"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('mapPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
            tap: function() {
                Appery.navigateTo('mapPage', {
                    transition: 'slide',
                    reverse: false
                });
            },
        });

    }

    $("#homePage").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        homePage_beforeshow();
    });

    if (runBeforeShow) {
        homePage_beforeshow();
    } else {
        homePage_onLoad();
    }

}

$("#homePage").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    homePage_js();
});

mapPage_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'p2headernavbar': 'mapPage_p2headernavbar',
        'mobilenavbaritem_3': 'mapPage_mobilenavbaritem_3',
        'mobilenavbaritem_5': 'mapPage_mobilenavbaritem_5',
        'mobilenavbaritem_17': 'mapPage_mobilenavbaritem_17',
        'mobilebutton_18': 'mapPage_mobilebutton_18',
        'mobilebutton_23': 'mapPage_mobilebutton_23',
        'p2panel': 'mapPage_p2panel',
        'map': 'mapPage_map',
        'marker1': 'mapPage_marker1',
        'p2footernavbar': 'mapPage_p2footernavbar',
        'mobilenavbaritem_7': 'mapPage_mobilenavbaritem_7',
        'mobilenavbaritem_8': 'mapPage_mobilenavbaritem_8',
        'mobilenavbaritem_9': 'mapPage_mobilenavbaritem_9',
        'mobilenavbaritem_22': 'mapPage_mobilenavbaritem_22'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=footer]").css("bottom", "-36px");
    }

    Appery.CurrentScreen = 'mapPage';

    /*
     * Nonvisual components
     */
    var datasources = [];

    MyPosition = new Appery.DataSource(GeolocationService, {
        'onComplete': function(jqXHR, textStatus) {
            displayDirection(localStorage.getItem('origin'), localStorage.getItem('destination'), Appery('map').gmap, google.maps.TravelMode.DRIVING);

            bikeLayer.setMap(null);
            transitLayer.setMap(null);
            trafficLayer.setMap(Appery('map').gmap);
            //Appery('map').gmap.refresh();
            //map.refresh();
            
            $t.refreshScreenFormElements("mapPage");
        },
        'onSuccess': function(data) {
            var map = Appery('map');
            //map.options['address']='';
            var origin = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            var destination = new google.maps.LatLng(positionArray[1].lat, positionArray[1].lng);

            localStorage.setItem('origin', origin);
            localStorage.setItem('destination', destination);

            marker.setMap(null);
            //professional.setMap(null);
            marker.setOptions({
                position: origin,
                title: "TreatME !",
                icon: "files/views/assets/image/marker-emergencyphone.png"
            });

/*
professional.setOptions({position : destination,
                   title : positionArray[1].title, 
                   icon : "files/views/assets/image/marker-medicine.png"
                  });
*/

            marker.setMap(map.gmap);
            //professional.setMap(map.gmap);
            google.maps.event.addListener(marker, 'click', function(e) {
                map.gmap.setZoom(15);
                map.gmap.setCenter(e.latLng);
                //distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, e.latLng);
                getReverseGeocoding(origin, map.gmap, this, "");
            });

/*
google.maps.event.addListener(professional, 'click', function(e) {
    map.gmap.setZoom(15);
    map.gmap.setCenter(e.latLng);	
    //distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, e.latLng);
    getReverseGeocoding(destination, map.gmap, this, "");
});
*/

            createMarker(positionArray, markerArray, "files/views/assets/image/marker-medicine.png");
            showMarker(markerArray, map);;
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            var map = Appery('map');
            map.options['address'] = 'Paris';

            localStorage.setItem('origin', 'Paris');

            map.refresh();
        },
        'responseMapping': [{
            'PATH': ['coords', 'latitude'],
            'ID': 'map',
            'ATTR': 'latitude'
        }, {
            'PATH': ['coords', 'longitude'],
            'ID': 'map',
            'ATTR': 'longitude'
        }],
        'requestMapping': [{
            'PATH': ['options', 'maximumAge'],
            'ATTR': '3000'
        }, {
            'PATH': ['options', 'timeout'],
            'ATTR': '5000'
        }, {
            'PATH': ['options', 'enableHighAccuracy'],
            'ATTR': 'true'
        }, {
            'PATH': ['options', 'watchPosition'],
            'ATTR': 'true'
        }, {
            'PATH': ['options', 'frequency'],
            'ATTR': '1000'
        }]
    });

    datasources.push(MyPosition);

    /*
     * Events and handlers
     */

    // Before Show
    mapPage_beforeshow = function() {
        Appery.CurrentScreen = "mapPage";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_BCAD_onLoad = mapPage_onLoad = function() {
        screen_BCAD_elementsExtraJS();
        try {
            MyPosition.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };
        Appery('mobilesearchbar_21').hide();

        // TODO fire device events only if necessary (with JS logic)
        mapPage_deviceEvents();
        mapPage_windowEvents();
        screen_BCAD_elementsEvents();
    }

    // screen window events
    screen_BCAD_windowEvents = mapPage_windowEvents = function() {
        $('#mapPage').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#mapPage').bind({
            pageshow: function() {
                Appery('mobilenavbaritem_3').toggle(function() {
                    $('#p2panel').panel('open');
                    $('#p2panel').trigger('updatelayout');
                }, function() {
                    $('#p2panel').panel('close');
                    $('#p2panel').trigger('updatelayout');
                });

                Appery('mobilenavbaritem_17').toggle(function() {
                    Appery('mobilesearchbar_21').show();
                }, function() {
                    Appery('mobilesearchbar_21').hide();
                });

                var map = Appery('map');
                map.gmap.setOptions({
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    panControl: false,
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    overviewMapControl: false
                });
                map.refresh();

                $('#p2listview li a').bind('click', function() {
                    Appery('mobilesearchbar_21').val($(this).html());
                });

                ;
            },
        });

    }

    // device events
    mapPage_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_BCAD_elementsExtraJS = mapPage_elementsExtraJS = function() {
        // screen (mapPage) extra code

        /* map */

        $("[name = 'map']").wrap("<div/>");
        $("[name = 'map']").parent().css("margin-left", $("[name = 'map']").css("margin-left"));
        $("[name = 'map']").parent().css("margin-right", $("[name = 'map']").css("margin-right"));
        $("[name = 'map']").css("margin-left", '0');
        $("[name = 'map']").css("margin-right", '0');

        var map_options = {
            markerSourceName: "map_markers",
            latitude: "",
            longitude: "",
            address: "",
            zoom: 13,
            showLocationMarker: false
        }

        Appery.__registerComponent('map', new Appery.TiggziMapComponent("map", map_options));
        $("[name='map_markers'] [apperytype='marker']").attr("reRender", "map");
        $("[name='map']").closest("[data-role='page']").bind({
            pageshow: function() {
                if (Appery('map') != undefined) {
                    Appery('map').refresh();
                }
            }
        });

    }

    // screen elements handler
    screen_BCAD_elementsEvents = mapPage_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#mapPage_p2header [name="mobilenavbaritem_5"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('profilePage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        });

        $('#mapPage_p2header [name="mobilebutton_18"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('homePage', {
                        transition: 'slide',
                        reverse: true
                    });

                }
            },
        });

        $('#mapPage_p2footer [name="mobilenavbaritem_7"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    displayDirection(localStorage.getItem('origin'), localStorage.getItem('destination'), Appery('map').gmap, google.maps.TravelMode.DRIVING);

                    bikeLayer.setMap(null);
                    transitLayer.setMap(null);
                    trafficLayer.setMap(Appery('map').gmap);

                    Appery('map').refresh();

                }
            },
        });
        $('#mapPage_p2footer [name="mobilenavbaritem_8"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    displayDirection(localStorage.getItem('origin'), localStorage.getItem('destination'), Appery('map').gmap, google.maps.TravelMode.BICYCLING);

                    trafficLayer.setMap(null);
                    transitLayer.setMap(null);
                    bikeLayer.setMap(Appery('map').gmap);

                    Appery('map').refresh();

                }
            },
        });
        $('#mapPage_p2footer [name="mobilenavbaritem_9"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    displayDirection(localStorage.getItem('origin'), localStorage.getItem('destination'), Appery('map').gmap, google.maps.TravelMode.WALKING);

                    trafficLayer.setMap(null);
                    bikeLayer.setMap(null);
                    transitLayer.setMap(null);

                    Appery('map').refresh();

                }
            },
        });
        $('#mapPage_p2footer [name="mobilenavbaritem_22"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    displayDirection(localStorage.getItem('origin'), localStorage.getItem('destination'), Appery('map').gmap, google.maps.TravelMode.TRANSIT);

                    trafficLayer.setMap(null);
                    bikeLayer.setMap(null);
                    transitLayer.setMap(Appery('map').gmap);

                    Appery('map').refresh();;

                }
            },
        });

    }

    $("#mapPage").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        mapPage_beforeshow();
    });

    if (runBeforeShow) {
        mapPage_beforeshow();
    } else {
        mapPage_onLoad();
    }

}

$("#mapPage").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    mapPage_js();
});

profilePage_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_26': 'profilePage_mobilebutton_26',
        'mobileradiogroup_1': 'profilePage_mobileradiogroup_1',
        'mobileradiobutton_2': 'profilePage_mobileradiobutton_2',
        'mobileradiobutton_3': 'profilePage_mobileradiobutton_3',
        'mobilelist_8': 'profilePage_mobilelist_8',
        'mobilelistitem_9': 'profilePage_mobilelistitem_9',
        'mobilelistitembutton_10': 'profilePage_mobilelistitembutton_10',
        'mobilelistitem_11': 'profilePage_mobilelistitem_11',
        'mobilelistitembutton_12': 'profilePage_mobilelistitembutton_12',
        'mobilelistitem_13': 'profilePage_mobilelistitem_13',
        'mobilelistitembutton_14': 'profilePage_mobilelistitembutton_14',
        'mobilelistitem_22': 'profilePage_mobilelistitem_22',
        'mobilelistitembutton_23': 'profilePage_mobilelistitembutton_23',
        'mobilelistitem_24': 'profilePage_mobilelistitem_24',
        'mobilelistitembutton_25': 'profilePage_mobilelistitembutton_25',
        'mobilebutton_29': 'profilePage_mobilebutton_29',
        'mobilebutton_27': 'profilePage_mobilebutton_27',
        'mobilebutton_28': 'profilePage_mobilebutton_28',
        'mobilebutton_30': 'profilePage_mobilebutton_30'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=footer]").css("bottom", "-36px");
    }

    Appery.CurrentScreen = 'profilePage';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    profilePage_beforeshow = function() {
        Appery.CurrentScreen = "profilePage";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_5540_onLoad = profilePage_onLoad = function() {
        screen_5540_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        profilePage_deviceEvents();
        profilePage_windowEvents();
        screen_5540_elementsEvents();
    }

    // screen window events
    screen_5540_windowEvents = profilePage_windowEvents = function() {
        $('#profilePage').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    profilePage_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_5540_elementsExtraJS = profilePage_elementsExtraJS = function() {
        // screen (profilePage) extra code

        /* mobilelist_8 */

        listView = $("#profilePage_mobilelist_8");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#profilePage_mobilelist_8 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_9 */

        /* mobilelistitem_11 */

        /* mobilelistitem_13 */

        /* mobilelistitem_22 */

        /* mobilelistitem_24 */

    }

    // screen elements handler
    screen_5540_elementsEvents = profilePage_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#profilePage_mobileheader [name="mobilebutton_26"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('homePage', {
                        transition: 'slide',
                        reverse: true
                    });

                }
            },
        });

    }

    $("#profilePage").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        profilePage_beforeshow();
    });

    if (runBeforeShow) {
        profilePage_beforeshow();
    } else {
        profilePage_onLoad();
    }

}

$("#profilePage").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    profilePage_js();
});