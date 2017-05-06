const mongoose = require('mongoose');
const userSchema = require('../schema/user');

module.exports = mongoose.model('User', userSchema);
