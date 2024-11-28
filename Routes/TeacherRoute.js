const express = require("express")
const router = express.Router()
const TeacherData = require('../Models/TeacherData')

router.get('/teacherdata', async(req, res)=>{
    try{
        const data = await TeacherData.find();
       
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})

router.post('/teacherdata', async(req, res)=>{
    try{
        const data = req.body;
        const newTeacher = new TeacherData(data);
        const response = await newTeacher.save();
        console.log("data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})

module.exports = router 