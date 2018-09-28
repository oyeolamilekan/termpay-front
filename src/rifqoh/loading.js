import React, { Component } from 'react';
import load from '../loadingo.gif';

class Loading extends Component {
    render() {
        return (
            <div className='container mt-100 h-100 justify-content-center align-items-center'>
                <img src={load} className='img-responsive' alt='loading'/>
            </div>
        )
    }
}

export default Loading;