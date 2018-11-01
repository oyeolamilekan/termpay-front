import React, { Component } from 'react';
import './App.css';
import Main from './rifqoh/router';
import FeedBack from './rifqoh/feedBack';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';

class App extends Component {

  render() {
    return (
      <div>
        <Progress.Component
          style={{ background: '#dc3545' }}
          thumbStyle={{ background: '#dc3545' }}
        />
        <Main />
        <FeedBack />
      </div>
    )
  }
}

export default App;
