const newsRouter = require('./news.route')
const sitesRouter = require('./site.route')
const usersRouter = require('./user.route')
const meRouter = require('./me.route')

const route = (app) => {
    app.use('/me', meRouter)
    app.use('/user', usersRouter);
    app.use('/news', newsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;