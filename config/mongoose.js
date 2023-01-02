// requiring module to connect to db 
const mongoose = require('mongoose');

// connect to db 
mongoose.connect('mongodb://localhost/todolist_db');

// acquire the connection to verify if the connection is successful to db 
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console,'error connecting to db'));

//up and running
db.once('open', function(){
    console.log('successfully connected to db!');
});

