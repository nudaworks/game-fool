const Database = require('./db');
const db = new Database();

const Mail = require('./mail');
const email = new Mail();

db.connect();
db.userExists();



var msg = {
    text: 'I hope this works',
    from: 'servak-test@yandex.ru',
    to: 'recepient-test@yandex.ru',
    cc: 'nuda.light@gmail.com',
    subject: 'Hey-hey test'
};

// email.send(msg);

















// const webSocket = new require('ws');
// const db = new Database();
//
// const connections = {};
// const wss = new webSocket.Server({
//     port: 9000
// });
//
// wss.on('connection', function(ws){
//     var id = Math.random();
//     connections[id] = ws;
//     console.log('new connection: ' + id);
//
//     // create new user
//     db.addUser('un:' + id);
//
//
//     // send userId for communjication
//     connections[id].send(JSON.stringify({
//         action: 'gotUserId',
//         userId: id
//     }));
//
//     ws.on('message', function(message){
//         message = JSON.parse(message);
//         console.log('received message: ' + message.text);
//         // db.clearMessages();
//
//         db.saveMessage(message.user, message.text, function(err, result){
//             console.log('add message to db: ' + result);
//         });
//
//         db.getLastMessages(function(err, result){
//            console.log('all messages: ', JSON.stringify(result));
//         });
//
//         // send this new message to every connected user
//         for (var key in connections){
//             var data = JSON.stringify({
//                 action: 'message',
//                 text: message.text,
//                 time: Date.now()
//             });
//             connections[key].send(data);
//         }
//     });
//
//     ws.on('close', function(){
//         console.log('connection closed: ' + id);
//     });
// });
