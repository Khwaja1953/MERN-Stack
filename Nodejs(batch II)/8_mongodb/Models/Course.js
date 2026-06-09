const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    duration: {type: String, required: true},
    fee: {type: Number, required: true},
    subjects: [
{

    sub1: {type: String},
    sub2: {type: String}
}
    ]
},{
    timestamps: true
});

const Course = mongoose.model("Course",courseSchema);
module.exports = Course