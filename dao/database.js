var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/Jackjones";
exports.getConn = function() {
    mongoose.connect(dbURI);
    mongoose.connection.on("connected", function() {
        console.log("db start");
    });
};

exports.mongoose = mongoose;