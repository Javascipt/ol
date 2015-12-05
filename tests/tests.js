var request = require('request');
var assert = require('assert');
var path = require('path');
var ol = require('../app')({
    routes : path.resolve(__dirname, 'routes.json'),
    controllers : path.resolve(__dirname, 'controllers')
});

ol.listen(1234, function () {
    console.log("Listening at port %s", 1234);
});


describe('Successfull request to route /' , function () {
    var code, body;
    
    beforeEach(function(done) {
        request('http://localhost:1234/', function (error, response, responseBody) {
            code = response.statusCode;
            body = responseBody;
            done();
        })     
    }); 
    
    it('should retourn a { foo : "bar" } object with a 200 status', function () {
        assert.equal(code, 200);
        assert.equal(body, '{"foo":"bar"}');
    });
});

describe('Page not found' , function () {
    var code, body;
    
    beforeEach(function(done) {
        request('http://localhost:1234/test123', function (error, response, responseBody) {
            code = response.statusCode;
            body = responseBody;
            done();
        })     
    }); 
    
    it('should receive a 404 request (page not found)', function () {
        assert.equal(code, 404);
        assert.equal(body, 'Cannot GET /test123\n');
    });
});

describe('Testing route with :param' , function () {
    var code, body;
    
    beforeEach(function(done) {
        request('http://localhost:1234/test/600', function (error, response, responseBody) {
            code = response.statusCode;
            body = responseBody;
            done();
        })     
    }); 
    
    it('should retourn a { id : 600 } object with a 200 status', function () {
        assert.equal(code, 200);
        assert.equal(body, '{"id":"600"}');
    });
});


describe('Page not found route without :param' , function () {
    var code, body;
    
    beforeEach(function(done) {
        request('http://localhost:1234/test', function (error, response, responseBody) {
            code = response.statusCode;
            body = responseBody;
            done();
        })     
    }); 
    
    it('should receive a 404 request (page not found)', function () {
        assert.equal(code, 404);
        assert.equal(body, 'Cannot GET /test\n');
    });
});