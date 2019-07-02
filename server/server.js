const express = require('express');
const bodyParser = require('body-parser');

// Setting up express app
const app = express();

app.use( express.static('server/public') );
app.use( bodyParser.urlencoded( {extended: true} ) );

// routes here

// establish /music route
app.get('/music', (req, res) => {
    console.log('in GET /music');
    res.send();
});

//server start up
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`);
    
});