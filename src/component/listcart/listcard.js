import React from 'react';
import { Card, WhiteSpace } from "antd-mobile";

class ListCard extends React.Component {

  render() {
    return (
      <div>
        {this.props.userlist.length>0 ? this.props.userlist
        .map(item => {
          return item.avatar ? (<Card  key={item._id}>
            <Card.Header
              title={item.title}
              thumb= {require(`../../images/avatars/${item.avatar}.png`)}
            />
            <Card.Body>
              {item.type==='boss' ? <div>公司:{item.company}</div> : null}
              {item.desc.split('/n').map(v=>(<div key={v}>{v}</div>))}
              {item.type==='boss'? <div>薪资:{item.money}</div> :null}
            </Card.Body>         
          </Card>) : null;
        }): null}
        <WhiteSpace size="lg" />
      </div>
    )
  }
}

export default ListCard;