import React from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { Button } from 'antd-mobile';
import { mapStateToProps, mapDispatchToProps } from './index.redux';

// ui容器
class App extends React.Component {
  render() {
    const { number, addGun, removeGun, addGunAsync} = this.props;
    console.log(this.props.number.showGuns);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>当前数：{number.showGuns}</p>
        <Button type="primary" onClick={addGun}>添加按钮</Button>
        <Button type="primary" onClick={removeGun}>减少按钮</Button>
        <Button type="primary" onClick={addGunAsync}>异步Async按钮</Button>
      </div>
    );
  }
}

const ShowGuns = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ShowGuns;
