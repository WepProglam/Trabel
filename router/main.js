var express=require('express');
var app=express();
const bodyParser= require('body-parser');
const { json } = require('body-parser');
const { start } = require('repl');
let dataSets=require('../listing/listingMain').dataSets;
let appK=require('../app/appKey').appKey;

app.use(bodyParser.json());

let coor;

let appKey={'key':appK};

dataSets={'value':dataSets};
//라우팅 설정

/*
홈페이지 : 127.0.0.1:5500/

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
        res.render('2_trabel.html',{appKey});
    }),
    app.get('/final',function(req,res){
        res.render('3_trabel.html',{appKey});
    }),
    app.get('/a',function(req,res){
        res.send({dataSets});
    }),
    app.get('/view',function(req,res){
        res.render('4_trabel.html');
    });


    
}

