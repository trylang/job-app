import React from 'react';
import { connect } from 'react-redux';
import { List, InputItem, Radio, Button, WingBlank, WhiteSpace } from 'antd-mobile';

import { registerAction } from '../../redux/user.redux';

import Logo from '../../component/logo/logo';
// import { mapStateToProps, mapDispatchToProps } from '../../redux/user.redux';

export function mapStateToProps(state) {
  return { user: state };
}

export function mapDispatchToProps(dispatch) {
  return {
    registerAction
  }
}

const RadioItem = Radio.RadioItem;

class Register1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatpwd:'',
      type:'genius' // or boss
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange = (key, value) => {
    this.setState({
      [key] : value
    })
  }

  handleRegister = () => {
    registerAction(this.state);
  }

  render() {
    const data = [
      { label: 'genius' },
      { label: 'boss' }
    ];
   
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem onChange={(value) => this.handleChange('user', value)}>用户：</InputItem>
          <WhiteSpace />
          <InputItem onChange={(value) => this.handleChange('pwd', value)}>新密码：</InputItem>
          <WhiteSpace />
          <InputItem onChange={(value) => this.handleChange('repeatpwd', value)}>确认密码：</InputItem>
          {data.map(i => (
            <RadioItem key={i.label} checked={this.state.type === i.label} onChange={() => this.handleChange('type', i.label)}>
            {i.label}
          </RadioItem>
          ))}
          
          <WingBlank size="md">
            <Button type="primary" onClick={this.handleRegister}>注册</Button><WhiteSpace />
          </WingBlank>
          
        </List>
      </div>
    )
  }
}

const Register = connect (
  mapStateToProps,
  mapDispatchToProps
)(Register1);

export default Register;