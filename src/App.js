import React, { Component } from 'react';
// import Nav from './comps/Nav'
import router from './utils/router'
import './SassComp/App.css';




class App extends Component {
  render() {
    return (
        <div>
          {/* <Nav /> */}
          {router}
        </div>
    );
  }
}

export default App;
