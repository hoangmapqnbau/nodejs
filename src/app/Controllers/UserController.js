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
            User.updateOne({ _id: req.params.id}, req.body)
            .then( () => res.redirect('/me/stored'))
            .catch(next)
        }

        // [DELETE] /user/:id
        remove(req, res, next){
            User.delete({ _id: req.params.id})
            .then(()  => res.redirect('back'))
            .catch(next);
        }

        // [PATCH] /user/:id/restore
        restore(req, res, next){
            User.restore({ _id: req.params.id})
            .then(()  => res.redirect('back'))
            .catch(next);
        }

        // [DELETE hard] /user/:id/delete
        delete(req, res, next){
            User.deleteOne({ _id: req.params.id})
            .then(()  => res.redirect('back'))
            .catch(next);
        }

        // [POST] /user/handle-form-actions
    handleFormAction(req, res, next) {
        switch (req.body.actions) {
            case "delete":
                User.delete({ _id: { $in: req.body.userIds } })
                    .then(() => res.redirect("back"))
                    .catch(next)
                break;
            default:
                res.json({ message: "Actions is not defined" })
                break;
        }
    }
    
    // [POST] /user/handle-form-actions-trash  
    handleFormActionTrash(req, res, next) {
        switch (req.body.actions) {
            case "restore":
                User.restore({ _id: { $in: req.body.userIds } })
                    .then(() => res.redirect("back"))
                    .catch(next)
                break;
            case "destroy":
                User.deleteMany({ _id: { $in: req.body.userIds} })
                .then(() => res.redirect("back"))
                .catch(next)
                break;
            default:
                res.json({ message: "Actions is not defined" });
                break
        }
    }
}
module.exports = new UserController;