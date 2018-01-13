
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';
import ShowGuns from './App';
import { mapStateToProps, mapDispatchToProps } from './auth.redux';

class Home extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        console.log(this.props);
        const { title, login } = this.props;
        const trueLogin = (
            <div>
                {/* <h1>登录页面： 欢迎 {title.auth.use}</h1> */}
                <Redirect to="about"/>
                {/* <button onClick={login}>登录按钮</button> */}
            </div>
        )
        const falseLogin = (
            <div>
                <h1>请重新登录</h1>
                <button onClick={login}>登录按钮</button>
            </div>
        )
        return title.auth.isAuth ? trueLogin : falseLogin;
    };
}
export const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export class About extends React.Component {

    // componentDidMount() {
    //     this.props.getUserData();
    // }

    render() {
        let isAuth = this.props.title.auth.isAuth;
        const login = <Redirect to="/login" />
        const detail = (
            <div>
                <h1>About</h1>
                <h2>{isAuth ? `欢迎${this.props.title.auth.user}, 年龄为${this.props.title.auth.age}登录成功` : '重新登录'}</h2>               
                        <Link to="/topics"> 去主题页看看 </Link>                   
                <button onClick={this.props.logout}>登出页面</button>
            </div>
        )
        return isAuth ? detail : login;
    }
}

export const Detail = connect(
    mapStateToProps,
    mapDispatchToProps
)(About);


const Topic = ({ match }) => (
    <div>
        <h2>{match.params.topicId}</h2>
    </div>
)

export class Topics extends React.Component {

    render() {
        const match = this.props.match;
        return (
            <div>
                <h1>Topics</h1>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}> Rendering with React </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}> Components </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}> Props v. State </Link>
                    </li>
                </ul>
                <Route exact path={match.url} component={ShowGuns} />
                <Route path={`${match.url}/:topicId`} component={Topic} />
                {/* <Redirect to="/login"/> */}

            </div>
        )
    }
}
