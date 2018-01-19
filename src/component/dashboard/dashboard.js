import React from "react";
import { NavBar, Icon, TabBar } from "antd-mobile";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
require(`../../images/icons/boss.svg`)
// require(`../../images/avatars/${_val}.png`)

@withRouter
@connect(state => state.userReducer)
class Dashboard extends React.Component {

  render() {
    const { location, match, history, ...user } = this.props;
    const Boss = () => (
      <div>
        <h1>Boss</h1>
      </div>
    );

    const Genius = () => (
      <div>
        <h1>Genius</h1>
      </div>
    );

    const Msg = () => (
      <div>
        <h1>Msg</h1>
      </div>
    );

    const User = () => (
      <div>
        <h1>User</h1>
      </div>
    );

    const navBarList = [
      {
        path: "/boss",
        text: "牛人",
        icon: "boss",
        title: "牛人列表",
        component: Boss,
        hide: user.type === "genius"
      },
      {
        path: "/genius",
        text: "boss",
        icon: "job",
        title: "BOSS列表",
        component: Genius,
        hide: user.type === "boss"
      },
      {
        path: "/msg",
        text: "消息",
        icon: "msg",
        title: "消息列表",
        component: Msg
      },
      {
        path: "/me",
        text: "我",
        icon: "user",
        title: "个人中心",
        component: User
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
        <Route path={selectNav.path} component={selectNav.component} />
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
              {/* {item.component} */}
            </TabBar.Item>
          })}
        </TabBar>
      </div>
    );
  }
}

export default Dashboard;
