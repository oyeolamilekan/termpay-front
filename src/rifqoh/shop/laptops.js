import React, { Component } from 'react';
import CurrentPage from '../currentPage';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import BodyPage from '../bodyPage';
import MiniNavigationS from './shopNav';
class LaptopIndex extends Component {
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
        const { slug } = this.props.match.params;
        fetch(`https://rifqoe.herokuapp.com/api/q_shop/${slug}/laptops`, {
        }).then(res=>res.json())
        .then((response)=>{
            this.setState({
                productList: response.results,
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

    updateState = () => {
        
    }
    render() {
        const { productList } = this.state;
        const { slug } = this.props.match.params;
        return (
            <div className='wrapper'>
                <CurrentPage current='Shop' dClass='grd-color-7'/>
                <MiniNavigationS shop={slug}/>
                <BodyPage results={productList}/>
            </div>
        )
    };
}

export default LaptopIndex;