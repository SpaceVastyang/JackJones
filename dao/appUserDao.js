var AppHomeDataModel = require("./model/models").AppHomeDataModel;
var allProductsModel = require("./model/models").allProductsModel;
var detailsModel = require("./model/models").detailsModel;
var orderModel = require("./model/models").orderModel;
var UserRegModel = require("./model/models").UserRegModel;

//主页获取数据
exports.getAppHomeDatas = function(callback) {
    AppHomeDataModel.find(function(err, data) {
        callback(data);
    });
};