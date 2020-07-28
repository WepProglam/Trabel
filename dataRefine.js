let travelList=new Array;

function getInfo(self) {
    let trabel = document.querySelectorAll('.travel_list');
    let length=trabel.length;
    let i=0;
    for (i;i<length;i++) {
        console.log(trabel[i]['textContent']);
        travelList.push(trabel[i]['textContent']);
    }


}