# 실행 방법

<br/>

1. sudo npm install -g node
2. sudo npm install express
3. sudo npm install -g nodemon
3. nodemon server.js 실행
4. live server로 하면 아마 안될거임 

    그래서 ctrl+s한다고 바로 수정 안됨. 대신 f5누르면 수정 됨.

5. 서버 끄는 법 : 터미널(wsl)에서 ctrl + c
<br/>

혹시 npm이 설치 안되어있다면 구글링 참고(아마 sudo apt-get install npm)

<br/>

# 전체 개요

<br/>

1. public -> css, js, image
2. router -> 라우팅 하는 main.js파일 (라우팅 검색해보면 금방 뭔지 알 수 있음)
3. views -> html 파일들
4. server.js -> 1~3을 총괄하는 서버 파일
5. 이렇게 한 이유 -> 서버 사용


<br/>

## 실행하다 이해 안갈만한 부분은 각 파일에 주석 처리 해놓음

<br/>

## 그래도 모르겠으면 깃허브 issue에 올려라
