const mongoose = require('mongoose');

//Define the MongoDb connection URL
const mongoURL =  'mongodb://localhost:27017/hotels' // name of Data that we want to address

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