class SitesController {

    // [GET] /home
    home(req, res) {
        res.render('home')
    }

    // [GET] /orthers...

    orther(req, res) {
        res.send('orther')
    }

}

module.exports = new SitesController;