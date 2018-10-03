import React, { Component } from 'react';
import load from '../loadingo.gif';

class MiniLoading extends Component {
    render() {
        return (
            <div className='container'>
                <img src={load} className='img-sm' alt='loading'/>
                <span className='mt-4'></span>
            </div>
        )
    }
}

export default MiniLoading;