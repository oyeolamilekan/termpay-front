import React, { Component } from 'react';
import Loader from 'react-spinners/ClipLoader';

class Loading extends Component {
    render() {
        return (
            <div className='container center justify-content-center align-items-center'>
                <Loader sizeUnit={"px"} size={150}/>                
            </div>
        )
    }
}

export default Loading;