const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');
 
const { List } = require('./db/models/list.model');
const { Task } = require('./db/models/task.model');

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});


app.get('/lists',(req,res)=>{
    // get array of all lists in the database
    List.find({}).then((lists) =>{
        res.send(lists);
    }).catch((e)=>{
        res.send(e);
    });
 });

 app.get('/lists/:id',(req,res)=>{
     List.findOne({_id:req.params.id}).then((list)=>{
         res.send(list);
     })
 })

 app.post('/lists',(req,res)=>{
    // create new list and return new list to the user
    let title = req.body.title;

    let newList = new List({
        title,
        tasks:[]
    });
    newList.save().then((listDoc)=>{
        res.send(listDoc);
    });
 });

 app.patch('/lists/:id',(req,res)=>{
    //update specified list and return updated list to the user
    List.findOneAndUpdate({_id:req.params.id},{
        $set: req.body
    }).then((listDoc)=>{
        res.send(listDoc);
    });
 });

 app.delete('/lists/:id',(req,res)=>{
    // delete list with specified id  and return lists array to the user
    List.findOneAndRemove({_id:req.params.id}).then((removedDoc)=>{
        res.send(removedDoc);
    });
 });

 app.get('/lists/:listId/tasks',(req,res)=>{
     Task.find({
         _listId:req.params.listId
     }).then((tasks)=>{
         res.send(tasks);
     });
 });

 app.post('/lists/:listId/tasks',(req,res)=>{
    let title = req.body.title
    let newTask = new Task({
        title,
        _listId:req.params.listId
    });
    newTask.save().then((newTaskDoc)=>{
        res.send(newTaskDoc);
    });   
 });
 app.patch('/lists/:listId/tasks/:taskId', (req,res)=>{
     Task.findOneAndUpdate({
         _id: req.params.taskId,
         _listId: req.params.listId
     },{
         $set: req.body
       }
     ).then(()=>{
         res.sendStatus(200);
     })
 });

 app.delete('/lists/:listId/tasks/:taskId', (req,res)=>{
     console.log(req.params.taskId);
     console.log(req.params.listId);
     Task.findOneAndRemove({
         _id: req.params.taskId,
         _listId: req.params.listId
     }).then((removedTaskDoc)=>{
         res.send(removedTaskDoc);
         console.log(removedTaskDoc);
     })
 });
 


app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})