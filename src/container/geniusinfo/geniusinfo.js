import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavBar, List, InputItem, WingBlank, TextareaItem, Button } from 'antd-mobile';

import AvatarSelect from '../../component/avatar-select/avatar-select';
import { update } from '../../redux/user.redux'; 

@connect (
  state => state.userReducer,
  {update}
)

class GeniusInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title:'',
        desc:''
    };
    this.updateUser = this.updateUser.bind(this);
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  updateUser = () => {
    this.props.update(this.state);
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? (<Redirect to={this.props.redirectTo}></Redirect>) : null}
        <NavBar mode="dark">牛人信息完善页</NavBar>
        <AvatarSelect selectAvatar={(v)=>this.handleChange('avatar',v)}></AvatarSelect>
        <List>
        <InputItem onChange={(v)=>this.handleChange('title',v)}>
					求职岗位
				</InputItem>
				<TextareaItem
					onChange={(v)=>this.handleChange('desc',v)}
					rows={3}
					autoHeight
					title='个人见解'
				>
        </TextareaItem>
        <WingBlank size="md">
          <Button  type='primary' onClick={this.updateUser}>保存</Button>
        </WingBlank>
				
        </List>
      </div>     
    )
  }
}

export default GeniusInfo;