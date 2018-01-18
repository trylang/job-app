import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, List} from 'antd-mobile';

import { getImgsPath } from '../../redux/static.redux';

export function mapStateToProps(state) {
  return { imgsPath: state.staticReducer.data };
}

export function mapDispatchToProps(dispatch) {
  return {
    getImgsPath : (...args)=> dispatch(getImgsPath(...args))
  }
}

class AvatarSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getImgsPath();
  }

  render() {
    let data = [];
    if(this.props.imgsPath && this.props.imgsPath.length > 0) {
      data = this.props.imgsPath.map((_val, i) => ({
        icon: require(`../../images/avatars/${_val}.png`),
        text: _val
      }));
    }
    const gridHeader = this.state.icon ? ((<div>
      <span>已选择头像</span>
      <img style={{width:20}} src={this.state.icon} alt=""/>
    </div>)) : '请选择头像';

    return (
      <div>
        <List renderHeader={()=>gridHeader}>
        {data.length > 0 ? <Grid data={data} columnNum={5}
         onClick={(v) => {
           this.setState(v)
           this.props.selectAvatar(v.text)}}/> : null}
        </List>
      </div>
    )
  }
}

AvatarSelect.PropTypes = {
  selectAvatar: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarSelect);