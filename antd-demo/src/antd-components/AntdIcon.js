
import React from 'react';
import {Icon} from 'antd';

class AntdIcon extends React.Component{
    render(){
        return(
          <div>
              <Icon type={this.props.type} spin={this.props.spin} style={this.props.style} />
          </div>
        );
    }
}

export default AntdIcon;