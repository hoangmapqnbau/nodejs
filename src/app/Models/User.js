const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name:  {type: String, maxlength: 255 },
    description: String,
    image: String,
    slug: String,
    videoId: String,
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);