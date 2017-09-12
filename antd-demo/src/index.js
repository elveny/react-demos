import React from 'react';
import ReactDOM from 'react-dom';
import AntdButton from './antd-components/AntdButton';
import AntdLayout from './antd-components/AntdLayout';
import AntdIcon from './antd-components/AntdIcon';
import AntdGrid from './antd-components/AntdGrid';
// import './index.css';

// let antdComponentObj = <AntdButton/>;
// let antdComponentObj = <AntdLayout/>;
let antdComponentObj = <AntdIcon type={"apple"} spin={false} style={{ fontSize: 200, color: '#08c' }}/>;
// let antdComponentObj = <AntdGrid/>;
ReactDOM.render(
    antdComponentObj,
  document.getElementById('root')
);
