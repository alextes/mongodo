const mongoose = require('mongoose');
const lessonSchema = require('../schema/lesson');

module.exports = mongoose.model('Lesson', lessonSchema);
