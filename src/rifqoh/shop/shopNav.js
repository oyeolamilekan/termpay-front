import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Progress from "react-progress-2";
import "react-progress-2/main.css";

class MiniNavigationS extends Component {
  render() {
    const { shop } = this.props;
    return (
      <div className="bg-white p-2">
        <span className="mr-2">
          <NavLink
            to={`/${shop}/all`}
            className="nav-link d-inline text-dark"
            onClick={this.clicker}
          >
            Index
          </NavLink>
        </span>
        <span className="mr-2">
          <NavLink
            to={`/${shop}/phone`}
            className="nav-link d-inline text-dark"
            onClick={this.clicker}
          >
            Phone
          </NavLink>
        </span>
        <span className="mr-2">
          <NavLink
            to={`/${shop}/laptops`}
            className="nav-link d-inline text-dark"
            onClick={this.clicker}
          >
            Laptops
          </NavLink>
        </span>
        <span className="mr-2">
          <NavLink
            to={`/${shop}/gaming`}
            className="nav-link d-inline text-dark"
            onClick={this.clicker}
          >
            Gaming
          </NavLink>
        </span>
      </div>
    );
  }
  clicker() {
    Progress.show();
  }
}
export default MiniNavigationS;
