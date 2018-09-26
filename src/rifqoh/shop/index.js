
import React, { Component } from 'react';
// import MiniNavigation from './mininav';
import CurrentPage from '../currentPage';
import Progress from 'react-progress-2';
import { NavLink } from 'react-router-dom';
import 'react-progress-2/main.css';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isNext:null
        }
    }

    // isBottom(el) {
    //     return el.getBoundingClientRect().bottom <= window.innerHeight;
    // }

    componentWillUpdate() {
        Progress.hide();
    }

    componentDidMount(){
        Progress.hide();
        // fetch('/api/products/', {
        // }).then(res=>res.json())
        // .then((response)=>{
        //     this.setState({
        //         productList:response.results,
        //         isNext: response.next.replace('http://localhost:8000','')
        //     })
        // })
        // document.addEventListener('scroll', this.trackScrolling);
    }
    
    componentWillUnmount(){
        // document.removeEventListener('scroll', this.trackScrolling);
    }

    // trackScrolling = () => {
    //     const wrappedElement = document.getElementById('root');
    //     if (this.isBottom(wrappedElement)) {
    //       console.log('header bottom reached');
    //       // document.removeEventListener('scroll', this.trackScrolling);
    //       this.loadMore();
    //     }
    // };

    // loadMore = () => {
    //     let next = this.state.isNext;
    //     if (next !== null){
    //         fetch(next, {
    //         }).then(res=>res.json())
    //         .then((response)=>{
    //             let resultss = this.state.productList;
    //             let newpost = resultss.concat(response.results);
    //             let next = response.next === null ? null : response.next.replace('http://localhost:8000','')
    //             this.setState({
    //                 productList:newpost,
    //                 isNext: next
    //             })
    //         })
    //     }
    // }

    updateState = () => {
        
    }
    render() {
        return (
            <div className='wrapper'>
                <CurrentPage current='Shop' dClass='grd-color-7'/>
                <div className='mt-4'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='p-5 bg-orange text-center text-white rounded'>
                            <h1><NavLink to='/jumia/all' onClick={this.clicker} className='link_s'> Jumia </NavLink></h1>
                        </div>
                        <div className='mt-2 p-5 bg-pink text-center text-white rounded'>
                            <h1><NavLink to='/konga/all' onClick={this.clicker} className='link_s'> Konga </NavLink></h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    clicker() {
        Progress.show();
    }
}

export default Shop;