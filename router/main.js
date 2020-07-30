var express=require('express');
var app=express();
const bodyParser= require('body-parser');
const { json } = require('body-parser');

app.use(bodyParser.json());
let data;

module.exports=data;
//라우팅 설정

/*
홈페이지 : 127.0.0.1:5500/ 또는 127.0.0.1:5500/index 

두번째 페이지 : 127.0.0.1:5500/place

세번째 페이지 : 127.0.0.1:5500/final
*/ 
module.exports=function(app)
{

        //../views/1_trabel.html이 아닌 이유 => server.js 주석

    app.get('/',function(req,res){
        res.render('1_trabel.html');
    }),
    app.get('/place',function(req,res){
        res.render('2_trabel.html');
    }),
    app.get('/final',function(req,res){
        res.render('3_trabel.html');
    }),
    app.get('/show',function(req,res){
        res.send(data);
    }),
    app.get('/view',function(req,res){
        res.render('4_trabel.html');
    }),
    app.all('/server',function(req,res){
        data=req.query;
        res.send(getData(data));
    });

    
}

function getData(data){
    let bar=Object.keys(data)[0];

    console.log(bar);
    

    
    return data;
}