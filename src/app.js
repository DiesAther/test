var NODE_ENV = process.env.NODE_ENV || 'development';
global.DEBUG = NODE_ENV == 'development';

const winston = require('winston');
var logLevel = DEBUG ? 'silly' : 'warn';
global.logger = new (winston.Logger)({
    level: logLevel,
    transports: [
        new (winston.transports.Console)()
    ]
});

global.BASEDIR = __dirname;
var config = require(BASEDIR + `/config/${NODE_ENV}.js`);
global.CONFIG = config;

const Koa = require('koa');
const render = require('koa-ejs');
const convert = require('koa-convert');
const KoaStatic = require('koa-static-plus');
const KoaCompose = require('koa-compose');
const KoaBodyParser = require('koa-bodyparser');
const Koaonerror = require('koa-onerror');
const co = require('co');
const path = require('path');
var routes = require('./routes');

var app = new Koa();
app.use(KoaBodyParser());
Koaonerror(app);

app.use(co.wrap(function *(ctx, next){
    if (ctx.request.method == 'POST'){
        logger.info(`POST Body: ${JSON.stringify(ctx.request.body)}`);
    }
    var start = new Date();
    yield next();
    var ms = new Date() - start;
    logger.info(`${ctx.request.method} ${ctx.request.url} ${ms}ms`);
}));

app.use(convert(KoaStatic(path.join(__dirname, '../static'), {
    pathPrefix: '/static'
})));
var options = {
    root: path.join(__dirname, '../views'),
    layout: 'template',
    viewExt: 'html',
    cache: !DEBUG,
    debug: DEBUG
};
render(app, options);
app.context.render = co.wrap(app.context.render);

app.use(KoaCompose(routes));

const port = parseInt(config.port || '3000');

app.listen(port, function(err){
    if (err){
        logger.info('Start Server Error: %s', err);
        exit(0);
    }
    logger.info(`Server Started! listen address: http://localhost:${config.port}`)
});