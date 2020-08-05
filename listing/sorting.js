var mod = require('./ccw');
var constructor=require('./constructor');
const data = require('../router/main');


let ccw=mod.ccw;
let findAndMergeNearestBlue=mod.findAndMergeNearestBlue;
let findSeq=mod.findSeq;

let makeDot=constructor.makeDot;
let Block=constructor.Block;


let colorSets=['rgba(255,0,0,0.4)','rgba(0,255,0,0.4)','rgba(0,0,255,0.4)','rgb(125,125,0,0.4)','rgba(125,0,125,0.4)','rgba(0,125,125,0.4)','rgba(255,75,75,0.4)'];

//카카오에 들어갈 객체
exports.makeTag=function(infoNum){
    let positions=[];
    for (let i = 0; i < infoNum; i++) {
        let latlng = {
            x:Math.random() * (2) + 33,
            y:Math.random() * (2) + 126.4
        };
        let name = 'name';
        let item = new Block(name, latlng, i);

        positions.push(item);
    }
    return positions;
}

//카카오 객체 -> 백엔드 객체 변환
//메인 함수
/*
db2의 형식
[
    {x: example, y: example, index: example},
]
*/

exports.drawGraph=function(positions){
    let db=[];
    for (let key in positions) {
        let obj = new Object;
        obj.x = positions[key]['latlng']['x'];
        obj.y = positions[key]['latlng']['y'];
        obj.index=key;
        db.push(obj);
    }
    
    return db;
}


//ㅂㄹㄲㅈ 알고리즘 (모든 점을 포함하는 다각형 그리기)
exports.sort=function(db2) {
    let object={};
    let yarray = [];
    let seq = [];
    let db3 = [];
    let redDot=[];
    let blueDOt=[];
    let dot1, dot2, dot3;
    for (let key in db2) {
        let miniObj={
            y: db2[key]['y'],
            index: db2[key]['index']
        };
        yarray.push(miniObj);
    }

    yarray.sort(function(a,b){
        return a.y<b.y ? -1 : a.y>b.y?1:0;
    });

    initDot = new makeDot(yarray[0]['index'], db2);
    seq = findSeq(initDot, db2);
    db3.push(initDot);

    secondDot = new makeDot(seq[0]['index'], db2);
    db3.push(secondDot);
    let i = 1;
    let j;

    while (i < seq.length - 1) {
        dot2 = db3.pop();
        dot1 = db3.pop();
        db3.push(dot1);
        db3.push(dot2);
        dot3 = new makeDot(seq[i]['index'], db2);

        if (mod.ccw(dot1, dot2, dot3) > 0) {
            db3.push(dot3);
        }
        else {
            j = i;
            while (mod.ccw(dot1, dot2, dot3) <= 0) {
                redDot.push(db3.pop());
                dot2 = db3.pop();
                dot1 = db3.pop();
                db3.push(dot1);
                db3.push(dot2);
                dot3 = new makeDot(seq[j]['index'], db2);
            }
            db3.push(dot3);
        }
        i++;
    }

    blueDot=db3; 

    object={
        blueDot:blueDot,
        redDot:redDot
    };
    
    return object;
}
       




//그래프에 들어갈 데이터 형식에 맞추는 함수

exports.makeGraphData=function(blueData,k,label){
 
    let smallData=[];
    smallData.push(blueData);
    let length=blueData['subCounting'];

    for(let i=0;i<length;i++){
        smallData.push(blueData['sub'][i]);
    }

    return smallData;
    
}

exports.makeData=function(label,data,k){
    this.label=label;
    this.data=data;
    this.fill=false;
    this.showLine=false;
    k=k%6;
    this.pointBackgroundColor=colorSets[k];
}





