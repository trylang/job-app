import React from 'react';
import axios from 'axios';

class AuthRoute extends React.Component{
  componentDidMount() {

    axios.get('/user/info')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <h2>跳转页面</h2>
    )
  }
}

export default AuthRoute;