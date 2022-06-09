//starting the express variables
const express = require('express');
const app = express();

//init cors 
const cors = require('cors');
app.use(cors({optionsSuccessStatus:200}));

app.use(express.static('public'));

//load index page
app.get('/',(req,res)=>{
  res.sendfile(__dirname +'/view/index.html');
});




var listener = app.listen(3000, () => {
  console.log('Listenig on port ' + listener.address().port);
});