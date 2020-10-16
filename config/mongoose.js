const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eureka_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, ":: Error Connecting To MongoDB ::"));


db.once('open', function(){
    console.log('Connected To Dataabase :: MongoDB');
});

module.exports = db;