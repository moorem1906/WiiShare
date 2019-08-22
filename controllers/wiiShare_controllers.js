var express = require("express");
var wiiShare = require('../models/wiiShare.js');

//buiding the router connections to manage database arrays 

var router = express.Router();

router.get("/", function (req, res) {
    wiiShare.selectAll(function (data) {
        var hdbrsObj = {
            wiiShare: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
});

router.post("/api/wiiShare", function (req, res) {
    wiiShare.insertOne(
        ["wiiShare_name", "product"],
        [req.body.wiiShare_name, req.body.product],
        function (results) {
            res.json({ id: results.insertId });
        }
    );
});

router.put("/api/wiiShare", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    wiiShare.updateOne({ product: req.body.product }, condition, function (results) {
        if (result.changedRows === 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }
    });

});

router.delete("/api/wiiShare/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    wiiShare.deleteOne({ product: req.body.product }, condition, function (results) {
        if (result.changedRows === 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }

    });
});

module.exports = router;
