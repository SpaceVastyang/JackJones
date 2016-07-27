// var UserModel = require("./model/models").UserModel;
var homeDataModel = require("./model/models").homeDataModel;
var allProductsModel = require("./model/models").allProductsModel;
var detailsModel = require("./model/models").detailsModel;
var orderModel = require("./model/models").orderModel;
var UserRegModel = require("./model/models").UserRegModel;

//商品搜索功能
exports.searchValue = function (searchValue,callback) {
    if(searchValue != ""){
        // var value = "/" + searchValue + "/";
        allProductsModel.find({"commodity.title":searchValue}).sort({_id: 1}).exec(function(err, data) {
            callback(data);
        })
    } else {
        allProductsModel.find().sort({_id: 1}).exec(function(err, data) {
            callback(data);
        })
    }
};

//用户登录数据库查询用户注册数据
exports.findUserByNameAndPwd = function(username, password, callback) {
    UserRegModel.count({
        username: username,
        password: password
    }, function(err, data) {
        callback(data)
    })
};

//验证用户名是否被注册
exports.isReg = function(username,callback) {
    UserRegModel.count({
        username: username
    }, function(err, data) {
        callback(data)     
    })
};

//向数据库中传用户注册数据
exports.setRegData = function (username,password,passwordTwo,callback){
    new UserRegModel({
        username:username,
        password:password,
        passwordTwo:passwordTwo
    }).save(function(err,data){  //形参err，data都要有
        console.info(data)
            callback(data)
        })
};


//home页面请求数据
exports.getHomeDatas = function(callback) {
    homeDataModel.find(function(err, data) {
        callback(data);
    });
};

//allProducts页面请求数据

exports.getAllProductDatas = function(callback) {
    allProductsModel.find(function(err, data) {
        callback(data);
    });
};

//Details详情页面请求数据
exports.getDetailsData = function(productId,callback) {
    detailsModel.find({ProductId:productId},function(err, data) {
        callback(data);
        //console.info(data)
    });
};

//详情页面向数据库中存订单信息

exports.setProductInfoData = function (productImg,productName,productPrice,callback){
    new orderModel({
        productImg: productImg,
        productName: productName,
        productPrice: productPrice
    }).save(function(err,data){
           callback(data)
        })
};

//购物车页面请求数据
exports.getProductInfoData = function(callback) {
    orderModel.find(function(err, data) {
        callback(data);
    });
};

//购物车通过setClassName删除商品
exports.setClassName = function(className,callback) {
    orderModel.remove({productName:className},function(err, data) {
        callback(data);
    });
};
