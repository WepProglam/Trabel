# 실행 방법

<br/>

1. npm install -g --save 설치할 모듈 이름 (에러창에 뜰거임) (-g 했을때 TRABEL/package.json의 dependencies에 기입 안되면 -g 빼고해봐)
2. 혹시 ejs가 안돌아가면 그 폴더가서 일단 npm install ejs
3. g 옵션이 퍼미션 드립치면서 안되면 https://stackoverflow.com/questions/51811564/sh-1-node-permission-denied ㄱㄱ
4. extensions에서 EJS language support 설치
5. nodemon server.js || npm start

6. git push 하기 전에 .gitignore 파일에 node_modules 포함되있는지 확인

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

그래도 모르겠으면 깃허브 issue에 올려라
