var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('YES!');
});

mongoose.connect('mongodb://localhost/fooldb');

var movieSchema = new mongoose.Schema({
    title: { type: String },
    rating: String,
    releaseYear: Number,
    hasCreditCookie: Boolean
});

movieSchema.methods.findSameRated = function(callback){
    return this.model('Movie').find({ rating: this.rating }, callback);
};



var Movie = mongoose.model('Movie', movieSchema);

var mov = new Movie({
    title: 'Jason X',
    rating: '5',
    releaseYear: '2015',
    hasCreditCookie: true
});

mov.save();

mov.findSameRated(function(err, result){
    console.log(result);
});

// Movie.findOne({title: 'Thor'}, function(err, result){
//     if (err) return console.error(err);
//     console.dir(result._doc);
// });
//
//
// Movie.find({  }, function(err, result){
//     console.dir(result[0]._doc)
// });


/*
Последовательность действий:
1) подключаем модуль Mongoose
2) передаем в переменную db свойство connection монгуса
3) подключаемся к БД
4) создаем схему/модель (структуру таблицы БД) - класс
5) создаем экземпляры класса (схемы)
6) сохраняем данные в БД
 */


/*

Model.findById( id, callback );
Model.update( whereObj, {$set: { props }}, callback );
Model.findByIdAndUpdate(id, {$set: {props}}, callback);





 */