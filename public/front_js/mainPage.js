

controlVisibility = {
    showPlaceBox : function() {
        element = document.querySelector('.input_place'); 
        element.style.visibility = 'visible';
    },

    showDaysBox : function() {
        element = document.querySelector('.range'); 
        element.style.visibility = 'visible';
    },

    hidePlaceBox : function() {
        element = document.querySelector('.input_place'); 
        element.style.visibility = 'hidden';
    },

    hideDaysBox : function() {
        element = document.querySelector('.range'); 
        element.style.visibility = 'hidden';
    }
};




function placeBoxEvent(){
    if(event.keyCode == 13) {
        controlVisibility.showDaysBox(); 
        controlVisibility.hidePlaceBox();
        
        
    }
}
function Cookie(){
    // 위치 쿠키
    setCookie('place',$('.input_place').val(),2);
    // 날짜 쿠키 
    setCookie('day',$('body > div.input > form > div > output').val(),2);
}





setCookie = function(name, value, days){
    if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
    } else {
            var expires = "";
    }
    
    document.cookie = name + "=" + value + expires + "; path=/";
};

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


