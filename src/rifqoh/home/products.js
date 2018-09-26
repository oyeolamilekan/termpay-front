/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */


import React, { Component } from 'react';
import MiniNavigation from './mininav';
import CurrentPage from '../currentPage';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import BodyPage from '../bodyPage';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isNext:null
        }
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentWillUpdate() {
        Progress.hide();
    }

    componentDidMount(){
        Progress.hide();
        fetch('/api/products/', {
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
          console.log('header bottom reached');
          // document.removeEventListener('scroll', this.trackScrolling);
          this.loadMore();
        }
    };

    loadMore = () => {
        let next = this.state.isNext;
        console.log(next)
        if (next !== null){
            fetch(next, {
            }).then(res=>res.json())
            .then((response)=>{
                let resultss = this.state.productList;
                let newpost = resultss.concat(response.results);
                let next = response.next === null ? null : response.next.replace('https://rifqoe.herokuapp.com/','')
                this.setState({
                    productList:newpost,
                    isNext: next
                })
            })
        }
    }

    updateState = () => {
        
    }
    render() {
        const { productList } = this.state;
        return (
            <div>
                <CurrentPage current='Home' dClass='grd-color-3'/>
                <MiniNavigation/>
                <BodyPage results = {productList}/>
            </div>
        )
        
    };
}

export default Products;