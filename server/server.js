const express = require('express');
const bodyParser = require('body-parser');

// Setting up express app
const app = express();

app.use( express.static('server/public') );
app.use( bodyParser.urlencoded( {extended: true} ) );

// routes here



//server start up
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`);
    
});