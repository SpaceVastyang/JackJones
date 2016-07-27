var UserDao = require("../dao/UserDao");

//商品搜索功能
exports.searchValue = function (searchValue,callback) {
    UserDao.searchValue(searchValue,function(data) {
        callback(data);
    })
};
//用户登录数据库查询用户注册数据
exports.findUserByNameAndPwd = function(username, password, callback) {
    UserDao.findUserByNameAndPwd(username, password,function(data) {
        if(data == 1) {
            callback("true");
        } else {
            callback("false");
        }
    })
};

//验证用户名是否被注册
exports.isReg = function(username,callback) {
    UserDao.isReg(username,function(data) {
        if(data == 1) {
            callback("true");
        } else {
            callback("false");
        }
    });
};

//向数据库中传用户注册数据
exports.setRegData = function(username,password,passwordTwo,callback) {
    UserDao.setRegData(username,password,passwordTwo,function(data) {
        if(data){
            callback("true");
        } else {
            callback("false");
        }
    });
};

//home页面请求数据
exports.getHomeDatas = function(callback) {
    UserDao.getHomeDatas(function(data) {
        callback(data);
    });
};

//allProducts页面请求数据
exports.getAllProductDatas = function(callback) {
    UserDao.getAllProductDatas(function(data) {
        callback(data);
    });
};

//Details详情页面请求数据
exports.getDetailsData = function(productId,callback) {
    UserDao.getDetailsData(productId,function(data) {
        callback(data);
    });
};

//详情页面向数据库中存订单信息
exports.setProductInfoData = function(productImg,productName,productPrice,callback) {
    UserDao.setProductInfoData(productImg,productName,productPrice,function(data) {
        callback(data);
    });
};

//购物车页面请求数据
exports.getProductInfoData = function(callback) {
    UserDao.getProductInfoData(function(data) {
        callback(data);
    });
};

//购物车通过setClassName删除商品
exports.setClassName = function(className,callback) {
    UserDao.setClassName(className,function(data) {
        if (data == 1){
            callback("true");
        } 
    });
};