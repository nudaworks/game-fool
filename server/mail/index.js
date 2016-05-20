module.exports = Mail;

const email = require('emailjs/email');
const config = require('./config.js');

function Mail(){
    const server = email.server.connect({
        user: config.serverUser,
        password: config.serverPassword,
        host: config.serverHost,
        port: config.serverPort,
        ssl: config.serverSsl
    });

    this.send = function(msg, callback){
        server.send(msg, callback);
    };
}
