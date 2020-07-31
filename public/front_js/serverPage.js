
let pos = new Object;
let positions = [];


$.ajax({
    url: '/show',
    dataType: 'json',
    data: '',
    type: "get"
}).done(function (data) {

})
    .always(function () {
        console.log('load success');
    })


makeTag(pos);

function makeTag(pos) {
    let Block = function (name, latlng) {
        this.title = name;
        this.latlng = latlng;
    }
    for (let i = 0; i < 50; i++) {
        let latlng = new kakao.maps.LatLng(Math.random() * (1.25) + 33, Math.random() * (1.4) + 126.4);
        let name = 'name';
        let item = new Block(name, latlng);
        positions.push(item);
    }

    for (let key in positions) {
        console.log(positions[key]);
    }
    makingTag(positions);
    drawGraph(positions);
}



// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

function makingTag(positions) {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var bounds = new kakao.maps.LatLngBounds();

    for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        bounds.extend(positions[i]['latlng']);


        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            //image: markerImage // 마커 이미지 
        });

        map.setBounds(bounds);
    }
}

function drawGraph(positions) {
    let ctx = document.getElementById('myChart').getContext('2d');
    let db = [];

    for (let key in positions) {
        let obj = new Object;
        obj.x = positions[key]['latlng']['Ga'];
        obj.y = positions[key]['latlng']['Ha'];
        db.push(obj);
    }

    let db2 = db;
    db2 = sort(db2);

    let scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: db,
                fill: false,
                showLine: false,
                pointBackgroundColor: 'red'

            }, {
                label: 'Scatter Dataset',
                data: db2,
                fill: false,
                showLine: false,
                pointBackgroundColor: 'blue'
            }],
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }
                ]
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

        }
    });

}

//ㅂㄹㄲㅈ 알고리즘 (모든 점을 포함하는 다각형 그리기)

function makeDot(key, obj) {
    //console.log(obj[key]['x']);
    this.x = obj[key]['x'];
    this.y = obj[key]['y'];
}

function sort(db2) {

    let yarray = [];
    let seq = [];
    let db3 = [];
    let dot1, dot2, dot3;



    for (let key in db2) {
        yarray.push(db2[key]['y']);
    }

    initDot = new makeDot(yarray.indexOf(Math.min.apply(null, yarray)), db2);
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
        //console.log(dot1, dot2, dot3);
        if (ccw(dot1, dot2, dot3) > 0) {

            db3.push(dot3);
        }
        else {
            j = i;
            while (ccw(dot1, dot2, dot3) <= 0) {
                //console.log('뒤로가기');
                db3.pop();
                dot2 = db3.pop();
                dot1 = db3.pop();
                db3.push(dot1);
                db3.push(dot2);
                dot3 = new makeDot(seq[j]['index'], db2);
                //console.log(dot1, dot2, dot3);
            }
            db3.push(dot3);
        }
        i++;
    }
    return db3;
}

function findSeq(startDot, db2) {
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


    console.log(arcTan);

    return arcTan;
}


function ccw(dot1, dot2, dot3) {
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