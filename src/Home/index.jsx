/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
// import { Divider } from 'antd';


import Banner0 from './Banner0';
import Content4 from './Content4';
// import Feature4 from './Feature4';
// import Contact0 from './Contact0';
// import Banner3 from './Banner3';
// import Content0 from './Content0';
// import Content7 from './Content7';
// import Content13 from './Content13';
// import Content12 from './Content12';

import Feature6 from './Feature6';
// import Content1 from './Content1';
// import Feature2 from './Feature2';
// import Feature40 from './Feature40';
// import Feature41 from './Feature41';

import {
  Banner00DataSource,
  // Content00DataSource,
  // Content70DataSource,
  // Content130DataSource,
  // Content120DataSource,

  Feature60DataSource,
  Content40DataSource,
  Content41DataSource,
  // Content10DataSource,
  // Feature20DataSource,
  // Feature41DataSource,
} from './data.source.js';

import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const location = window.location;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content4
        id="Content4_0"
        key="Content4_0"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content4
        id="Content4_1"
        key="Content4_1"
        dataSource={Content41DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Divider  key="d_2"/>,
      <Feature6
        id="Feature6_0"
        key="Feature6_0"
        dataSource={Feature60DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
