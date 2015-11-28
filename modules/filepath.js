var fs = require('fs');

module.exports = function (path) {
    if(fs.statSync(path).isFile() || fs.statSync(path).isDirectory()) {
        return path;
    } else {
        var dir = __dirname.split('node_modules').shift(); 
        return path.resolve(dir, path);
    }
}