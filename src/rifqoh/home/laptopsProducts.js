import React, { Component } from 'react';
import MiniNavigation from './mininav';
import CurrentPage from '../currentPage';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import BodyPage from '../bodyPage';
import url from '../url';

class laptopsProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isNext:null,
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
        fetch(`${url}/api/laptops/`, {
        }).then(res=>res.json())
        .then((response)=>{
            this.setState({
                productList:response.results,
                isNext: response.next.replace(url,'')
            })
        })
        document.addEventListener('scroll', this.trackScrolling);
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
        let next = `${url}${this.state.isNext}`;
        if (next !== null){
            fetch(next, {
            }).then(res=>res.json())
            .then((response)=>{
                let resultss = this.state.productList;
                let newpost = resultss.concat(response.results);
                let next = response.next === null ? null : response.next.replace(url,'')
                this.setState({
                    productList:newpost,
                    isNext: next
                })
            })
        }
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.trackScrolling);
    }

    render() {
        const { productList } = this.state;
        return (
            <div>
                <CurrentPage current='Laptops' dClass='grd-color-5'/>
                <MiniNavigation/>
                <BodyPage results={productList}/>
        </div>
        )
        
    };
}

export default laptopsProducts;