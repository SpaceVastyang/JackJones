require.config({
	shim: {
		"$": {
			exports: "$"
		},
		"$.touch": ["$"],
		"$.fx": ["$"]
	},

	paths: {
		"$": "./zepto.min",
		"$.fx": "./fx",
		"$.touch": "./touch",
		"auto": "./auto-size",
		"index": "../index",
		"home": "../home/home",
		"login": "../login/login",
		"reg": "../reg/reg",
		"search": "../search/search",
		"classList": "../classList/classList",
		"classInfo": "../classInfo/classInfo",
		"shoppingCar": "../shoppingCar/shoppingCar"
	}
})

require(["$", "$.fx", "$.touch", "auto", "index", "home","login", "reg" ,"search", "classList","classInfo","shoppingCar"], function($, fx, touch, auto, index, home, login, reg, search,classList,classInfo,shoppingCar){
	home.load();
});