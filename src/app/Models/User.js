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

User.query.sortable = function(req){
    if(req.query.hasOwnProperty('_sort')){
        let isValidType = ['desc', 'asc'].includes(req.query.type);
       return this.sort({
    
            [req.query.column]: isValidType ? req.query.type : "asc"
        })
    }  
        return this
    
}

User.plugin(mongoDelete, {overrideMethods: true, deletedAt: true});

module.exports = mongoose.model('User', User);