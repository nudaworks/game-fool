module.exports = Connection;

const config = require('./database.config.js');

function Connection(){
    console.log('database included!');

    var mongoose = require('mongoose');
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected to db! ');
    });

    this.connect = function(){
        return mongoose.connect(config.mongoHost + config.dbName); //mongodb://localhost/fooldb
    };

    this.stream = mongoose;
}
