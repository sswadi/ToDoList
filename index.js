const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Task = require('./models/todo');

const app = express();

//middleware, app.use is used for middleware
app.use(express.urlencoded());

//setting up view/ejs template
app.set('view engine','ejs');
app.set('views', './views');

//including static files to be fetched
app.use(express.static('assets'));


app.get('/', function(req,res){

    Task.find({}, function(err, tasks ){
        if(err){
            console.log('Error in fetching tasks from DB');
            return;
        }

        return res.render('home',{
            task_list: tasks
        });
    });
});


//when a user enters the task it gets sent to the server to be saved in the db
app.post('/add-task', function(req,res){
   
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
       
    },function(err, newTask){
        if(err){
            console.log('error in creating a task');
            return;
        }

        // console.log('******', newTask);
        return res.redirect('back');
    });
});

//while deleting a task
app.get('/delete-task', function(req,res){


    // console.log('req **',req.query);
    let deleteIds = JSON.parse(req.query.deleteIds);
    for(let i=0; i<deleteIds.length; i++){
        Task.findByIdAndDelete(deleteIds[i], function(err){
            if(err){
                console.log("error in deleting the data from db",err);
                return;
            }
        });
    }
    return  res.redirect('back');
});


//verifying if the connection is succcessful or not
app.listen(port, function(err){
    if(err){
        console.log(` Failed to connect to server! `);
    }

    console.log(`Server up and running at port: ${port}`);

});