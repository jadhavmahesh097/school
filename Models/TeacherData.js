const mongoose = require('mongoose')



//Schema 


const teacherSchema = new mongoose.Schema({
    tname : {
       type: String,
    //    required: true
    },
    sal : {
        type: Number
    },
    id :{
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    address: {
        type: String,
        // required: true
    }
})

const Teacher = mongoose.model('TeacherData', teacherSchema)

module.exports = Teacher;
