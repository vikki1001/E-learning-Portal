const mongoose = require("mongoose");
const { validator } = require('validator');




const studentSchema = new mongoose.Schema({
    firstname :{
        type:String,
        required:true,
        minlength:3
    },
    emailid :{
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email id");
            }
        }
    },
    mobilenumber :{
        type:Number,
        min:10,
        // max:10,
        required:true,
        unique:true
    },
    gender:{
        type:Number,
        min:1,
        max:2,
    },
    address:{
        type:String,
        required:true
    }
})

//  we will create a new collection

const Students = new mongoose.model('studentsmsts', studentSchema);

module.exports = Students;
