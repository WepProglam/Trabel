var express = require('express');
var app = express();
var router = require('./router/main')(app);


//views(보이는 것)의 기본 주소를 /mnt/c/Users(혹은 본인 이름)/USER/Desktop/trabel/views로 하겠다고 설정
//따라서 router/main.js에서 보면 html파일을 로드할때 1_trabel.html로 간단히 로드
app.set('views', __dirname + '/views');

//ejs라는 html 해석하는 툴이 있나봄
app.set('view engine', 'ejs');

//ejs로 렌더링하겠다는 뜻
app.engine('html', require('ejs').renderFile);




//서버의 주소를 http://127.0.0.1:5500/로 설정하겠다는 뜻
app.listen(5500, function () {
    console.log('http://127.0.0.1:5500');
});


//static file(html,css,js)을 public 폴더에서 찾아라는 명령

//그래서 html파일 보면 사진 파일을 ../image/night_bg.png가 아닌 img/night_bg.png
//같은 맥락으로 js파일을 로드할 때도 ../front_js/visible.js가 아닌 front_js/visible.js

app.use(express.static('public'));
