const User = require('../Models/User')
const {loopToObeject , mongooseToObject} = require('../../utils/mongoose')


class SitesController {

    // [GET] /
    home(req, res, next) {
        User.find({})
            .then((users) => {
                res.render('home', {
                  users: loopToObeject(users)
                })
            })
            .catch(next);

    }
    // [GET] /orthers...

    orther(req, res) {
        res.send('orther')
    }

}

module.exports = new SitesController;