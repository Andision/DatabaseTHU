import React, { Component } from 'react';
// import { HashRouter as Router, Route } from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Nav0';
import Footer from './Home/Footer1';
import Home from './Home';
import Search from './Search';
import Detail from './Detail';
import Login from './Login';
import Register from './Register';

import {
  Nav00DataSource,
  // Footer00DataSource,
  Footer10DataSource,
} from './Home/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    console.log("Code by Andision Zhang with ❤")
    console.log("You can go to https://andisionzhang.com for more information about me.")
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header dataSource={Nav00DataSource} isMobile={this.state.isMobile} />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/detail" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
