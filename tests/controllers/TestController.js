module.exports = {
    foo : function (req, res) {
        res.json({
           foo : "bar" 
        });
    },
    bar : function (req, res) {
        res.json(req.params);
    },
    anotherAction : function (req, res) {
        
    }
}