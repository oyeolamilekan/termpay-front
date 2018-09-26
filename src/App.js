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
      <Progress.Component/>
      <Navigation/>
      <Main/>
    </div>
    )
  }
}

export default App;
