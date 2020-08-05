var findIndexArray=require('./findIndexArray');
let findIndex=findIndexArray.findIndex;

//점 객체 생성자 함수
exports.makeDot=function(key,obj,subthings) {
    let k=findIndex(obj,key);
    this.x = obj[k]['x'];
    this.y = obj[k]['y'];
    this.index=key;
    this.sub=[];
    if (subthings>0){
        this.subCounting=subthings;
    }
    else{
        this.subCounting=0;
    }
   // console.log(this);
}


//카카오 좌표 객체 생성자 함수
exports.Block = function (name, latlng, index) {
    this.title = name;
    this.latlng = latlng;
    this.index = index;
}