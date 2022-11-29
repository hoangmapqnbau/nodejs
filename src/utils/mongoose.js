module.exports = { 
    loopToObeject: function (mongoArr){
        return mongoArr.map(x => x.toObject());
    },
    mongooseToObject: function (mongo){
        return mongo ? mongo.toObject() : mongo;
    }
};