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
           User.findById(req.params.id)
           .then((x) => {res.render('user/modify', {x: mongooseToObject(x)}); })
        }

        // [PUT] /user/:id 
        save(req, res, next){
            console.log(req.body);
            User.updateOne({ _id: req.params.id}, req.body)
            .then( () => res.redirect('/me/stored'))
            .catch(next)
        }

}

module.exports = new UserController;