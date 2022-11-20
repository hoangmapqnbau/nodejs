class NewsController {
   // [GET] /news
    index(req, res){
        res.render('news')
    };

    // [GET /news/detail
    detail(req, res){
        res.send('news 1s')
    }
}

module.exports = new NewsController;