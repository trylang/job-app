const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.once('open', function() {
  console.log('mongo connect success haha');
});

const models = {
	user:{
		'user':{type:String, 'require':true},
		'pwd':{type:String, 'require':true},
		'type':{'type':String, 'require':true},
		//头像
		'avatar':{'type':String},
		// 个人简介或者职位简介
		'desc':{'type':String},
		// 职位名
		'title':{'type':String},
		// 如果你是boss 还有两个字段
		'company':{'type':String},
		'money':{'type':String}
	},
	chat:{
	}
}

for (let key in models) {
  mongoose.model(key, new mongoose.Schema(models[key]));
}

module.exports = {
	getModel: function(name) {
		return mongoose.model(name);
	}
}

