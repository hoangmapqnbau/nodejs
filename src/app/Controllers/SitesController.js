const User = require('../Models/User')

class SitesController {

    // [GET] /home
    home(req, res) {
        User.find({}, function(error, users) {
            if(!error) {res.json(users); return;}
            res.status(500).json({ error: 'message' });
        })
    }

    // [GET] /orthers...

    orther(req, res) {
        res.send('orther')
    }

}

module.exports = new SitesController;