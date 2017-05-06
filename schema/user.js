const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

module.exports = new Schema({
  name: { type: String, required: true },
  lessons: [{
    grade: { type: Number, required: true },
    lesson: {
      ref: 'Lesson',
      type: ObjectId,
    },
  }],
});
