const mongoose = require('mongoose');
const User = require('./model/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/arnas');
const db = mongoose.connection;
const userID = '58efe28fba7be2a8985a917f';

function changeGrade() {
  return User.findById(userID).exec()
    .then((alex) => {
      console.log(alex);
      // const geology = alex.lessons.find(lesson => lesson.id === lessonID);
      return alex.save();
    });
}

function onConnect() {
  changeGrade()
    .then(() => { db.close(); })
    .catch(console.error);
}

db.on('error', console.error.bind('Connection error:'));
db.on('open', onConnect);
