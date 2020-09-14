(function () {
    "use strict";

    function initialize() {
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(55.53333,28.66667),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.53333,28.66700),
        });

        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: "Мы здесь"
        });

        infowindow.open(map, marker);

        //add overlay
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('map-overlay'));
    }

    google.maps.event.addDomListener(window, 'load', initialize);
   // navigator.geolocation.getCurrentPosition(initialize);
    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $('.gallery-btn a').click(function () {

            $(".gallery-btn a").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".gellery-item").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
       // jQeury smooth scroll
        $("li.smooth-scroll a").bind("click", function(event){
            var $anchor = $(this);
            var headerH = "50";
            $("html, body")
                .stop()
                .animate({
                scrollTop: $($anchor.attr("href"))
                    .offset()
                    .top - headerH + "px"
            }, 1200, "easeOutCirc");

            event.preventDefault();

        });
        //jquery scroll spy
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 95
        });
        new WOW().init();
        //Pretty Photo
        $("a[data-gallery^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
    });


    jQuery(window).load(function () {


    });
 $(document).ready(function() { // РІСЃСЏ РјaРіРёСЏ РїoСЃР»e Р·aРіСЂСѓР·РєРё СЃС‚СЂaРЅРёС†С‹
        $("#ajaxform").submit(function(){ // РїeСЂeС…РІaС‚С‹РІaeРј РІСЃe РїСЂРё СЃoР±С‹С‚РёРё oС‚РїСЂaРІРєРё
            var form = $(this); // Р·aРїРёС€eРј С„oСЂРјСѓ, С‡С‚oР±С‹ РїoС‚oРј РЅe Р±С‹Р»o РїСЂoР±Р»eРј СЃ this
            var error = false; // РїСЂeРґРІaСЂРёС‚eР»СЊРЅo oС€РёР±oРє РЅeС‚
            form.find('input, textarea').each( function(){ // РїСЂoР±eР¶РёРј Рїo РєaР¶РґoРјСѓ РїoР»СЋ РІ С„oСЂРјe
                if ($(this).val() == '') { // eСЃР»Рё РЅaС…oРґРёРј РїСѓСЃС‚oe
                    alert('error'+$(this).attr('placeholder')); // РіoРІoСЂРёРј Р·aРїoР»РЅСЏР№!
                    error = true; // oС€РёР±Рєa
                }
            });
            if (!error) { // eСЃР»Рё oС€РёР±РєРё РЅeС‚
                var data = form.serialize(); // РїoРґРіoС‚aРІР»РёРІaeРј РґaРЅРЅС‹e
                $.ajax({ // РёРЅРёС†РёaР»РёР·РёСЂСѓeРј ajax Р·aРїСЂoСЃ
                    type: 'POST', // oС‚РїСЂaРІР»СЏeРј РІ POST С„oСЂРјaС‚e, РјoР¶РЅo GET
                    url: 'contact.php', // РїСѓС‚СЊ Рґo oР±СЂaР±oС‚С‡РёРєa, Сѓ РЅaСЃ oРЅ Р»eР¶РёС‚ РІ С‚oР№ Р¶e РїaРїРєe
                    dataType: 'json', // oС‚РІeС‚ Р¶РґeРј РІ json С„oСЂРјaС‚e
                    data: data, // РґaРЅРЅС‹e РґР»СЏ oС‚РїСЂaРІРєРё
                    beforeSend: function(data) { // СЃoР±С‹С‚Рёe Рґo oС‚РїСЂaРІРєРё
                        form.find('input[type="submit"]').attr('disabled', 'disabled'); // РЅaРїСЂРёРјeСЂ, oС‚РєР»СЋС‡РёРј РєРЅoРїРєСѓ, С‡С‚oР±С‹ РЅe Р¶aР»Рё Рїo 100 СЂaР·
                    },
                    success: function(data){ // СЃoР±С‹С‚Рёe РїoСЃР»e СѓРґaС‡РЅoРіo oР±СЂaС‰eРЅРёСЏ Рє СЃeСЂРІeСЂСѓ Рё РїoР»СѓС‡eРЅРёСЏ oС‚РІeС‚a
                        if (data['error']) { // eСЃР»Рё oР±СЂaР±oС‚С‡РёРє РІeСЂРЅСѓР» oС€РёР±РєСѓ
                            alert(data['error']); // РїoРєaР¶eРј eС‘ С‚eРєСЃС‚
                        } else { // eСЃР»Рё РІСЃe РїСЂoС€Р»o oРє
                            alert('ok'); // РїРёС€eРј С‡С‚o РІСЃe oРє
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) { // РІ СЃР»СѓС‡ae РЅeСѓРґaС‡РЅoРіo Р·aРІeСЂС€eРЅРёСЏ Р·aРїСЂoСЃa Рє СЃeСЂРІeСЂСѓ
                        alert(xhr.status); // РїoРєaР¶eРј oС‚РІeС‚ СЃeСЂРІeСЂa
                        alert(thrownError); // Рё С‚eРєСЃС‚ oС€РёР±РєРё
                    },
                    complete: function(data) { // СЃoР±С‹С‚Рёe РїoСЃР»e Р»СЋР±oРіo РёСЃС…oРґa
                        form.find('input[type="submit"]').prop('disabled', false); // РІ Р»СЋР±oРј СЃР»СѓС‡ae РІРєР»СЋС‡РёРј РєРЅoРїРєСѓ oР±СЂaС‚РЅo
                    }

                });
            }
            return false; // РІС‹СЂСѓР±aeРј СЃС‚aРЅРґaСЂС‚РЅСѓСЋ oС‚РїСЂaРІРєСѓ С„oСЂРјС‹
        });
    });

}(jQuery));