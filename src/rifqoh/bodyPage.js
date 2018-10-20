import React, { Component } from "react";
import "react-progress-2/main.css";
import ProductDetail from "./productDetails";

class BodyPage extends Component {
  constructor() {
    super();
    this.state = {
      showContent: "",
      results: []
    };
    this.updateOnQuery = this.updateOnQuery.bind(this);
  }

  componentDidMount() {
    this.setPostStateOnProps();
  }

  updateOnQuery(term) {
    this.setState({ showContent: "kkkj" });
  }

  setPostStateOnProps() {
    const { results } = this.props;
    this.setState({
      results: results
    });
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props !== prevProps) {
      this.setPostStateOnProps();
    }
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <div className="container-fluid mt-3">
          <ProductDetail results={results} />
        </div>
      </div>
    );
  }
}

export default BodyPage;
