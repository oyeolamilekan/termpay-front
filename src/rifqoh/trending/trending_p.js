/*
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from "react";
import Progress from "react-progress-2";
import "react-progress-2/main.css";
import CurrentPage from "../currentPage";
import BodyPage from "../bodyPage";
import MiniNavigationT from "./miniNavT";
import url from "../url";
import Loading from "../loading";
import MiniLoading from "../miniLoading";

class Trending_p extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      isNext: null,
      isLoading: true,
      isNextLoading: false
    };
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
  componentDidMount() {
    Progress.hide();
    fetch(`${url}/api/phone_t/`, {})
      .then(res => res.json())
      .then(response => {
        this.setState({
          productList: response.results,
          isNext: response.next ? response.next.replace(url, "") : "",
          isLoading: false
        });
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
      this.loadMore();
    }
  };

  loadMore = () => {
    let next = `${url}${this.state.isNext}`;
    if (next !== null) {
      fetch(next, {})
        .then(res => res.json())
        .then(response => {
          let resultss = this.state.productList;
          let newpost = resultss.concat(response.results);
          let next =
            response.next === null ? "" : response.next.replace(url, "");
          this.setState({
            productList: newpost,
            isNext: next,
            isNextLoading: false
          });
        });
    }
  };

  // Renders the given page to the user
  render() {
    const { productList } = this.state;
    const { isNextLoading } = this.state;

    if (this.state.isLoading) {
      return (
        <div className="container pre-loader mt-100 h-100 text-center">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="trending">
          <CurrentPage current="Trending" dClass="grd-color-2" />
          <MiniNavigationT />
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

export default Trending_p;
