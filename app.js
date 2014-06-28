
/**
 * Module dependencies.
 */

var express = require('express'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    path = require('path'),
    routes = require('./app/routes/index'),
    cons = require('consolidate');

var app = express();

app.engine('html', cons.swig);  

app.set('views', __dirname + '/public');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
//app.get('/', routes.index);
//app.get('/test', routes.test);

app.listen(process.env.PORT || 9001);

