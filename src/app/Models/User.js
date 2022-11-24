const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name:  {type: String, maxlength: 255 },
    description: String,
    image: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);