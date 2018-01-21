import React from 'react';
import { connect } from 'react-redux';
import { Result, WhiteSpace, List, Modal, Button } from 'antd-mobile';
require ('../../images/avatars/包租婆.png')


@connect(
    user => user
)
class Me extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        console.log('222');
        // const alert = Modal.alert;
        // const alertInstance = alert('退出', '确定要退出登录么', [
        //     { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
        //     { text: 'OK', onPress: () => {
        //         console.log(window.location.href);
        //     } },
        //   ]);
        //   console.log(alertInstance)
        //   setTimeout(() => {
        //     // 可以调用close方法以在外部close
        //     console.log('auto close');
        //     alertInstance.close();
        //   }, 500000);
    }

    render() {
        const user = this.props.userReducer;
        const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
        
        return (
            <div className="result-example">
            <Button onClick={this.logout}>退出</Button>
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
                <Button onClick={this.logout}>退出</Button>
				<List>
					<List.Item></List.Item>
				</List>
            </div>
        )
    }
}

export default Me;