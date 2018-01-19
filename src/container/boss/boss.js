import React from "react";
import { connect } from "react-redux";

import ListCard from '../../component/listcart/listcard';
import { getUserList } from "../../redux/userlist.redux";

@connect(
  state => state.userlistReducer, 
  { getUserList }
)
class BossList extends React.Component {
  componentDidMount() {
		this.props.getUserList('genius')
  }
  
  render() {
    return <ListCard userlist={this.props.userlist}></ListCard>;
  }

}

export default BossList;
