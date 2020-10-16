const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const RESUME_PATH = path.join('/uploads/user/avatars');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    resume: {
        type: String
    }
},{
    timestamps: true
})

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '..', RESUME_PATH));
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now());
    }
})

// static functions
userSchema.statics.uploadResume = multer({storage: storage}).single('resume');
userSchema.statics.resumePath = RESUME_PATH;

const User = mongoose.model('User', userSchema);

module.exports = User;