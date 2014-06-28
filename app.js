
/**
 * Module dependencies.
 */

var express = require('express'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    path = require('path'),
    cons = require('consolidate');

var routes = require('./app/config/routes');

var app = express();

app.engine('html', cons.swig);  

app.set('views', __dirname + '/public');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

routes.configRoutes(app);

app.listen(process.env.PORT || 9001);

