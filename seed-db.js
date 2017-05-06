const mongoose = require('mongoose');
const User = require('./model/user');
const Lesson = require('./model/lesson');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongodo');
const db = mongoose.connection;


function seed() {
  const geology = new Lesson({ name: 'geology', grade: 5 });
  const physics = new Lesson({ name: 'physics', grade: 8 });
  return Promise.all([geology.save(), physics.save()])
    .then((lessons) => {
      const alex = new User({
        name: 'alex',
        lessons: [{
          grade: 4,
          lesson: lessons[0]._id,
        }, {
          grade: 8,
          lesson: lessons[1]._id,
        }],
      });
      return alex.save();
    })
    .then(() => { db.close(); });
}

db.on('error', console.error.bind('Connection error:'));
db.on('open', () => (
  seed()
    .then(() => { console.log('Successfully seeded'); })
    .catch(() => { console.error('Failed to seed DB'); })
));
