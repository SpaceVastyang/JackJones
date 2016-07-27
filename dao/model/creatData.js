/**
 * Created by Administrator on 2016/3/11.
 */
var database = require("../database");
// var UserModel = require("./models").UserModel;
// var homeDataModel = require("./models").homeDataModel;
// var allProductsModel = require("./models").allProductsModel;
// var detailsModel = require("./models").detailsModel;
var AppHomeDataModel = require("./models").AppHomeDataModel
;




database.getConn();

//1. 向数据库中的users集合中创建数据
// var arr = [
//    {
//        username:"yangyuhao112222222",
//        password:"66"
//    },
//    {
//        username:"yangyuhao222",
//        password:"66222"
//    },{
//        username:"yangyuhao22222",
//        password:"66"
//    }
// ];

// UserModel.create(arr, function(err, data) {
// 	console.info(data)
// });


//2. 向数据库中的homeDatas集合中创建数据
//var homeData = [{
//   head: {
//       headLeftImg: {
//           img1: "./images/index/ef9b9408-8a0d-4382-8b3d-a6442d32c6e7.jpg"
//       },
//       headRightImg: {
//           img1: "./images/index/95cf8621-f507-4092-8475-b31daab56f25.jpg",
//           img2: "./images/index/d61ffd34-ba45-47ae-8cf9-79a69712127b.jpg"
//       }
//   },
//   hot: {
//       hotTitle: {
//           img1: "./images/index/d33cac9d-90ce-417b-ab90-08c85cd0f16b.jpg"
//       },
//       hotImg: {
//           img1: "./images/index/a3be3213-3d03-4387-ac82-d948cd028893.jpg",
//           img2: "./images/index/d5038e01-03ec-428b-bb06-fd526f0a00bf.jpg",
//           img3: "./images/index/b413b1c1-974d-442f-bb81-6fba8aa77d4d.jpg",
//           img4: "./images/index/e2578f7c-3ec4-4a05-8aec-2879b551db98.jpg",
//           img5: "./images/index/6b523466-08b3-4a2e-8207-68a86ab1a3d6.jpg",
//           img6: "./images/index/9755587b-6d9a-4aac-bb53-6ebf07716cfd.jpg",
//           img7: "./images/index/a18a1ebd-758c-423c-95c6-cc00ba396906.jpg",
//           img8: "./images/index/1a044e32-f1cf-46ca-ae68-1781fe3caa96.jpg"
//       }
//   },
//   newProducts: {
//       img1: "./images/index/f1ada84c-60e9-4672-9ee9-b7065ea6d49f.jpg",
//       img2: "./images/index/6fa8b0c5-beba-42fc-829a-f6309041a1b1.jpg"
//   },
//   recommend: {
//       img1: "./images/index/3183e0ab-37cc-436a-8bea-dd430004d359.jpg",
//       img2: "./images/index/1c41cc2c-1c93-42ea-9e08-4e1b05360e52.jpg",
//       img3: "./images/index/828166c5-7d24-407c-8523-b30ab74e1d17.jpg",
//       img4: "./images/index/a4f08644-3018-4283-8f16-edabb3d85d98.jpg",
//       img5: "./images/index/fe1283ae-06a8-4ec2-90d3-9bab95f2e1ad.jpg",
//       img6: "./images/index/918d9f42-33f0-46b8-a328-87806daa7353.jpg",
//       img7: "./images/index/f1150c70-ad79-484b-a4e0-cdbe4421e075.jpg",
//       img8: "./images/index/f6f1180a-137d-46ec-81c2-0e34b20115ac.jpg"
//   },
//   video: {
//       img1: "./images/index/0350769f-84c6-4f7f-8161-72e7f2b56e08.jpg",
//       img2: "./images/index/0e6bbea7-70d9-4ffa-be4f-030ea8e29672.jpg"
//   }
//}];

//homeDataModel.create(homeData, function(err, data) {
//   console.log(data);
//});


//3. 向数据库中的allProducts集合中创建数据

