let sorting = require('./sorting');
var mod = require('./ccw');
var constructor = require('./constructor');
const data = require('../router/main');


let ccw = mod.ccw;
let findAndMergeNearestBlue = mod.findAndMergeNearestBlue;
let findSeq = mod.findSeq;

let makeDot = constructor.makeDot;
let Block = constructor.Block;

let makeTag = sorting.makeTag;
let drawGraph = sorting.drawGraph;
let sort = sorting.sort;
let makeGraphData = sorting.makeGraphData;
let makeData = sorting.makeData;

let pos;
let redDot, blueDot; //blue=블록껍질 , red= 속
let blueDotArray = [];

const infoNum = 20; //여행지 개수 설정
let dataSets = [];    //클라이언트로 넘길 정보
const MAX_TRABEL_ADAY = 3;    //하루 최대 여행 플레이스(3이면 3곳)

let positions = makeTag(infoNum);
positions = drawGraph(positions);

pos = sort(positions);    //convex hull(==블록껍질 알고리즘)
redDot = pos.redDot;      //리턴값 중 reDot
blueDot = pos.blueDot;    //리턴값 중 blueDot


blueDot = findAndMergeNearestBlue(redDot, blueDot);    //병합 과정
blueDotArray.push(blueDot);
for (let i in blueDot) {
    if (blueDot[i]['sub'].length > MAX_TRABEL_ADAY) {
        let pos2 = sort(blueDot[i]['sub']);
        let redDot2 = pos2.redDot;
        let blueDot2 = pos2.blueDot;
        blueDot2 = findAndMergeNearestBlue(redDot2, blueDot2);
        blueDotArray.push(blueDot2);
    }
}   // 세분화 과정 -- 여기서 수정하면 됨


let iten = {
    label: 'Border',
    data: blueDot,
    fill: false,
    showLine: false,
    pointBackgroundColor: 'rgba(0, 0, 0,1)'
};

dataSets.push(iten);

let smallData = [];   //dataSet에 push 하기 전전 단계 (makeData에서 한번 더 가공 후 dataSet 푸쉬)

for (let i in blueDotArray) {
    for (let key in blueDotArray[i]) {
        let label = "seperate_" + key;
        smallData = makeGraphData(blueDot[key], key, label);
        let omg = new makeData(label, smallData, key);    //data 형식 맞추는 함수
        dataSets.push(omg);
    }

}


dataSets = JSON.stringify(dataSets);  //json형식으로 바꾸기

module.exports = {
    dataSets: dataSets
};
