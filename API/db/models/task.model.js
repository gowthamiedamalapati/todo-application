const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:String,
    _listId:{
        type: mongoose.Types.ObjectId,
        require: true
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports={ 
    Task 
};