//var allProducts = [
//    {
//        commodity: {
//            show: "./images/allProduct/216114010139_06.jpg",
//            hover: "./images/allProduct/216114010139_02.jpg",
//            title: "莱卡弹力男士修身休闲裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216132025160_06.jpg",
//            hover: "./images/allProduct/216132025160_02.jpg",
//            title: "含莱卡弹力进口男装修身牛仔长裤",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216114020037_06.jpg",
//            hover: "./images/allProduct/216114020037_02.jpg",
//            title: "男莱卡格纹可挽边九分休闲裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216132046160_06.jpg",
//            hover: "./images/allProduct/216132046160_02.jpg",
//            title: "含莱卡高弹力植物染色男装修身小脚牛仔裤",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21610503403D_06.jpg",
//            hover: "./images/allProduct/21610503403D_02.jpg",
//            title: "含莱卡高弹力植物染色男装修身小脚牛仔裤",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105017031_06.jpg",
//            hover: "./images/allProduct/216105017031_02.jpg",
//            title: "含莱卡高弹力植物染色男装修身小脚牛仔裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216114005037_06.jpg",
//            hover: "./images/allProduct/216114005037_02.jpg",
//            title: "含莱卡弹力男士棉质修身休闲裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105067037_06.jpg",
//            hover: "./images/allProduct/216105067037_02.jpg",
//            title: "男装纯棉修身动物刺绣长袖衬衫",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105005160_06.jpg",
//            hover: "./images/allProduct/216105005160_02.jpg",
//            title: "男装纯棉合体植物染色牛仔衬衫",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101006023_06.jpg",
//            hover: "./images/allProduct/216101006023_02.jpg",
//            title: "男装纯棉修身印花短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101017021_06.jpg",
//            hover: "./images/allProduct/216101017021_02.jpg",
//            title: "男装纯棉圆领字母短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101018023_06.jpg",
//            hover: "./images/allProduct/216101018023_06.jpg",
//            title: "纯棉男印花修身时尚T",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101025021_06.jpg",
//            hover: "./images/allProduct/216101025021_02.jpg",
//            title: "男装纯棉V领字母印花针织短袖T恤",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101033023_06.jpg",
//            hover: "./images/allProduct/216101033023_02.jpg",
//            title: "大理石花纹纯棉修身针织短袖T恤",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101037010_06.jpg",
//            hover: "./images/allProduct/216101037010_02.jpg",
//            title: "男纯棉合体拼接短袖针织T恤衫",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101048023_06.jpg",
//            hover: "./images/allProduct/216101048023_02.jpg",
//            title: "男装合体纯棉字母印花短袖针织T恤衫",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101052023_06.jpg",
//            hover: "./images/allProduct/216101052023_02.jpg",
//            title: "男装纯棉修身拼色短袖针织T恤衫",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105001037_06.jpg",
//            hover: "./images/allProduct/216105001037_02.jpg",
//            title: "纯棉合体男长袖衬衫连帽外套",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105004160_06.jpg",
//            hover: "./images/allProduct/216105004160_02.jpg",
//            title: "纯棉合体植物染色男装牛仔长袖衬衫",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105011037_06.jpg",
//            hover: "./images/allProduct/216105011037_02.jpg",
//            title: "纯棉合体格纹男长袖衬衫",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105016032_06.jpg",
//            hover: "./images/allProduct/216105016032_02.jpg",
//            title: "纯棉修身织花男装长袖衬衫",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216105022023_06.jpg",
//            hover: "./images/allProduct/216105022023_02.jpg",
//            title: "纯棉修身大理石印花男装长袖衬衫",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21610801103C_06.jpg",
//            hover: "./images/allProduct/21610801103C_02.jpg",
//            title: "男装莱卡弹力修身植物染色牛仔西装外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108012037_06.jpg",
//            hover: "./images/allProduct/216108012037_02.jpg",
//            title: "男修身针织西服外套",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108014010_06.jpg",
//            hover: "./images/allProduct/216108014010_02.jpg",
//            title: "男含莱卡修身男士西服针织外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108018037_06.jpg",
//            hover: "./images/allProduct/216108018037_02.jpg",
//            title: "男棉麻合体提花西服外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108024038_06.jpg",
//            hover: "./images/allProduct/216108024038_02.jpg",
//            title: "男装修身针织西服外套",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108026030_06.jpg",
//            hover: "./images/allProduct/216108026030_02.jpg",
//            title: "纯色修身男西装外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121004160_06.jpg",
//            hover: "./images/allProduct/216121004160_02.jpg",
//            title: "男装棉质植物染色短款牛仔夹克外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121005037_06.jpg",
//            hover: "./images/allProduct/216121005037_02.jpg",
//            title: "男装针织棒球领夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121008160_06.jpg",
//            hover: "./images/allProduct/216121008160_02.jpg",
//            title: "男进口植物染色微弹牛仔夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121047010_06.jpg",
//            hover: "./images/allProduct/216121047010_02.jpg",
//            title: "连帽PU拼接休闲男装夹克外套",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121050010_06.jpg",
//            hover: "./images/allProduct/216121050010_02.jpg",
//            title: "男装合体纹理数码印花夹克外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121051054_06.jpg",
//            hover: "./images/allProduct/216121051054_02.jpg",
//            title: "男装短款轻薄棒球领连帽夹克外套",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121060160_06.jpg",
//            hover: "./images/allProduct/216121060160_02.jpg",
//            title: "莱卡植物染色合体牛仔男夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121063038_06.jpg",
//            hover: "./images/allProduct/216121063038_02.jpg",
//            title: "男装棉质暗纹织花短款夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121065031_06.jpg",
//            hover: "./images/allProduct/216121065031_02.jpg",
//            title: "男装防风撞色棒球夹克外套",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121066042_06.jpg",
//            hover: "./images/allProduct/216121066042_02.jpg",
//            title: "男防风连帽立领撞色风衣夹克外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101028054_06.jpg",
//            hover: "./images/allProduct/216101028054_02.jpg",
//            title: "男纯色纯棉修身圆领短袖T恤",
//            price: "99"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121031160_06.jpg",
//            hover: "./images/allProduct/216121031160_02.jpg",
//            title: "男装纯棉合体不规则漆点刺绣机车风牛仔外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101026031_06.jpg",
//            hover: "./images/allProduct/216101026031_02.jpg",
//            title: "男装纯棉猴子印花圆领针织短袖T恤",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101016031_06.jpg",
//            hover: "./images/allProduct/216101016031_02.jpg",
//            title: "男装纯棉纯色简约百搭短袖T恤",
//            price: "149"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121028160_06.jpg",
//            hover: "./images/allProduct/216121028160_02.jpg",
//            title: "莱卡弹力合体泼墨补丁牛仔夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121041010_06.jpg",
//            hover: "./images/allProduct/216121041010_02.jpg",
//            title: "PU休闲棒球领男机车夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121034034_06.jpg",
//            hover: "./images/allProduct/216121034034_02.jpg",
//            title: "男光感防风挺括纯色面料夹克外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121030037_06.jpg",
//            hover: "./images/allProduct/216121030037_02.jpg",
//            title: "撞色弹力棒球领针织夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108039038_06.jpg",
//            hover: "./images/allProduct/216108039038_02.jpg",
//            title: "男士连帽合体西装外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121042010_06.jpg",
//            hover: "./images/allProduct/216121042010_02.jpg",
//            title: "男装机车PU夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101057031_06.jpg",
//            hover: "./images/allProduct/216101057031_02.jpg",
//            title: "男装纯棉修身抽象刺绣印花短袖T恤",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216114026104_06.jpg",
//            hover: "./images/allProduct/216114026104_02.jpg",
//            title: "男装针织运动小脚休闲裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121045160_06.jpg",
//            hover: "./images/allProduct/216121045160_02.jpg",
//            title: "男装防风牛仔中长款风衣外套",
//            price: "899"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216131011038_06.jpg",
//            hover: "./images/allProduct/216131011038_02.jpg",
//            title: "尖扣领纯棉七分袖男士衬衫",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216132065160_06.jpg",
//            hover: "./images/allProduct/216132065160_02.jpg",
//            title: "男装纯棉植物染色修身牛仔裤",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216114043010_06.jpg",
//            hover: "./images/allProduct/216114043010_02.jpg",
//            title: "男装纯棉黑色针织休闲裤卫裤",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121003160_06.jpg",
//            hover: "./images/allProduct/216121003160_02.jpg",
//            title: "针织牛仔男士夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121039037_06.jpg",
//            hover: "./images/allProduct/216121039037_02.jpg",
//            title: "男装棒球领休闲针织外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216114018139_06.jpg",
//            hover: "./images/allProduct/216114018139_02.jpg",
//            title: "男装纯棉休闲裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121029010_06.jpg",
//            hover: "./images/allProduct/216121029010_02.jpg",
//            title: "PU拼接男夹克外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121035010_06.jpg",
//            hover: "./images/allProduct/216121035010_02.jpg",
//            title: "男装太空棉拉链弹力针织连帽外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121064104_06.jpg",
//            hover: "./images/allProduct/216121064104_02.jpg",
//            title: "纯棉棒球领合体男夹克外套",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216131002023_06.jpg",
//            hover: "./images/allProduct/216131002023_02.jpg",
//            title: "棉质莱卡修身男七分袖衬衫",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216133001010_06.jpg",
//            hover: "./images/allProduct/216133001010_02.jpg",
//            title: "男士网眼拼接修身连帽卫衣外套",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21615M010020_06.jpg",
//            hover: "./images/allProduct/21615M010020_02.jpg",
//            title: "牛皮革男士休闲鞋",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21615M015030_06.jpg",
//            hover: "./images/allProduct/21615M015030_02.jpg",
//            title: "男装波点撞色休闲运动鞋",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216124008038_06.jpg",
//            hover: "./images/allProduct/216124008038_02.jpg",
//            title: "男圆领拼接立体条纹织花针织衫毛衣",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216132002160_06.jpg",
//            hover: "./images/allProduct/216132002160_02.jpg",
//            title: "欧洲进口含莱卡弹力男士修身锥腿破洞牛仔裤",
//            price: "999"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216132007160_06.jpg",
//            hover: "./images/allProduct/216132007160_02.jpg",
//            title: "欧洲进口植物染色男装含莱卡弹力牛仔裤",
//            price: "999"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201027104_06.jpg",
//            hover: "./images/allProduct/216201027104_02.jpg",
//            title: "男装纯棉修身圆领3D字母印花针织短袖T恤衫",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201030034_06.jpg",
//            hover: "./images/allProduct/216201030034_02.jpg",
//            title: "男装纯棉竹节棉修身V领短袖T恤",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201031021_06.jpg",
//            hover: "./images/allProduct/216201031021_02.jpg",
//            title: "男装纯棉竹节棉抽象印花短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201033034_06.jpg",
//            hover: "./images/allProduct/216201033034_02.jpg",
//            title: "男装彩点提花合体短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201035105_06.jpg",
//            hover: "./images/allProduct/216201035105_02.jpg",
//            title: "纯棉合体抽象刺绣男短袖T恤",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201039020_06.jpg",
//            hover: "./images/allProduct/216201039020_02.jpg",
//            title: "男装纯棉圆领透气印花针织短袖T恤衫",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201050010_06.jpg",
//            hover: "./images/allProduct/216201050010_02.jpg",
//            title: "男装纯棉修身几何印花短袖针织T恤衫",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216204008034_06.jpg",
//            hover: "./images/allProduct/216204008034_02.jpg",
//            title: "纯男装纯棉泡泡沙条纹短袖衬衫",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216214009010_06.jpg",
//            hover: "./images/allProduct/216214009010_02.jpg",
//            title: "男装含莱卡修身松紧抽绳针织休闲裤",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216214012034_06.jpg",
//            hover: "./images/allProduct/216214012034_02.jpg",
//            title: "男装纯棉修身纯色休闲裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216214028034_06.jpg",
//            hover: "./images/allProduct/216214028034_02.jpg",
//            title: "男装纯棉修身薄款休闲裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216231501034_06.jpg",
//            hover: "./images/allProduct/216231501034_02.jpg",
//            title: "男装含亚麻修身格纹七分袖衬衫",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216232009160_06.jpg",
//            hover: "./images/allProduct/216232009160_02.jpg",
//            title: "男装含莱卡弹力修身牛仔裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216232010160_06.jpg",
//            hover: "./images/allProduct/216232010160_02.jpg",
//            title: "男装含莱卡抽绳九分休闲牛仔裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216299004020_06.jpg",
//            hover: "./images/allProduct/216299004020_02.jpg",
//            title: "男士透明框太阳眼镜墨镜",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21618700503Z_06.jpg",
//            hover: "./images/allProduct/21618700503Z_02.jpg",
//            title: "棉质男士三双装中筒袜",
//            price: "79"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216186004010_06.jpg",
//            hover: "./images/allProduct/216186004010_02.jpg",
//            title: "棉质男士棒球帽",
//            price: "149"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216299005043_06.jpg",
//            hover: "./images/allProduct/216299005043_02.jpg",
//            title: "男士多口袋功能型背提包腰包",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216215021037_06.jpg",
//            hover: "./images/allProduct/216215021037_02.jpg",
//            title: "男装修身纯色休闲裤短裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201507104_06.jpg",
//            hover: "./images/allProduct/216201507104_02.jpg",
//            title: "男装纯棉合体字母胶印印花短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201002034_06.jpg",
//            hover: "./images/allProduct/216201002034_02.jpg",
//            title: "男装纯棉修身胶印条纹T恤Polo衫",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201019034_06.jpg",
//            hover: "./images/allProduct/216201019034_02.jpg",
//            title: "男装纯棉修身条纹印花T恤Polo衫",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216204003034_06.jpg",
//            hover: "./images/allProduct/216204003034_02.jpg",
//            title: "男装纯棉修身温莎领短袖衬衫",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216204012033_06.jpg",
//            hover: "./images/allProduct/216204012033_02.jpg",
//            title: "男装纯棉修身短袖衬衫",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216214004031_06.jpg",
//            hover: "./images/allProduct/216214004031_02.jpg",
//            title: "男装棉麻可挽边休闲七分裤",
//            price: "599"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216215003037_06.jpg",
//            hover: "./images/allProduct/216215003037_02.jpg",
//            title: "男装棉麻抽绳松紧休闲裤短裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216106015037_06.jpg",
//            hover: "./images/allProduct/216106015037_02.jpg",
//            title: "男装纯棉合体几何图案针织T恤Polo衫",
//            price: "349"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201057023_06.jpg",
//            hover: "./images/allProduct/216201057023_02.jpg",
//            title: "纯棉修身印花短袖T恤",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201518021_06.jpg",
//            hover: "./images/allProduct/216201518021_02.jpg",
//            title: "男装纯棉修身字母印花短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216177006010_06.jpg",
//            hover: "./images/allProduct/216177006010_02.jpg",
//            title: "牛皮革单圈休闲针扣腰带",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108044037_06.jpg",
//            hover: "./images/allProduct/216108044037_02.jpg",
//            title: "男装纯棉修身薄款休闲西装外套",
//            price: "799"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216108046105_06.jpg",
//            hover: "./images/allProduct/216108046105_02.jpg",
//            title: "男装亚麻修身条纹薄款西装外套",
//            price: "699"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201001037_06.jpg",
//            hover: "./images/allProduct/216201001037_02.jpg",
//            title: "纯棉合体男装纹理图案圆领短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201003034_06.jpg",
//            hover: "./images/allProduct/216201003034_02.jpg",
//            title: "纯棉修身男装印花短袖T恤",
//            price: "249"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201004037_06.jpg",
//            hover: "./images/allProduct/216201004037_02.jpg",
//            title: "男装纯棉修身字母印花短袖针织",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216214001037_06.jpg",
//            hover: "./images/allProduct/216214001037_02.jpg",
//            title: "男装含亚麻男士百搭休闲裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216214008105_06.jpg",
//            hover: "./images/allProduct/216214008105_02.jpg",
//            title: "男装含莱卡休闲针织裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216277003010_06.jpg",
//            hover: "./images/allProduct/216277003010_02.jpg",
//            title: "男夏季条纹辑线百搭腰带",
//            price: "149"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21615M021030_06.jpg",
//            hover: "./images/allProduct/21615M021030_02.jpg",
//            title: "男士卡通印花休闲鞋布鞋",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21615M02003V_06.jpg",
//            hover: "./images/allProduct/21615M02003V_02.jpg",
//            title: "男士字母印花休闲鞋布鞋",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121006160_06.jpg",
//            hover: "./images/allProduct/216121006160_02.jpg",
//            title: "纯棉修身牛仔男夹克外套潮",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216121001160_06.jpg",
//            hover: "./images/allProduct/216121001160_02.jpg",
//            title: "含莱卡弹力男士做旧泼点针织短款牛仔外套",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216101053100_06.jpg",
//            hover: "./images/allProduct/216101053100_02.jpg",
//            title: "春V领条纹修身短袖Ｔ恤",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21610804103C_06.jpg",
//            hover: "./images/allProduct/21610804103C_02.jpg",
//            title: "男装植物染色修身休闲牛仔西装外套",
//            price: "299"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216114047031_06.jpg",
//            hover: "./images/allProduct/216114047031_02.jpg",
//            title: "男装莱卡修身七分休闲裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/21611404803C_06.jpg",
//            hover: "./images/allProduct/21611404803C_02.jpg",
//            title: "男装纯棉植物染色修身薄款休闲裤",
//            price: "499"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216115006104_06.jpg",
//            hover: "./images/allProduct/216115006104_02.jpg",
//            title: "男装休闲纯色七分针织卫裤短裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216115009023_06.jpg",
//            hover: "./images/allProduct/216115009023_02.jpg",
//            title: "男装圆点休闲针织七分裤短裤",
//            price: "399"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201010010_06.jpg",
//            hover: "./images/allProduct/216201010010_02.jpg",
//            title: "男装纯棉修身V领纯色短袖T恤",
//            price: "99"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201012037_06.jpg",
//            hover: "./images/allProduct/216201012037_02.jpg",
//            title: "纯棉合体圆领百搭男士短袖T恤",
//            price: "99"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201014021_06.jpg",
//            hover: "./images/allProduct/216201014021_02.jpg",
//            title: "男装纯棉修身圆领字母印花短袖T恤",
//            price: "199"
//        }
//    },{
//        commodity: {
//            show: "./images/allProduct/216201018033_06.jpg",
//            hover: "./images/allProduct/216201018033_02.jpg",
//            title: "春纯棉修身长颈鹿印花短袖T恤",
//            price: "299"
//        }
//    }
//];
//
//allProductsModel.create(allProducts , function (err, data) {
//    console.log(data);
//});

