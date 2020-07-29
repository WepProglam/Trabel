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
        controlVisibility.showDaysBox(); controlVisibility.hidePlaceBox();
    }
}