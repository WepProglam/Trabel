var express=require('express');
var app=express();
const bodyParser= require('body-parser');
const { json } = require('body-parser');
const { start } = require('repl');


app.use(bodyParser.json());
let data;
let coor;
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
    app.get('/a',function(req,res){
        res.render('4_trabel.html');
    }),
    app.all('/server',function(req,res){
        data=req.query;
    });

    
}

function getData(data){
    let bar=Object.keys(data)[0];
    let index;
    let startIndex=0;
    coor=new Array;
    while(bar.indexOf('},{')>-1){
        startIndex=0;
        index=bar.indexOf('},{');
        coor.push(bar.slice(startIndex,index+1));
        //console.log(bar.slice(startIndex,index+1));
        startIndex=index+2;
        bar=bar.slice(startIndex,bar.length);
        if(bar.indexOf('},{') <=-1){
            coor.push(bar.slice(0,index+1));
            //console.log(bar.slice(0,index+1));
        }

    }

    /*for (let key in coor){
        console.log(coor[key]);
    }
    console.log(coor);*/


    

    
    return data;
}