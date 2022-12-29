
/*Q1. What is Express.js?
Ans: Express is a node js web application framework that provides broad features for building web and mobile applications. 
It is used to build a single page, multipage, and hybrid web application. 
It's a layer built on the top of the Node js that helps manage servers and routes.*/


// Q2 .Create localhost server using express.//



const express = require('express')
const app = express()
PORT = 8007


app.get('/',function(req,res){

console.log("heloooo there")
})

app.listen(PORT,function(res,req){

console.log("server is running....",PORT)

})