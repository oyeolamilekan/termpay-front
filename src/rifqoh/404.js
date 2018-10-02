import React, { Component } from 'react';

class NotFound extends Component {
    render () {
        return (
            <div className='container-fluid text-center mt-100'>
                <h1>404 not found</h1>
                <p>Sorry this page doesn't exist on the server.</p>
            </div>
        )
    }
}

export default NotFound;