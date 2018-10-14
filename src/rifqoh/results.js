/**
 * Copyright (c) 2018-present, Maincode, Inc.
 *
 * This source code is free
 */

import React, { Component } from 'react';
import MiniNavigation from './home/mininav';
import CurrentPage from './currentPage';
import BodyPage from './bodyPage';
import Progress from 'react-progress-2';

class Results extends Component {
    state = {
        isEmpty:false,
    }
    componentDidMount() {
        Progress.hide();
        const { detail } = this.props.location.state;
        if (detail.length === 0){
            this.setState({
                isEmpty:true
            })
        }
    }
    render() {
        const { detail } = this.props.location.state;
        const { isEmpty } = this.state;
        return (
                <div className='parent'>
                    {isEmpty? 
                        <div className='text-center test-fixed container'>
                            <div className='mt-100'>
                                <h1 className='text-danger'><i className='fa fa-times mb-2'></i></h1>
                                <h4 className='font-weight-light'>Sorry we can't process your query right now, kindly check your search parameter.</h4>
                            </div>
                        </div> 
                        :
                        <div className='result-list'>
                            <CurrentPage current='Search' dClass='grd-color-1'/>
                            <MiniNavigation/>
                            <BodyPage results={detail}/>
                        </div>
                    }
                </div>
            )
    }
}

export default Results;