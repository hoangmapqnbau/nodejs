const express =  require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes/index.route');





app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

// Routes init
route(app);


app.listen(3000)

