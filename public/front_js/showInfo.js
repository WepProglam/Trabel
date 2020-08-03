
let pos = new Object;
let positions = [];
let redDot = [];
let blueDot = [];
let dataSets = [];
let smallData = [];
let colorSets = ['rgba(255,0,0,0.2)', 'rgba(0,255,0,0.2)', 'rgba(0,0,255,0.2)', 'rgb(125,125,0,0.2)', 'rgba(125,0,125,0.2)', 'rgba(0,125,125,0.2)', 'rgba(255,75,75,0.2)'];


$.ajax({
    url: '/a',
    dataType: 'json',
    data: '',
    type: "get"
}).done(function (data) {
    let gotData = JSON.parse(data.dataSets.value);
    for (let key in gotData) {
        let $div = $("<div id='" + key + "'></div>");
        let $label = $("<div>" + gotData[key]['label'] + "</div>");
        let $posWrap = $("<div></div>");
        $('div.indexClass').append($div);
        $div.append($label);
        $div.append($posWrap);
        for (let i in gotData[key]['data']) {
            let $position = $("<div></div>");
            let $xpos = $("<span>" + "X 좌표" + gotData[key]['data'][i]['x'] + "</span>");
            let $ypos = $("<span>" + " Y 좌표" + gotData[key]['data'][i]['y'] + "</span>");
            $position.append($xpos);
            $position.append($ypos);
            $posWrap.append($position);
        }
        $div.append("<br/>");
    }
    console.log(gotData);
    makeGraph(gotData);

});
function makeGraph(gotData) {
    var ctx = document.getElementById("myChart").getContext('2d');
    console.log(gotData);
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: gotData
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
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

        }
    });
}




/*
[
    {   "label": "Border",
        "data": [
            { "x": 33.327629851976944, "y": 126.55281697528049, "index": 3,
            "sub": [], "subCounting": 0 },
            { "x": 34.559908422627544, "y": 126.8581476474582, "index": 8,
            "sub": [{ "x": 34.31238175761853, "y": 127.14312669685928, "index": 6, "sub": [], "subCounting": 0 }, { "x": 34.21082195837033, "y": 127.39742096130627, "index": 7, "sub": [], "subCounting": 0 }], "subCounting": 2 },
            { "x": 34.94197835071918, "y": 128.17852626937625, "index": 2, "sub": [{ "x": 34.680994311482856, "y": 127.76872273938388, "index": 9, "sub": [], "subCounting": 0 }], "subCounting": 1 },
            { "x": 33.774293181934986, "y": 128.07991807406307, "index": 0, "sub": [{ "x": 34.33879926733101, "y": 127.92902382605492, "index": 1, "sub": [], "subCounting": 0 }], "subCounting": 1 },
            { "x": 33.008499677725446, "y": 127.9908963319214, "index": 4, "sub": [{ "x": 33.18633553146098, "y": 127.88486432658611, "index": 5, "sub": [], "subCounting": 0 }], "subCounting": 1 }
        ],
        "fill": false,
        "showLine": false,
        "pointBackgroundColor": "rgba(0, 0, 0,1)"
    },

    {
        "label": "seperate_0",
        "data": [
            { "x": 33.327629851976944, "y": 126.55281697528049, "index": 3, "sub": [], "subCounting": 0 }
        ],
        "fill": false,
        "showLine": false,
        "pointBackgroundColor": "rgba(255,0,0,0.2)"
    },

]
*/

/*
function drawGraph(positions) {
    let ctx = document.getElementById('myChart').getContext('2d');
    let db = [];

    for (let key in positions) {
        let obj = new Object;
        obj.x = positions[key]['latlng']['Ga'];
        obj.y = positions[key]['latlng']['Ha'];
        obj.index = positions[key]['index'];
        db.push(obj);
    }


    let db2 = db;
    db2 = sort(db2);

    /*dataSets=[{
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
    }];*/
/*
console.log(dataSets);
let inputData=dataSets;
let scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: inputData
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
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },

    }
});

}
*/