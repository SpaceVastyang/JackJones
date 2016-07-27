var UserDao = require("../dao/appUserDao");

//主页获取数据

exports.getAppHomeDatas = function(callback) {
    UserDao.getAppHomeDatas(function(data) {
        callback(data);
    });
};

