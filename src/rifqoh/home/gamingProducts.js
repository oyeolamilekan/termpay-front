import React, { Component } from 'react';
import MiniNavigation from './mininav';
import CurrentPage from '../currentPage';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import BodyPage from '../bodyPage';
import url from '../url';
import Loading from '../loading';
import MiniLoading from '../miniLoading';

class gamingProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isNext:null,
            isLoading:true,
            isNextLoading:false,
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
        fetch(`${url}/api/gaming/`, {
        }).then(res=>res.json())
        .then((response)=>{
            this.setState({
                productList:response.results,
                isNext: response.next ? response.next.replace(url,'') : '',
                isLoading:false,
            })
        })
        document.addEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');
        if (this.isBottom(wrappedElement)) {
            this.setState({
                isNextLoading:true,
            })
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
                let next = response.next === null ? '' : response.next.replace(url,'')
                this.setState({
                    productList:newpost,
                    isNext: next,
                    isNextLoading:false
                })
            })
        }
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.trackScrolling);
    }
    
    render() {
        const { productList } = this.state;
        const { isNextLoading } = this.state;
        if (this.state.isLoading) {
            return (
                <div className='container pre-loader mt-100 h-100 text-center'>
                    <Loading/>
                </div>
            )
        } else {
            return (
                <div>
                    <CurrentPage current='Gaming' dClass='grd-color-6'/>
                    <MiniNavigation/>
                    <BodyPage results={productList}/>
                    {isNextLoading ? <div className='text-center'><MiniLoading/></div> : ''}
                </div>
            )
        }
    };
}

export default gamingProducts;