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
let listArray= new Array();

function setVisible(self){
    let number=self.getAttribute('id');

    const list=document.querySelector('#index_list');
    
    if (number===listArray[listArray.length-1]){
        listArray.pop();
        indexList.setMapInVisible();
        indexList.setExplainInVisible();
        indexList.setExplainTextInVisible();
        
    }
    else{
        listArray.push(number);
        indexList.setMapVisible();
        indexList.setExplainVisible();
        indexList.setExplainTextVisible();
    }

}


