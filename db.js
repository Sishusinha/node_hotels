const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDb connection URL
const mongoURL =  process.env.DB_URL// name of Data that we want to address

//setup mongoDb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})


//Get the default connection
//Mongoose maintain a default connection object representing Mongodb connection.
const db=mongoose.connection;


//event listener
db.on('connected', ()=>{
    console.log('Connected to Mongodb server');
});

db.on('error', (err)=>{
    console.log('MongoDb connection error', err);
});

db.on('disconnected', ()=>{
    console.log('Disconnected to Mongodb server');
});


module.exports = db;