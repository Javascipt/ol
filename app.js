var express = require('express');
var path = require('path');
var filepath = require('./modules/filepath');
var requirejson = require('./modules/require-json');

module.exports = function (options) {
    var app = express();
    
    if(typeof options == "string") {
        options = requirejson(filepath(options));
    }
    
    var routes = requirejson(filepath(options.routes));
    var controllers = {};
    routes.forEach(function (route) {
        if(!controllers[route.controller]) {
            controllers[route.controller] = require(path.resolve(options.controllers, route.controller))
        }
        app[route.method.toLowerCase()](route.route, controllers[route.controller][route.action]);
    });
    
    return app;
}