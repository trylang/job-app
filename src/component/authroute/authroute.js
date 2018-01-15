import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class AuthRoute extends React.Component{
  componentDidMount() {
    const { match, location, history } = this.props;

    // 如果就是在这个页面里面，就不需要获取信息
    const publicList = ['/login', 'register'];
    if (publicList.indexOf(location.pathname) > -1) {
      return null;
    }
    // 获取用户信息
    axios.get('/user/info')
      .then(res => {
        if(res.status === 200) {
          if(res.data.code === 0) {
            history.push(location.pathname);
          } else {
            // 没有登录
            history.push('/login');
          }
        }
      })
      .catch(err => {
        console.error(err);
      })
      
      // 是否登录
      // 现在的url地址， login是不需要跳转的
      // 用户的type身份是boss还是牛人
  
    }

  render() {
    return (
      <h2>跳转页面</h2>
    )
  }
}

export default withRouter(AuthRoute);