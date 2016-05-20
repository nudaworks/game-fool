'use strict';

// var db = require('./db');
//
// function User(name){
//     this.name = name;
// }
//
// User.prototype.hello = function(who){
//     console.log(db.getPhrase('Hello')+ who.name)
// };
//
// module.exports = User;
//
//
//



















const webSocket = new require('ws');

const clients = {};

// WebSocket-сервер на порту 8081
const wss = new webSocket.Server({
    port: 9000
});
wss.on('connection', function(ws) {

    let id = Math.random();
    clients[id] = ws;
    console.log("новое соединение " + id);

    ws.on('message', function(message) { 
        console.log('получено сообщение ' + message);

        for (let key in clients) {
            clients[key].send(JSON.stringify({
                action: 'message',
                user: key,
                text: message,
                time: new Date().toString()
            }));
        }
    });

    ws.on('close', function() {
        console.log('соединение закрыто ' + id);
        delete clients[id];
    });

});

// 1. отдельный протокл ws://
// 2. четыре колбэка PEN / MESSAGE / ERROR / CLOSE
// 3. метод send для отправки сообщений / файлов
//
//
//
// const mongoClient = require('mongodb').MongoClient;
// const format = require('util').format;
//
// var usersdb, messagesdb;
//
// mongoClient.connect('mongodb://127.0.0.1:27017', function(err, db){
//     if (err) { throw err; }
//
//     usersdb = db.collection('users');
//     messagesdb = db.collection('chat');
// });
//
// function isUserExists(name, callback){
//     usersdb.find({ login:name }).toArray(function(err, result){
//         callback(results.length !== 0);
//     });
// }
//
// function userCheck(name, password, callback){
//     isUserExists(name, function(isExist){
//         if (isExist){
//             usersdb.find({ login:name }).toArray(function(err, result){
//                 callback(result.pop().password === password)
//             });
//         } else {
//             usersdb.insert(
//                 { login:name, password:password },
//                 { w: 1 },
//                 function(err){
//                     if (err) { throw err }
//                 }
//             );
//             callback(true);
//         }
//     });
// }












db.test();




var app = express();


app.engine('ejs', require('ejs-locals'));


app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(app.router);
app.use(express.logger('dev'));

app.get('/', function(req, res, next){
    console.log(__dirname + '/views/auth.ejs');
    res.render('auth.ejs', { name: 'John'});
});




http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});




