
const express = require("express");
const app = express();

app.get('',(req,resp)=>{
resp.send(`Hi`)
});

app.get('/urlGetData',(req,resp)=>{
    console.log("Hey!",req.query.name)
    resp.send(`
    <button type="button" class="btn btn-info"><a href='/About'>About</a></button>
    <button type="button" class="btn btn-info"><a href='/Help'>Help</a></button><br><br>
    <input class="form-control" type="text" value='${req.query.name}'><br><br>
    <input class="form-control" type="email"><br><br>
    <input class="form-control" type="password"><br><br>
    <button type="button" class="btn btn-info">Submit</button>
    `);
});

app.get('/About',(req,resp)=>{
    resp.send(`
    <button type="button" class="btn btn-info"><a href='/'>Home</a></button>
    <button type="button" class="btn btn-info"><a href='/Help'>Help</a></button><br><br>
    "About page"
    `);
});

app.get('/Help',(req,resp)=>{
    resp.send(`
    <button type="button" class="btn btn-info"><a href='/'>Home</a></button>
    <button type="button" class="btn btn-info"><a href='/About'>About</a></button>
    <br><br>
    [{name:'Sanjida',email:'sanjida@gmail.com'},{name:'Maahi',email:'maahi@gmail.com'}]
    `);
    
});

app.listen(5005);