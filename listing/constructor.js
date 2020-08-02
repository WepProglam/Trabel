//점 객체 생성자 함수
exports.makeDot=function(key, obj,subthings) {
    this.x = obj[key]['x'];
    this.y = obj[key]['y'];
    this.index = obj[key]['index'];
    this.sub=[];
    if (subthings>0){
        this.subCounting=subthings;
    }
    else{
        this.subCounting=0;
    }
    
}


//카카오 좌표 객체 생성자 함수
exports.Block = function (name, latlng, index) {
    this.title = name;
    this.latlng = latlng;
    this.index = index;
}