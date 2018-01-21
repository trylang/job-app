import React from 'react';
import { Result, WhiteSpace, List, Modal, Button } from 'antd-mobile';

class MessageList extends React.Component {

    // constructor(props) {
    //     super(props);

    //     // this.login = this.login.bind(this);
    // }

    handleChange =  (value) => {
        console.log(value);
        console.log('deded')
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={(value) => this.handleChange(value)}>退出</Button>
                
            </div>
        )
    }
}

export default MessageList;