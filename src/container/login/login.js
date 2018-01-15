import React from 'react';
import { List, InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

import Logo from '../../component/logo/logo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  login = () => {
    console.log('login');
  }
  register = () => {
    this.props.history.push('/register');
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>用户：</InputItem>
          <WhiteSpace />
          <InputItem>密码：</InputItem>
          <WingBlank size="md">
          <Button type="primary" onClick={this.login}>登录</Button><WhiteSpace />
          </WingBlank>
          <WingBlank size="md">
          <Button type="primary" onClick={this.register}>注册</Button><WhiteSpace />
          </WingBlank>
         
        </List>
        
      </div>
    )
  }
}

export default Login;