function manageActive(self) {
    let bool = $(self).attr('active');
    if (bool === 'false') {
        $(self).attr('active', 'true');
        $(self).css('backgroundColor', 'blue');
    }
    else {
        $(self).attr('active', 'false');
        $(self).css('backgroundColor', 'white');
    }

}

function makealert(self) {
    let target = document.getElementById('preList');
    let index = target.children.length + 1;
    let xpos = self.getAttribute('xpos');
    let ypos = self.getAttribute('ypos');

    element = document.createElement('div'),
        itemStr = '<div class="pre_' + index + '">'
        + '<h5 class="travel_list" xpos="' + xpos + '" ypos="' + ypos + '">' + self['innerText'] + '</h5>' + '</div>';
    element.innerHTML = itemStr;
    element.className = 'preItem';


    let cancel = document.createElement('div'),
        item = '<button class="cancelButton" onclick="cancel(this);">X</button>';

    cancel.innerHTML = item;
    cancel.className = 'cancel';
    target.appendChild(element);
    element.appendChild(cancel);
}

function cancel(self) {
    self.parentNode.parentNode.remove();
}

function showRange() {
    $('#moreInfo').css('visibility', 'visible');
    //setCookie('timeToken','F',1);   //*****************언제 얼만큼 갈건지 설정안하면 다음 목적지 선택 못하게 쿠키 발급
}
function hideRange() {
    $('#moreInfo').css('visibility', 'hidden');
}


function addOnHtml() {

    let time = $('output.time').val();
    let item = $('h5.travel_list').last();
    let charClockArray = "";
    let parent = $('button.when');
    for (let i = 0; i < parent.length; i++) {
        if ($(parent[i]).attr('active') === 'true') {
            charClockArray = charClockArray + parent[i]['textContent'] + "/";
        }
    }
    item.attr('time', time + '분');
    item.attr('when', charClockArray);
    hideRange();
    for (let i = 0; i < parent.length; i++) {
        if ($(parent[i]).attr('active') === 'true') {
            $(parent[i]).attr('active', 'false');
            $(parent[i]).css('backgroundColor', 'white');
        }
    }
}