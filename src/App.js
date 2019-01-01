/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import './App.css';
import 'react-progress-2/main.css';

import React, { Component } from 'react';

import FeedBack from './rifqoh/feedBack';
import Main from './rifqoh/router';
import Progress from 'react-progress-2';

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
