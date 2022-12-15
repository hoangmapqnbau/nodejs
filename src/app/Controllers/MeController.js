const User = require('../Models/User');
const { loopToObeject, mongooseToObject } = require('../../utils/mongoose');


class MeController {
    // [GET] /me 
    show(req, res, next) {
        let userFind =  User.find({});
        Promise.all([userFind.sortable(req), User.countDocumentsDeleted()])
        .then(([users, numberOfDeleted]) => {
            res.render('user/me',{
                numberOfDeleted,
                users: loopToObeject(users),
            })
        })
        .catch(next)
    }

    // [GET /me/trash

    trash(req, res, next){
        User.findDeleted({})
        .then((users) => {
            res.render('user/trash',{
                users: loopToObeject(users),
            })
        })
        .catch(next);
    }

}

module.exports = new MeController;