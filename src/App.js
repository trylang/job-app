import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';

// ui容器
class App extends Component {
  render() {
    const { number, addGun, removeGun, addGunAsync} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>当前数：{number}</p>
        <Button type="primary" onClick={addGun}>添加按钮</Button>
        <Button type="primary" onClick={removeGun}>减少按钮</Button>
        <Button type="primary" onClick={addGunAsync}>异步Async按钮</Button>
      </div>
    );
  }
}

export default App;
