const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const route = require('./routes');
const db = require('./config/db/index');
const app = express();
const port = 8080;

app.engine('handlebars', handlebars());
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
db.connect();
route(app);
app.listen(port);

