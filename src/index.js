const express =  require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes/index.route');
const methodOverride = require('method-override')
const sortMiddleware = require('./app/Middlewares/sortMiddleware.js');
const db = require('./config/database/index');
db.Connect();


// add Middleware for POST method (req .body)
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'))
app.use(sortMiddleware);


app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars({
    helpers: {
        sum: function(a, b){return a + b},
        sortable: function(field, sort){
                const icons = {
                    default: 'bi bi-sort-alpha-down',
                    asc: 'bi bi-sort-alpha-up',
                    desc: 'bi bi-sort-alpha-down'
                }
                
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }
                
                const icon = icons[sort.type];
                const type = types[sort.type]
         
          return `<a href="?_sort&column=${field}&type=${type}"><span><i class="${icon}"></i></span></a>`;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route(app);


app.listen(3000)

