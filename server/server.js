const express = require('express');
const app = express();

const userRouter  = require('./user');

// 该路由使用的中间件
app.use('/user', userRouter); 

app.listen(9093, function() {
  console.log('Node app start at port 9093');
})