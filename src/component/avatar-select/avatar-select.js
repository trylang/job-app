import React from 'react';
const fileNames = require('../../server/filelist');
console.log(fileNames); 

let ary = [];
class AvatarSelect extends React.Component {
  
  getfiles = () => {
    ary = fileNames.getImgNames();
    console.log(ary);
  }
  componentDidMount() {
    this.getfiles();
  }
  render() {
    return (
      <h1>头像选择</h1>
    )
  }
}

export default AvatarSelect;