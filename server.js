const express = require('express');
const app = express();

const db = require('./db')
const StudentData= require('./Models/StudentData')
const bodyParser = require('body-parser')
const TeacherData= require('./Models/TeacherData')

app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send('hello world 123')
})

//student data
const StudentRoutes = require('./Routes/StudentRoute')
app.use('/',StudentRoutes)

//teacher data 
const TeacherRoutes = require('./Routes/TeacherRoute')
app.use('/',TeacherRoutes)


app.listen( 5002 , () =>{
    console. log('server run at 5000')
})