var express = require('express');
var router = express.Router();
var UserService = require("../service/appUserService");
//主页获取数据

router.get("/getAppHomeDatas",function(req,res){
    UserService.getAppHomeDatas(function(data) {
        res.send(data);
    });
});



module.exports = router;