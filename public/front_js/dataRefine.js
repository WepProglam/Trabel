let travelList = new Array;

function getInfo(self) {
    let trabel = document.querySelectorAll('.travel_list');
    let length = trabel.length;
    let i = 0;
    for (i; i < length; i++) {
        console.log(trabel[i]['textContent']);
        travelList.push(trabel[i]['textContent']);
    }

    $.ajax({
        url: 'http://127.0.0.1:5500',
        dataType: 'json',
        data:travelList,
        type:"GET"
    }).done(function(){
        alert('success');
    })
    .always(()=>{
        console.log('always');
    })

}