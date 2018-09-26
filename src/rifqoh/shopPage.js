import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DynamicRouteComp extends Component {
    componentDidMount() {
        console.log('h');
        console.log(this.props.match.params.slug);
    }
    render () {
        const { slug } = this.props.match.params;
        return (
            <div>
                <h1>{ slug } Content that doesn't change based on route</h1>
                <Link className='some-link' to='/post/dynamic/'>dynamic page</Link>
            </div>
        )
    }
}

export default DynamicRouteComp;