import React from 'react';
import { List, InputItem, Radio, Button, WingBlank, WhiteSpace } from 'antd-mobile';

import Logo from '../../component/logo/logo';
const RadioItem = Radio.RadioItem;

class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.register = this.register.bind(this);
  }

  register = () => {
    console.log('register');
  }

  onChange = (value) => {
    this.setState({value});
  }
  
  render() {
    const data = [
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
    ];
   
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>用户：</InputItem>
          <WhiteSpace />
          <InputItem>新密码：</InputItem>
          <WhiteSpace />
          <InputItem>确认密码：</InputItem>
          {data.map(i => (
            <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
          ))}
          
          <WingBlank size="md">
            <Button type="primary" onClick={this.register}>注册</Button><WhiteSpace />
          </WingBlank>
          
        </List>
      </div>
    )
  }
}

export default Register;