const newsRouter = require('./news.route')
const sitesRouter = require('./site.route')
const route = (app) => {
    app.use('/news', newsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;