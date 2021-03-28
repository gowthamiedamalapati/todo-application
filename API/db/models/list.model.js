const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title:String,
    // tasks:[]
})

const List = mongoose.model('List', ListSchema);

module.exports={ 
    List 
};