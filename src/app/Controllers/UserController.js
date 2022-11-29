const User = require('../Models/User')
const { loopToObeject, mongooseToObject } = require('../../utils/mongoose')


class UserController {

    // [GET] /user/:slug...
    detail(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .then(x => {
                res.render('user/detail', { x: mongooseToObject(x) })
            })
            .catch(next);
    }

    // [GET] /user/create
    create(req, res, next) {
        res.render('user/create')
    }

    // [POST] /user/store
    store(req, res, next) {
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect(`/user/${req.body.slug}`));
    }

    // [GET] /user/:id/edit
    edit(req, res, next){
        res.json("fuck")
    }
}

module.exports = new UserController;