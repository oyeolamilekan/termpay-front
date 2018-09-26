/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from 'react';
import MiniNavigation from './home/mininav';
import CurrentPage from './currentPage';
import BodyPage from './bodyPage';
import Progress from 'react-progress-2';

class Results extends Component {
    componentDidMount() {
        Progress.hide();
        const results = this.props.location.state.detail;
        console.log(results);
    }
    render() {
        const results = this.props.location.state.detail;
      return (
            <div>
                <CurrentPage current='Search' dClass='grd-color-1'/>
                <MiniNavigation/>
                <BodyPage results={results}/>
            </div>
        )
    }
}

export default Results;