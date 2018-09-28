import React, { Component } from 'react';
// import MiniNavigation from './mininav';
import CurrentPage from '../currentPage';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import BodyPage from '../bodyPage';
import MiniNavigationS from './shopNav';
import url from '../url';
import Loading from '../loading';

class ShopIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isNext:null,
            isLoading:true,
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
        const { slug } = this.props.match.params;
        fetch(`${url}/api/q_shop/${slug}/all`, {
        }).then(res=>res.json())
        .then((response)=>{
            this.setState({
                productList: response.results,
                isNext: response.next.replace(url,''),
                isLoading:false,
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
                    isNext: next,
                    isLoading: false,
                })
            })
        }
    }

    updateState = () => {
        
    }
    render() {
        const { productList } = this.state;
        const { slug } = this.props.match.params;
        if (this.state.isLoading) {
            return (
                <div className='container pre-loader h-100 text-center'>
                    <Loading/>
                </div>
            )
        } else {
            return (
                <div className='wrapper'>
                    <CurrentPage current='Shop' dClass='grd-color-7'/>
                    <MiniNavigationS shop={slug}/>
                    <BodyPage results={productList}/>
                </div>
            )
        }
    };
}

export default ShopIndex;