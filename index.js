//starting the express variables
const express = require('express');
const app = express();

//init cors 
const cors = require('cors');
app.use(cors({optionsSuccessStatus:200}));

app.use(express.static('public'));

//load index page
app.get('/',(req,res)=>{
  res.sendFile(__dirname +'/view/index.html');
});

//request header parse
app.get('/api/whoami',(req,res)=>{
  res.json({
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers["accept-language"],
    software: req.headers['user-agent']
  });
});

var listener = app.listen(3000, () => {
  console.log('Listenig on port ' + listener.address().port);
});