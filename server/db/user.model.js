module.exports = User;

function User(connection){
    var that = this;
    var mongoose = connection;

    console.log('user scheme included !');

    var userSchema = new mongoose.Schema({
        email: String,
        password: String
    });

    var User = mongoose.model('User', userSchema);

    this.add = function(name, callback){
        User.create({
            name: 'un:' + Math.random()
        }, callback);
    };

    this.exists = function(userEmail, callback){
        User.find({

        }, callback);


        console.log('check if exists');
    };

    this.login = function(){

    };

    this.logout = function(){

    };


}


/*
1. проверить, есть ли пользователь в БД с такием емаилом
2. если есть, то проверить правильный ли пароль
2.1. если пароль правильный -> авторизовать
2.2. если не правильный -> передать сообщение о неправильном пароле
3. если такого емаила в базе нет -> добавить нового пользователя
4. выслать ему емаил на почту с кодом авторизации
5. активировать его учетную запись по ссылке
6. авторизовать


 */



















