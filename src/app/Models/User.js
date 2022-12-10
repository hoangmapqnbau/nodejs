const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoDelete = require('mongoose-delete');

const User = new Schema({
    name:  {type: String, maxlength: 255 },
    description: String,
    image: String,
    slug: String,
    videoId: String,    
}, {
    timestamps: true,
});

User.plugin(mongoDelete, {overrideMethods: true, deletedAt: true});

module.exports = mongoose.model('User', User);