//4.向数据库details中添加数据
// var details = [{
//     ProductId: "57062b8da95a8db80f000001",
//     fangDaJing: {
//         detailChooseImg: {
//             img1: "./images/details/product01/216114010139_01.jpg",
//             img2: "./images/details/product01/216114010139_02.jpg",
//             img3: "./images/details/product01/216114010139_03.jpg",
//             img4: "./images/details/product01/216114010139_04.jpg",
//             img5: "./images/details/product01/216114010139_05.jpg",
//             img6: "./images/details/product01/216114010139_06.jpg",
//             img7: "./images/details/product01/216114010139_07.jpg"
//         },
//         detailCurrentImg: {
//             img1: "./images/details/product01/216114010139_01_1.jpg",
//             img2: "./images/details/product01/216114010139_02_1.jpg",
//             img3: "./images/details/product01/216114010139_03_1.jpg",
//             img4: "./images/details/product01/216114010139_04_1.jpg",
//             img5: "./images/details/product01/216114010139_05_1.jpg",
//             img6: "./images/details/product01/216114010139_06_1.jpg",
//             img7: "./images/details/product01/216114010139_07_1.jpg"
//         },
//         magnifyingGlassImg:{
//             img1: "./images/details/product01/216114010139_01_2.jpg",
//             img2: "./images/details/product01/216114010139_02_2.jpg",
//             img3: "./images/details/product01/216114010139_03_2.jpg",
//             img4: "./images/details/product01/216114010139_04_2.jpg",
//             img5: "./images/details/product01/216114010139_05_2.jpg",
//             img6: "./images/details/product01/216114010139_06_2.jpg",
//             img7: "./images/details/product01/216114010139_07_2.jpg"
//         },
//         chooseColorImg: "./images/details/product01/1216114010139_06.jpg"
//     },
//     productInfo: {
//         name: "莱卡弹力男士修身休闲裤",
//         codeName: "E SPHERE PANTS(SLIM FITTING)",
//         number: "216114010",
//         price: "499",
//         info: "面料：棉96% 氨纶4%，洗涤温度不高于30度，缓和程序洗涤，不可漂白，悬挂晾干，温度不高于110度熨烫，不可干洗",
//         prompt: "为保持裤面料不退色，可以洗涤时在水里加入一些食用盐，起到护色、固色、增艳的作用，同时要轻揉；",
//         delivery: "收到订单信息后，我们会尽快处理您的订单，在正常情况下72小时内发货，一般发货后，北京，天津3日内到货，其他地区5-7天到货，具体派送时间根据买家当地的快递公司派件情况。"
//     },
//     showDetailsImg:{
//         img1: "./images/details/product01/216114010_08.jpg",
//         img2: "./images/details/product01/216114010_09.jpg",
//         img3: "./images/details/product01/216114010_10.jpg",
//         img4: "./images/details/product01/216114010_11.jpg",
//         img5: "./images/details/product01/216114010_12.jpg",
//         img6: "./images/details/product01/216114010_13.jpg"
//     },
//     describe: {
//         DetailsImg1: "YKK拉链门襟，精致撞色腰头",
//         DetailsImg2: "精致侧口袋",
//         DetailsImg3: "撞色包边裤脚"
//     }
// },{
//     ProductId: "57062b8da95a8db80f000006",
//     fangDaJing: {
//         detailChooseImg: {
//             img1: "./images/details/216105017031_01.jpg",
//             img2: "./images/details/216105017031_02.jpg",
//             img3: "./images/details/216105017031_03.jpg",
//             img4: "./images/details/216105017031_04.jpg",
//             img5: "./images/details/216105017031_05.jpg",
//             img6: "./images/details/216105017031_06.jpg",
//             img7: "./images/details/216105017031_07.jpg"
//         },
//         detailCurrentImg: {
//             img1: "./images/details/216105017031_01_1.jpg",
//             img2: "./images/details/216105017031_02_1.jpg",
//             img3: "./images/details/216105017031_03_1.jpg",
//             img4: "./images/details/216105017031_04_1.jpg",
//             img5: "./images/details/216105017031_05_1.jpg",
//             img6: "./images/details/216105017031_06_1.jpg",
//             img7: "./images/details/216105017031_07_1.jpg"
//         },
//         magnifyingGlassImg:{
//             img1: "./images/details/216105017031_01_2.jpg",
//             img2: "./images/details/216105017031_02_2.jpg",
//             img3: "./images/details/216105017031_03_2.jpg",
//             img4: "./images/details/216105017031_04_2.jpg",
//             img5: "./images/details/216105017031_05_2.jpg",
//             img6: "./images/details/216105017031_06_2.jpg",
//             img7: "./images/details/216105017031_07_2.jpg"
//         },
//         chooseColorImg: "./images/details/1216105017031_06.jpg"
//     },
//     productInfo: {
//         name: "男装纯棉修身印花图案长袖衬衫",
//         codeName: "O-R-KIDD SHIRT L/S(SLIM FITTING)",
//         number: "216105017",
//         price: "399",
//         info: "面料：棉100%（装饰物部分除外）；适用手洗，不可漂白，悬挂晾干，温度不高于110度熨烫，不可干洗，手洗温度不高于30度，单独洗涤，不可浸泡",
//         prompt: "衣服最好不要在阳光下曝晒，应在阴凉通风处晾至半干时，再放到较弱的太阳光下晒干，以保护衣服的色泽和穿着寿命。",
//         delivery: "收到订单信息后，我们会尽快处理您的订单，在正常情况下72小时内发货，一般发货后，北京，天津3日内到货，其他地区5-7天到货，具体派送时间根据买家当地的快递公司派件情况。"
//     },
//     showDetailsImg:{
//         img1: "./images/details/216105017_08.jpg",
//         img2: "./images/details/216105017_09.jpg",
//         img3: "./images/details/216105017_10.jpg",
//         img4: "./images/details/216105017_11.jpg",
//         img5: "./images/details/216105017_12.jpg",
//         img6: "./images/details/216105017_13.jpg"
//     },
//     describe: {
//         DetailsImg1: "时尚扣领尖领",
//         DetailsImg2: "修身版型",
//         DetailsImg3: "个性几何印花图案"
//     }
// }];

