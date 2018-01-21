import React from 'react';
import { connect } from 'react-redux';
import { List, InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

import Logo from '../../component/logo/logo';
import { login } from '../../redux/user.redux';

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
  return {
      login: (...args) => dispatch(login(...args))
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  login = () => {
    alert("44444")
    this.props.login(this.state);
  }
  register = () => {
    this.props.history.push('/register');
  }

  handleChange =(key, value) => {
    this.setState({[key]: value});
  }
  render() {
    return (
      <div>
        {this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo}/> : null}
        <Logo></Logo>
        <List>
          {this.props.user.msg? <p className='error-msg'>{this.props.user.msg}</p>:null}
          <InputItem onChange={(value) => this.handleChange('user', value)}>用户：</InputItem>
          <WhiteSpace />
          <InputItem onChange={(value) => this.handleChange('pwd', value)}>密码：</InputItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);