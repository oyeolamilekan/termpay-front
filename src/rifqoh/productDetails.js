/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from 'react';
import url from './url';

class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            showContent: true,
            results: [],
        }
    }

    componentDidMount() {
        this.setPostStateOnProps();
    }

    setPostStateOnProps() {
        const {results} = this.props;
        this.setState({
            results: results,
        })
        // console.log(results);
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if (this.props !== prevProps){
            this.setPostStateOnProps();
        }
    }
    render() {
        const {results} = this.state;
        console.log(results);
        return(
            <div className="row">
                {results.map(item=>(
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={item.id + '' + item.name}>
                        <a href={`${url}/api/r_redirect/${ item.id?item.id:item.objectID}`} target='_blank' className='product_d text-dark'>
                            <div className='snpt' key={item.id}>
                                {/* <img src={item.image.indexOf('local') > -1 ? item.image : item.image.indexOf('media') > -1 ? 'http://localhost:8000'+ item.image : 'http://localhost:8000/media/'+ item.image } alt={item.name} className='img-prod' /> */}
                                <img src={ item.image.indexOf('res') > -1 ? item.image : 'https://res.cloudinary.com/dbwm0ksoi/image/upload/v1/'+item.image} alt={item.name} className='img-prod' />
                                <p>{item.name.length > 50 ? item.name.slice(0,50) + '....' : item.name}</p>
                                <p>N {item.price}</p>
                                <p>{item.shop}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default ProductDetail;