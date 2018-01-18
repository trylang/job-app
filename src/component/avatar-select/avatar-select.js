import React from 'react';
import { connect } from 'react-redux';
import { getImgsPath } from '../../redux/static.redux';

export function mapStateToProps(state) {
  return { imgsPath: state.staticReducer };
}

export function mapDispatchToProps(dispatch) {
  // 这里需要传递表单里的参数，故意传参也成haha,是要注意，参数的写法，当然，最好写成...args
  return {
    getImgsPath : (...args)=> dispatch(getImgsPath(...args))
  }
}

class AvatarSelect extends React.Component {
  
  componentDidMount() {
    this.props.getImgsPath();
  }
  render() {
    console.log(this.props.imgsPath);
    return (
      <h1>头像选择</h1>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarSelect);