const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3000; 
const personRoutes = require('./routes/personRoutes')
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
app.use('/person',personRoutes);



app.listen(PORT,()=>{
  console.log('listening on port 3000');
});
