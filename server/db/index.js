module.exports = Database;

const Connection = require('./database.connection.js');
const User = require('./user.model.js');
// const Message = require('./message.model.js');



function Database(){ 
    var connection = new Connection();
    var user = new User(connection.stream);
    // var message = new Message(connection);

    // methods
    this.connect = connection.connect;
    // this.addUser = user.add;
    // this.saveMessage = message.saveMessage;
    // this.getRecentMessages = message.getRecentMessages;
    this.userExists = user.exists;
    // this.removeAllMessages = message.clearAllMessages;


}