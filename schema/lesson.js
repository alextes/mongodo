const mongoose = require('mongoose');

const Schema = mongoose.Schema;
module.exports = new Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
});
