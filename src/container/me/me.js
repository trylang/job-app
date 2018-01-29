import React from 'react';
import { connect } from 'react-redux';
import { Result, WhiteSpace, List, Modal } from 'antd-mobile';
import BrowserCookies  from 'browser-cookies';
import { Redirect } from 'react-router-dom';

import { logoutSubmit } from '../../redux/user.redux';

@connect(
    state => state.userReducer,
    {logoutSubmit}
)
class Me extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    // 在构造函数里使用箭头函数，是得不到this指向的。
    // logout = () => {
    logout() {
        const alert = Modal.alert;
        alert('退出', '确定要退出登录么', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确定', onPress: () => {
                BrowserCookies.erase('userid');
                // 第一种跳转方法，window.location.href，但缺点是会刷新
                // window.location.href = window.location.href;
                // 第二种是使用redux，将存储在redux中的原始数据清空，添加directTo属性跳转到'/login'               
                this.props.logoutSubmit();
                this.props.history.push('/login');
                console.log(this.props);
            } },
          ]);
    }

    render() {
        const user = this.props;
        const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
        
        return !user ? (      
            <div className="result-example">
                <div className="sub-title">{user.title}</div>
                <Result
                    img={user.avatar ? myImg(require(`../../images/avatars/${user.avatar}.png`)) : null}
                    title={user.title}
                    message={user.desc}
                />
                <WhiteSpace />

				<List renderHeader={()=>'简介'}>
					<List.Item
						multipleLine
					>
						{user.title}
						{user.desc && user.desc.indexOf('\n') >= 0 ? user.desc.split('\n').map(v=><List.Item.Brief key={v}>{v}</List.Item.Brief>): <List.Item.Brief>{user.desc}</List.Item.Brief>}
						{user.money?<List.Item.Brief>薪资:{user.money}</List.Item.Brief>:null}
					</List.Item>
					
				</List>
				<WhiteSpace></WhiteSpace>
				<List>
					<List.Item onClick={this.logout}>退出</List.Item>
				</List>
            </div>
        ): (
            <div>hahha
                <List>
					<List.Item onClick={this.logout}>退出</List.Item>
				</List>
            </div>
        );
    }
}

export default Me;