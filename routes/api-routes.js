
var db = require("../models");

module.exports = function (app) {
    app.get("/products", function (req, res) {
        db.Product.findAll({})
            .then((dbPost) => {
                res.json(dbPost);
            });
    });

    app.post("/api/products/", function (req, res) {
        console.log(req.body);
        var reqBod = req.body;
        reqBod.forEach(function (element) {
            db.Product.update(
                {
                    stock_quantity: element.stock_quantity
                }, {
                    where: {
                        id: element.id
                    }
                })
        });
    });

    app.get("/api/products/:id", function (req, res) {
        db.Product.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (oneProd) {
            res.json(oneProd);
        });
    });
};