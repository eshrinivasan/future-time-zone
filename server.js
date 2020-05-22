//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/future-time-zone'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/future-time-zone/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8082, function(){
    console.log("server up on port 8082");
});