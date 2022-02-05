const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const uploadSchema = new mongoose.Schema({
    filename : {
        type : String,
        unique : true,
        required: true
    },
    contentType : {
        type: String,
        required : true
    },
    imageBase64 : {
        type : String,
        required: true
    }
})
var UploadModel= mongoose.model('uploads', uploadSchema);
module.exports = UploadModel 