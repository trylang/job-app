const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

const userRouter  = require('./user');
const staticRouter = require('./static');

// 该路由使用的中间件
app.use('/user', userRouter);
app.use('/static', staticRouter);

app.listen(9093, function() {
  console.log('Node app start at port 9093');
})