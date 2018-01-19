

import React from "react";
import { connect } from "react-redux";

import ListCard from '../../component/listcart/listcard';
import { getUserList } from "../../redux/userlist.redux";

@connect(
  state => state.userlistReducer, 
  { getUserList }
)
class GeniusList extends React.Component {
  componentDidMount() {
		this.props.getUserList('boss')
  }
  
  render() {
    return <ListCard userlist={this.props.userlist}></ListCard>;
  }

}

export default GeniusList;
