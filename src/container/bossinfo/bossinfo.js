import React from 'react';
import { NavBar, List, InputItem, WingBlank, TextareaItem, Button } from 'antd-mobile';

import AvatarSelect from '../../component/avatar-select/avatar-select';

class BossInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: ''
    };
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <div>
        <NavBar mode="dark">boss信息完善页面</NavBar>
        <AvatarSelect></AvatarSelect>
        <List renderHeader={() => 'Customize to focus'}>
        <InputItem onChange={(v)=>this.handleChange('title',v)}>
					招聘职位
				</InputItem>
				<InputItem onChange={(v)=>this.handleChange('company',v)}>
					公司名称
				</InputItem>
				<InputItem onChange={(v)=>this.handleChange('money',v)}>
					职位薪资
				</InputItem>
				<TextareaItem
					onChange={(v)=>this.handleChange('desc',v)}
					rows={3}
					autoHeight
					title='职位要求'
				>
        </TextareaItem>
        <WingBlank size="md">
          <Button  type='primary'>保存</Button>
        </WingBlank>
				
        </List>
      </div>     
    )
  }
}

export default BossInfo;