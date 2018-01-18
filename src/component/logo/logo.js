import React from 'react';
import imgSrc from '../../job.png';

import './logo.css';

class Logo extends React.Component {
  
  render() {
    return (
      <div>
        <img className="logo" src={imgSrc} alt=""/>
      </div>
    )
  }
}

export default Logo;