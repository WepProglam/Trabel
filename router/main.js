var express=require('express');
var app=express();


//라우팅 설정

/*
홈페이지 : 127.0.0.1:5500/ 또는 127.0.0.1:5500/index 

두번째 페이지 : 127.0.0.1:5500/place

세번째 페이지 : 127.0.0.1:5500/final
*/ 
module.exports=function(app)
{
    app.get('/',function(req,res){
        //../views/1_trabel.html이 아닌 이유 => server.js 주석
        res.render('1_trabel.html')
    }),   
    app.get('/index',function(req,res){
        res.render('1_trabel.html')
    }),
    app.get('/place',function(req,res){
        res.render('2_trabel.html')
    }),
    app.get('/final',function(req,res){
        res.render('3_trabel.html')
    });
}