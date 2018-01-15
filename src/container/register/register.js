import React from 'react';
import { List, InputItem, Radio, Button, WingBlank, WhiteSpace } from 'antd-mobile';

import Logo from '../../component/logo/logo';
const RadioItem = Radio.RadioItem;

class Register extends React.Component {
  
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
    console.log(this.state);
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

export default Register;