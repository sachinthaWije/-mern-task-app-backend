const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const taskSchema=new Schema({
    name: {
        type: String,
        required: [true,"Please add a task"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    }
},{timestamps:true});

const Task =mongoose.model("Task",taskSchema);
module.exports=Task;