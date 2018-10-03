import React, { Component } from 'react';
import load from '../loadingo.gif';

class MiniLoading extends Component {
    render() {
        return (
            <div className='container p-3 my'>
                <img src={load} className='img-sm' alt='loading'/>
            </div>
        )
    }
}

export default MiniLoading;