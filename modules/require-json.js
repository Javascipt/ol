var fs = require('fs');

module.exports = function (path) {
    var str = fs.readFileSync(path);
    return JSON.parse(str);
}