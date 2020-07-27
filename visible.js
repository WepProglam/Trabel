const indexList={

    setMapVisible : function(){
        var mapImage=document.querySelector('img');
        mapImage.style.opacity=0.95;
    },

    setExplainVisible : function(){
        var expain=document.querySelector('#explain');
        expain.style.opacity=0.95;
    },

    setExlainTextVisible : function(){
        var text=document.querySelector('#explain > p');
        text.style.opacity=0.95;
    },

    setMapInVisible : function(){
        var mapImage=document.querySelector('img');
        mapImage.style.opacity=0;
    },

    setExplainInVisible : function(){
        var expain=document.querySelector('#explain');
        expain.style.opacity=0;
    },

    setExlainTextInVisible : function(){
        var text=document.querySelector('#explain > p');
        text.style.opacity=0;
    },

}

function setVisible(self){
    const list=document.querySelector('#index_list');
    if (list.getAttribute('value')==="1"){
        
        list.setAttribute('value','0');
        indexList.setMapInVisible();
        indexList.setExplainInVisible();
        indexList.setExplainTextInVisible();
        
    }
    else{

        list.setAttribute('value','1');
        indexList.setMapVisible();
        indexList.setExplainVisible();
        indexList.setExplainTextVisible();
    }
}


