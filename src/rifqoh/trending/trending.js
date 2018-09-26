/*
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from 'react';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import CurrentPage from '../currentPage';
import BodyPage from '../bodyPage';
import MiniNavigationT from './miniNavT';

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isNext:null,
        }
    }

    // Checks if the user has reached the end
    // of the screen
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    // Removes the progressbar if the
    // the user tries to click the link again
    componentWillUpdate() {
        Progress.hide();
    }

    // Removes the progress bar 
    // When the page is first loaded
    componentDidMount(){
        Progress.hide();
        fetch('https://rifqoe.herokuapp.com/api/products/', {
        }).then(res=>res.json())
        .then((response)=>{
            this.setState({
                productList:response.results,
                isNext: response.next.replace('https://rifqoe.herokuapp.com/','')
            })
        })
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');
        if (this.isBottom(wrappedElement)) {
          this.loadMore();
        }
    };

    loadMore = () => {
        let next = this.state.isNext;
        if (next !== null){
            fetch(next, {
            }).then(res=>res.json())
            .then((response)=>{
                let resultss = this.state.productList;
                let newpost = resultss.concat(response.results);
                let next = response.next === null ? null : response.next.replace('http://localhost:8000','')
                this.setState({
                    productList:newpost,
                    isNext: next
                })
            })
        }
    }

    // Renders the given page to the user
    render() {
        const {productList} = this.state;
        return (
            <div className='trending'>
                <CurrentPage current='Trending' dClass='grd-color-2'/>
                <MiniNavigationT/>
                <BodyPage results={productList}/>
            </div>
        )
    }
}

export default Trending;