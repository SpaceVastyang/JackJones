var express = require('express');
var router = express.Router();
var UserService = require("../service/UserService");
//购物车登录状态判断,点击登录按钮处ajax中判断
// router.get("/isLogin", function(req, res) {
//     console.log(req.session.username);
//     if(req.session.username) {
//         res.send(req.session.username);
//     } else {
//         res.send("登录");
//     }
// });
router.get("/isLogin", function (req, res) {
     res.send(req.session.username);
});
//登出
router.post("/loginOut", function (req, res) {
    if(req.session.destroy()) res.send("true");
});

//商品搜索功能
router.get('/search', function (req, res) {
   UserService.searchValue(req.query.searchValue,function (data) {
       res.send(data);
   })
});


//用户登录数据库查询用户注册数据
router.post("/login",function(req,res){
    UserService.findUserByNameAndPwd(req.body.username, req.body.password, function(data) {
        req.session.username = req.body.username;//session保存username  
        // console.log(req.session.username);
        res.send(data)
    })
});
//验证用户名是否被注册
router.post("/isReg",function(req,res){
    UserService.isReg(req.body.username,function(data) {
        res.send(data);
    });
});


//向数据库中传用户注册数据
router.post("/setRegData",function(req,res){
    UserService.setRegData(req.body.username,req.body.password,req.body.passwordTwo,function(data) {
        res.send(data);
    });
});



//home页面请求数据
router.get("/getHomeDatas",function(req,res){
	 UserService.getHomeDatas(function(data) {
        res.send(data);
    });
});

//allProducts页面请求数据
router.get("/getAllProductDatas",function(req,res){
    UserService.getAllProductDatas(function(data) {
        res.send(data);
    });
});

//Details详情页面请求数据
router.get("/getDetailsData",function(req,res){
    UserService.getDetailsData(req.query.productId,function(data) {
        res.send(data);
    });
});

//详情页面向数据库中存订单信息

router.post("/setProductInfoData",function(req,res){
    UserService.setProductInfoData(req.body.productImg,req.body.productName,req.body.productPrice,function(data) {
        res.send(data);
    });
});

//购物车页面请求数据
router.get("/getProductInfoData",function(req,res){
    UserService.getProductInfoData(function(data) {
        res.send(data);
    });
});


//购物车通过setClassName删除商品
router.post("/setClassName",function(req,res){
    UserService.setClassName(req.body.className,function(data) {
        res.send(data);
    });
});



module.exports = router;