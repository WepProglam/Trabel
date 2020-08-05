//주어진 객체 배열에서 주어진 index의 값을 인덱스로 가지는 객체를
//찾아서 그 객체가 배열 안에서 몇 번째 객체인지 찾는 함수 

exports.findIndex=function(obj,index){
    for(let key in obj){
        if(obj[key]['index']==index){
            return key;
        }
    }
}