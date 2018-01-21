import React from "react";
import { NavBar, TabBar } from "antd-mobile";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import BossList  from '../../container/boss/boss';
import GeniusList  from '../../container/genius/genius';
import Me from '../../container/me/me';
import MessageList from '../../container/message/message';

@withRouter
@connect(state => state.userReducer)
class Dashboard extends React.Component {

  render() {
    const { location, match, history, ...user } = this.props;

    const navBarList = [
      {
        path: "/boss",
        text: "牛人",
        icon: "boss",
        title: "牛人列表",
        component: BossList,
        hide: user.type === "genius"
      },
      {
        path: "/genius",
        text: "boss",
        icon: "job",
        title: "BOSS列表",
        component: GeniusList,
        hide: user.type === "boss"
      },
      {
        path: "/msg",
        text: "消息",
        icon: "msg",
        title: "消息列表",
        component: MessageList
      },
      {
        path: "/me",
        text: "我",
        icon: "user",
        title: "个人中心",
        component: Me
      }
    ];
    let selectNav = navBarList.find(item => {
      return item.path === location.pathname;
    });
    if (!selectNav) {
      return null;
    }
    return (
      <div>
        <NavBar mode="dark">{selectNav.title}</NavBar>
        <div style={{marginBottom:45}}>
          <Switch>
            <Route path={selectNav.path} component={selectNav.component} />
          </Switch>
        </div>
        
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          // hidden={selectNav.hide}
        >
          {navBarList
          .filter(item => {
            return !item.hide
          })
          .map(item =>{
            return <TabBar.Item
              title={item.title}
              key={item.title}
              icon={{uri: require(`../../images/icons${item.path}.svg`)}}
              selectedIcon={{uri: require(`../../images/icons${item.path}_select.svg`)}}
              selected={ selectNav.path === item.path }
              badge={1}
              onPress={() => {
                history.push(item.path);
              }}
              data-seed="logId"
            >
            </TabBar.Item>
          })}
        </TabBar>
      </div>
    );
  }
}

export default Dashboard;
