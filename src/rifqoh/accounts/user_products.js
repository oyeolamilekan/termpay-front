import React, { Component } from "react";
import CurrentPage from "../currentPage";
import Progress from "react-progress-2";
import "react-progress-2/main.css";
import BodyPage from "../bodyPage";
import MiniNavigationS from "../shop/shopNav";
import url from "../url";
import Loading from "../loading";
import MiniLoading from "../miniLoading";
import Axios from "axios";

class UserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      isNext: null,
      isLoading: true,
      isNextLoading: false
    };
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentWillUpdate() {
    Progress.hide();
  }

  componentDidMount() {
    Progress.hide();
    const { slug } = this.props.match.params;
    Axios.get(`${url}/api/user_products/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("username")
      }
    }).then(res => {
      this.setState({
        productList: res.data.results,
        isNext: res.data.next ? res.data.next.replace(url, "") : "",
        isLoading: false
      });
      console.log(res.data.next)
    });
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("root");
    if (this.isBottom(wrappedElement)) {
      this.setState({
        isNextLoading: true
      });
      // document.removeEventListener('scroll', this.trackScrolling);
      this.loadMore();
    }
  };

  loadMore = () => {
    let next = `${url}${this.state.isNext}`;
    console.log(next)
    if (next !== null) {
      Axios.get(next, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("username")
        }
      }).then(res => {
        let resultss = this.state.productList;
        let newpost = resultss.concat(res.data.results);
        let next = res.data.next === null ? "" : res.data.next.replace(url, "");
        this.setState({
          productList: newpost,
          isNext: next,
          isNextLoading: false
        });
      });
    }
  };

  updateState = () => {};
  render() {
    const { productList } = this.state;
    const { isNextLoading } = this.state;
    const { slug } = this.props.match.params;
    if (this.state.isLoading) {
      return (
        <div className="container pre-loader mt-100 h-100 text-center">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <CurrentPage current="Feeds" dClass="grd-color-7" />
          <BodyPage results={productList} />
          {isNextLoading ? (
            <div className="text-center">
              <MiniLoading />
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  }
}

export default UserIndex;
