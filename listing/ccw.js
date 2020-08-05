var constructor=require('./constructor');
var findIndexArray=require('./findIndexArray');

let makeDot=constructor.makeDot;
let findIndex=findIndexArray.findIndex;

exports.ccw= function(dot1, dot2, dot3) {
    x1 = dot1['x']; x2 = dot2['x']; x3 = dot3['x'];
    y1 = dot1['y']; y2 = dot2['y']; y3 = dot3['y'];

    let temp = x1 * y2 + x2 * y3 + x3 * y1;
    temp = temp - y1 * x2 - y2 * x3 - y3 * x1;
    if (temp > 0) {
        return 1;
    } else if (temp < 0) {
        return -1;
    } else {
        return 0;
    }
}
exports.findAndMergeNearestBlue=function(redDot,blueDot){
    let dis;
    function makeMerge(distance,redIndex,blueIndex){
        this.distance=distance;
        this.redIndex=redIndex;
        this.blueIndex=blueIndex;
    }
    let short;
    let subCount;
    for(let key in redDot){
        dis=new makeMerge(displace(redDot[key],blueDot[0]),redDot[key]['index'],blueDot[0]['index']);
        for(let index in blueDot){
            short=displace(redDot[key],blueDot[index]);
            if(short<=dis.distance){
                dis=new makeMerge(short,redDot[key]['index'],blueDot[index]['index']);
            }
        }
         
        let block=new makeDot(dis['redIndex'],redDot);
    
        let i=findIndex(blueDot,dis.blueIndex);
        subCount=(blueDot[i]['sub']).length+1;
        blueDot[i]['subCounting']=subCount;
        blueDot[i]['sub'].push(block);
 
    }

}

//거리 계산 함수
function displace(red,blue){
    let distance=Math.pow((red['x']-blue['x']),2)+Math.pow((red['y']-blue['y']),2);
    //console.log(distance);
    return distance;
}


//ccw 계산을 통해 비교 순서 결정
exports.findSeq= function(startDot, db2) {
    let arcTan = [];
    let minusTan = [];
    let plusTan = [];
    let cal;
    for (let key in db2) {
        cal = Math.atan(((db2[key]['y']) - startDot['y']) / ((db2[key]['x']) - startDot['x']));
        //console.log(cal);
        if (!((db2[key]['x']) - startDot['x'])) {
            cal = -0.000000000000000000000000000001;
        }
        let block = new Object;
        block.index = key;
        block.cal = cal;
        arcTan.push(block);
    }


    for (let key in arcTan) {

        if (arcTan[key]['cal'] < 0) {
            minusTan.push(arcTan[key]);

        } else {
            plusTan.push(arcTan[key]);
        }
    };

    plusTan.sort(function (a, b) {
        return a.cal - b.cal;
    });

    minusTan.sort(function (a, b) {
        return a.cal - b.cal;
    });
    arcTan = [];
    arcTan = plusTan.concat(minusTan);


    //console.log(arcTan);

    return arcTan;
}