module.exports = Message;

function Message(connection){
    var that = this;
    var mongoose = connection;
    console.dir(connection);
    console.log('message scheme included !');


    var messageSchema = new mongoose.Schema({
        user: String,
        text: String,
        time: String
    });

    messageSchema.statics.getLastMessages = function(callback){
        return this.find({ }, callback);
    };

    // Tables / Models
    var Message = mongoose.model('Message', messageSchema);

    this.getRecentMessages = function(callback){
        return Message.getLastMessages(callback);
    };

    this.saveMessage = function(u, t, callback){
        Message.create({
            user: u,
            text: t,
            time: Date.now()
        }, callback);
    };


    this.clearMessages = function(){
        Message.remove({  }, function(err){
            if (err) throw new Error('NOT DELETED!');
            else console.log('SHOULD BE DELETED');
        });

    };

}
