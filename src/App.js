import React, { Component } from 'react';
import './App.css';
import Navigation from './rifqoh/nav';
import Main from './rifqoh/router';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';

class App extends Component {

  render() {
    return(
    <div>
      <Progress.Component 
        style={{background:'#dc3545'}}
        thumbStyle={{background:'#dc3545'}}
      />
      <Navigation/>
      <Main/>
    </div>
    )
  }
}

export default App;
