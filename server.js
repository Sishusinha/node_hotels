const express = require("express");
const app = express();
const db = require("./db");
const personRoutes = require('./routes/personRoutes')


const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
app.use('/person',personRoutes);


 // Done with changes
app.listen(3000);
