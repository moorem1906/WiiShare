var orm = require("../config/orm");

var wiiShare = {
    selectAll: function (cb) {
        orm.selectAll("wiishare", function (res) {
            cb(res)
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.selectAll("wiishare", cols, vals, function (res) {
            cb(res);

        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.selectAll("wiishare", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delectOne: function (condition, cb) {
        orm.selectAll("wiishare", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = wiiShare; 