// detailsModel.create(details , function (err, data) {
//     console.log(data);
// });

var apphomedatas = [
{
	sliderImg:{
		img5: { 
			img: "./images/home/slider1-1.jpg",
			text: "最新到店"
		},
		img4: { 
			img: "./images/home/slider1-2.jpg",
			text: "4月1日上新"
		},
		img3: { 
			img: "./images/home/slider1-3.jpg",
			text: "3月29日上新"
		},
		img2: { 
			img: "./images/home/slider1-4.jpg",
			text: "3月25日上新"
		},
		img1: { 
			img: "./images/home/slider1-5.jpg",
			text: "3月22日上新"
		}
	}
},
{
	sliderImg:{
		img5: { 
			img: "./images/home/slider2-1.jpg",
			text: "最新到店"
		},
		img4: { 
			img: "./images/home/slider2-2.jpg",
			text: "4月1日上新"
		},
		img3: { 
			img: "./images/home/slider2-3.jpg",
			text: "3月29日上新"
		},
		img2: { 
			img: "./images/home/slider2-4.jpg",
			text: "3月25日上新"
		},
		img1: { 
			img: "./images/home/slider2-5.jpg",
			text: "3月22日上新"
		}
	}
},
{
	sliderImg:{
		img5: { 
			img: "./images/home/slider3-1.jpg",
			text: "最新到店"
		},
		img4: { 
			img: "./images/home/slider3-2.jpg",
			text: "4月1日上新"
		},
		img3: { 
			img: "./images/home/slider3-3.jpg",
			text: "3月29日上新"
		},
		img2: { 
			img: "./images/home/slider3-4.jpg",
			text: "3月25日上新"
		},
		img1: { 
			img: "./images/home/slider3-5.jpg",
			text: "3月22日上新"
		}
	}
},
{
	sliderImg:{
		img5: { 
			img: "./images/home/slider4-1.jpg",
			text: "最新到店"
		},
		img4: { 
			img: "./images/home/slider4-2.jpg",
			text: "4月1日上新"
		},
		img3: { 
			img: "./images/home/slider4-3.jpg",
			text: "3月29日上新"
		},
		img2: { 
			img: "./images/home/slider4-4.jpg",
			text: "3月25日上新"
		},
		img1: { 
			img: "./images/home/slider4-5.jpg",
			text: "3月22日上新"
		}
	}
},
{
	sliderImg:{
		img5: { 
			img: "./images/home/slider5-1.jpg",
			text: "最新到店"
		},
		img4: { 
			img: "./images/home/slider5-2.jpg",
			text: "4月1日上新"
		},
		img3: { 
			img: "./images/home/slider5-3.jpg",
			text: "3月29日上新"
		},
		img2: { 
			img: "./images/home/slider5-4.jpg",
			text: "3月25日上新"
		},
		img1: { 
			img: "./images/home/slider5-5.jpg",
			text: "3月22日上新"
		}
	}
},
{
	sliderImg:{
		img5: { 
			img: "./images/home/slider6-1.jpg",
			text: "最新到店"
		},
		img4: { 
			img: "./images/home/slider6-2.jpg",
			text: "4月1日上新"
		},
		img3: { 
			img: "./images/home/slider6-3.jpg",
			text: "3月29日上新"
		},
		img2: { 
			img: "./images/home/slider6-4.jpg",
			text: "3月25日上新"
		},
		img1: { 
			img: "./images/home/slider6-5.jpg",
			text: "3月22日上新"
		}
	}
},
{
	sliderImg:{
		img5: { 
			img: "./images/home/slider7-1.jpg",
			text: "最新到店"
		},
		img4: { 
			img: "./images/home/slider7-2.jpg",
			text: "4月1日上新"
		},
		img3: { 
			img: "./images/home/slider7-3.jpg",
			text: "3月29日上新"
		},
		img2: { 
			img: "./images/home/slider7-4.jpg",
			text: "3月25日上新"
		},
		img1: { 
			img: "./images/home/slider7-5.jpg",
			text: "3月22日上新"
		}
	}
},
{
	sliderImg:{
		img4: { 
			img: "./images/home/slider8-1.jpg",
			text: "最新到店"
		},
		img3: { 
			img: "./images/home/slider8-2.jpg",
			text: "4月1日上新"
		},
		img2: { 
			img: "./images/home/slider8-3.jpg",
			text: "3月29日上新"
		},
		img1: { 
			img: "./images/home/slider8-4.jpg",
			text: "3月25日上新"
		}
	}
}]


AppHomeDataModel.create(apphomedatas , function (err, data) {
    console.log(data);
});