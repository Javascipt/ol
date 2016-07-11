Let's make it easy and simple !
===============================

A simple http server built on top of express. This one makes it easy to create Rest APIs.

![ol](https://travis-ci.org/Javascipt/ol.svg)

## Installation :

```bash
  $ npm install ol
```

## How does it work ?

After requiring the module, you just need to specify the routes path and the controllers directory, Assuming you have this project structure:

```
.
├── app.js
├── routes.json
└── controllers
    └── TestController
```

To specify the path to routes file and controllers directory :

``` javascript
    var Ol = require('ol');
    var ol = Ol({
        routes : "./routes.json",
        controllers : "/ontrollers"
    });
```

The ol object is actually the express app, you just need to make it listen on a specific port :

``` javascript
    ol.listen('3000', function () {
        console.log(" Listening ... ! ");
    });
```

You also can pass the path to a json file to the `Ol` constructor. This file should contain the path to routes.json and the controllers directory.

params.json :
``` javascript
    {
        "routes" : "./routes.json",
        "controllers" : "/ontrollers"
    }
```

app.js : 

``` javascript
    var Ol = require('ol');
    var ol = Ol('./params.json');
```

Example of routes.json:

``` javascript
    [
        {
            "method" : "GET",
            "route" : "/",
            "controller" : "TestController",
            "action" : "sayHi"
        },
        {
            "method" : "POST",
            "route" : "/testpost",
            "controller" : "TestController",
            "action" : "anotherAction"
        }
    ]
```

Example of a controller (TestController)

``` javascript
    module.exports = {
        sayHi : function (req, res) {
            res.json({
                foo : bar
            });
        },
        anotherAction : function (req, res) {
            res.send(req.params);
        }
    }
```