const Buttons = {
  setColor: function (color) {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons.item(i).style.backgrounColor = color;
    }

    var links = document.querySelectorAll('h2');
    for (var i = 0; i < links.length; i++) {
      links.item(i).style.color = color;
    }
  },

  setBgColor: function (color) {
    var buttons = document.querySelectorAll('button');
    for (var k = 0; k < buttons.length; k++) {
      buttons.item(k).style.backgroundColor = color;
    }
  }
}


var Body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  }
}

function lightDarkHandler(self) {
  var target = document.querySelector('body');
  var pre_type = self.value;

  if (pre_type === 'DARK') {
    Body.setColor('lightgrey');
    document.body.style.backgroundImage = "url('bg_dark.jpg')";
    Buttons.setColor('lightgrey');
    Buttons.setBgColor('grey');
    self.value = 'LIGHT';
  }
  else {
    Body.setColor('BF1C1C');
    document.body.style.backgroundImage = "url('bg_light.jpg')";
    Buttons.setColor('BF1C1C');
    Buttons.setBgColor('white');
    self.value = 'DARK';
  }
}