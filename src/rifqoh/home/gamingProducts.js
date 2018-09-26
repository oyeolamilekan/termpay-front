import React, { Component } from 'react';
import MiniNavigation from './mininav';
import CurrentPage from '../currentPage';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import BodyPage from '../bodyPage';

class gamingProducts extends Component {
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
        fetch('/api/gaming/', {
        }).then(res=>res.json())
        .then((response)=>{
            this.setState({
                productList:response.results,
                isNext: response.next.replace('https://rifqoe.herokuapp.com/','')
            })
        })
        document.addEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');
        if (this.isBottom(wrappedElement)) {
          console.log('header bottom reached');
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
                let next = response.next === null ? null : response.next.replace('https://rifqoe.herokuapp.com/','')
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
                <CurrentPage current='Gaming' dClass='grd-color-6'/>
                <MiniNavigation/>
                <BodyPage results={productList}/>
            </div>
        )
        
    };
}

export default gamingProducts;