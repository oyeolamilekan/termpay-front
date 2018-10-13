import React, { Component } from 'react';
import Loader from 'react-spinners/ClipLoader';
class MiniLoading extends Component {
    render() {
        return (
            <div className='container p-3 my'>
                <Loader/>
            </div>
        )
    }
}

export default MiniLoading;