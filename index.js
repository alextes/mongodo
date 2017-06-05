const mongoose = require('mongoose');
const User = require('./model/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongodo');
const db = mongoose.connection;

function changeGrade() {
  return User
    .findById('593561d9b9a50285e0303adb')
    .populate('friends')
    .exec()
    .then((alex) => {
      console.log(alex);
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
