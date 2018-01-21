import React from 'react';
import { connect } from 'react-redux';
import { Result, WhiteSpace, List} from 'antd-mobile';
require ('../../images/avatars/包租婆.png')


@connect(
    user => user
)
class Me extends React.Component {

    render() {
        const user = this.props.userReducer;
        const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
        
        return (
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
					<List.Item onClick={this.logout}>退出登录</List.Item>
				</List>
            </div>
        )
    }
}

export default Me;