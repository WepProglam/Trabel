let positionData;
let positions= [];  

$.ajax({
    url: '/show',
    dataType: 'json',
    data: '',
    type:"get"
}).done(function(data){
    positionData=getData(data);
    makeTag(positionData);
    for (let key in positionData){
        console.log(positionData[key]);
        $('.index').append("<li>"+positionData[key]+"</li>");
    }
    

});
function getData(data){
    let bar=Object.keys(data)[0];
    let index;
    let startIndex=0;
    let instructor=function(name,xpos,ypos){
        this.name=name;
        this.xpos=xpos;
        this.ypos=ypos;
    };
    

    coor=new Array;
    let ob=new Object;
    while(bar.indexOf('},{')>-1){
        startIndex=0;
        index=bar.indexOf('},{');
        ob=bar.slice(startIndex,index+1);
        console.log(ob);
        console.log(Object.keys(ob));
        coor.push(ob);

        startIndex=index+2;
        bar=bar.slice(startIndex,bar.length);
        if(bar.indexOf('},{') <=-1){
            coor.push(bar.slice(0,index+1));

        }
    
    }  
    for (let key in coor){
        //console.log(coor[key]);
        /*let latlng=new kakao.maps.LatLng(coor[key]['ypos'],coor[key]['xpos']);
        let item=new Block(coor[key]['name'],latlng);
        positions.push(item);
        console.log(item);*/
 
    }

    return coor;
}
function makeTag(positionData){
    let Block=function(name,latlng){
        this.name=name;
        this.latlng=latlng;
    }
    for (let key in positionData){
        console.log(typeof(positionData));
        console.log(positionData[key]);
        console.log(positionData[key]["'name"]);
        let latlng=new kakao.maps.LatLng(positionData[key]['ypos'],positionData[key]['xpos']);
        let name=positionData[key]['name'];
        let item=new Block(name,latlng);
        console.log(name,latlng);
        positions.push(item);
        console.log(item);
    }
}

var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
/*positions = [
    {
        title: '카카오', 
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    },
    {
        title: '생태연못', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        title: '텃밭', 
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        title: '근린공원',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    }
];*/

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    console.log(positions);
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}