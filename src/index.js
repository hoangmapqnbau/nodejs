const express =  require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes/index.route');

const db = require('./config/database/index');
db.Connect();


// add Middleware for POST method (req .body)
app.use(express.urlencoded());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route(app);


app.listen(3000)

