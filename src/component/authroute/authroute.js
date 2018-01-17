import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { loadData } from '../../redux/user.redux';

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (...args) => dispatch(loadData(...args))
  }
};

class AuthRoute extends React.Component{
  componentDidMount() {

    const { match, location, history } = this.props;

    // 如果就是在这个页面里面，就不需要获取信息
    const publicList = ['/login', 'register'];
    if (publicList.indexOf(location.pathname) > -1) {
      return null;
    }
    // 是否登录
    // 现在的url地址， login是不需要跳转的
    // 用户的type身份是boss还是牛人
    // 获取用户信息, 存储用户信息
    axios.get('/user/info')
      .then(res => {
        if(res.status === 200) {
          if(res.data.code === 0) {
            this.props.loadData(res.data.data);
          } else {
            // 没有登录，因为获取user/info的接口是通过userid获取的，而userID是通过cookie获取的。
            history.push('/login');
          }
        }
      })
      .catch(err => {
        console.error(err);
      })
  
    }

  render() {
    return null;
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AuthRoute));