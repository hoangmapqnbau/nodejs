const User = require('../Models/User');
const { loopToObeject, mongooseToObject } = require('../../utils/mongoose');


class MeController {
    // [GET] /me 
    show(req, res, next) {
        User.find({})
            .then((users) => {
                res.render('user/me', {
                    users: loopToObeject(users),
                })
            })
            .catch(next);
    }

}

module.exports = new MeController;