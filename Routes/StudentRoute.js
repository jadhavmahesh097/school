const express = require("express")
const router = express.Router()
const StudentData = require('../Models/StudentData')

router.get('/studentdata', async(req, res)=>{
    try{
        const data = await StudentData.find();
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})

router.post('/studentdata', async(req, res)=>{
    try{
        const data = req.body;
        const newStudent = new StudentData(data);
        const response = await newStudent.save();
        console.log("data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})

module.exports = router 