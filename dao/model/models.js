/**
 * Created by Administrator on 2016/3/11.
 */
var mongoose = require("../database").mongoose;

//1.用户名密码模型
var UsersSchema = new  mongoose.Schema({
    username:"string",
    password:"string"
});
exports.UserModel = mongoose.model("users", UsersSchema, "users");

//注册数据模型UserRegModel
var UserRegModelSchema = new mongoose.Schema({
	username:"string",
	password:"string",
	passwordTwo:"string"
});
exports.UserRegModel = mongoose.model("userRegData", UserRegModelSchema, "userRegDatas");

//2.homeDatas模型
var homeDataSchema = new mongoose.Schema({
	head: {
		headLeftImg: {
			img1: "string"
		},
		headRightImg: {
			img1: "string",
			img2: "string"
		}
	},
	hot: {
		hotTitle: {
			img1: "string"
		},
		hotImg: {
			img1: "string",
			img2: "string",
			img3: "string",
			img4: "string",
			img5: "string",
			img6: "string",
			img7: "string",
			img8: "string"
		}
	},
	newProducts: {
       img1: "string",
       img2: "string"
   },
  	recommend: {
       img1: "string",
       img2: "string",
       img3: "string",
       img4: "string",
       img5: "string",
       img6: "string",
       img7: "string",
       img8: "string"
   },
   	video: {
       img1: "string",
       img2: "string"
   }
})
exports.homeDataModel = mongoose.model("homeData", homeDataSchema, "homeDatas");

//3. 创建allProductsModel模型

var allProductsSchema = new mongoose.Schema({
	commodity: {
        show: "string",
        hover: "string",
        title: "string",
        price: "number"
    }
})

exports.allProductsModel = mongoose.model("allProduct", allProductsSchema, "allProducts");

//3. 创建detailsModel模型

var detailsSchema = new mongoose.Schema({
	ProductId: "string",
	fangDaJing: {
		detailChooseImg: {
			img1: "string",
			img2: "string",
			img3: "string",
			img4: "string",
			img5: "string",
			img6: "string",
			img7: "string"
		},
		detailCurrentImg: {
			img1: "string",
			img2: "string",
			img3: "string",
			img4: "string",
			img5: "string",
			img6: "string",
			img7: "string"
		},
		magnifyingGlassImg:{
			img1: "string",
			img2: "string",
			img3: "string",
			img4: "string",
			img5: "string",
			img6: "string",
			img7: "string"
		},
		chooseColorImg: "string"
	},
	productInfo: {
		name: "string",
		codeName: "string",
		number: "number",
		price: "number",
		info: "string",
		prompt: "string",
		delivery: "string"
	},
	showDetailsImg:{
		img1: "string",
		img2: "string",
		img3: "string",
		img4: "string",
		img5: "string",
		img6: "string"
	},
	describe: {
		DetailsImg1: "string",
		DetailsImg2: "string",
		DetailsImg3: "string"
	}
});


exports.detailsModel = mongoose.model("detail", detailsSchema, "details");

//创建orderModel
var olderSchema = new mongoose.Schema({
	productImg: "string",
	productName: "string",
	productPrice: "number"
});

exports.orderModel = mongoose.model("older", olderSchema, "older");



//创建 AppHomeDataModel

var AppHomeDataSchema = new mongoose.Schema({
	sliderImg:{
		img1: { 
			img: "string",
			text: "string"
		},
		img2: { 
			img: "string",
			text: "string"
		},
		img3: { 
			img: "string",
			text: "string"
		},
		img4: { 
			img: "string",
			text: "string"
		},
		img5: { 
			img: "string",
			text: "string"
		}
	}
});

exports.AppHomeDataModel = mongoose.model("apphomedata", AppHomeDataSchema, "apphomedatas");


