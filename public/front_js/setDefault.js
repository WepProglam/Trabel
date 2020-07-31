getCookie = function(name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    
    for (i = 0; i < ARRcookies.length; i++) {     
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            
            x = x.replace(/^\s+|\s+$/g, "");

            if (x == name) {
                    return unescape(y);
            }
    }
}

let place = getCookie('place');

function defaultPlace(name) {
    $('input.search_place').val(name);
}
