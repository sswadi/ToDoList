const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function(err){
    if(err){
        console.log(' Failed to connect to server! ');
    }

    console.log('Server up and running at port: ', port);
});