/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Progress from "react-progress-2";
import "react-progress-2/main.css";
import strip from "../strip.png";
import Search from "./search";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("username")
    };
    this.logout = this.logout.bind(this);
  }
  logout(event) {
    event.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    this.setState({
      username: ""
    });
  }
  render() {
    const username = localStorage.getItem("username");
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top mb-4">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-link"
            onClick={clicker}
          >
            <img src={strip} alt="logo" className="logo" />
          </NavLink>
          <div className="specialBar">
            <Search />
          </div>
          <a
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </a>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                  onClick={clicker}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/trending"
                  activeClassName="active"
                  className="nav-link"
                  onClick={clicker}
                >
                  Trending
                </NavLink>
              </li>
              {username ? <
                li className="nav-item">
                <NavLink
                  exact
                  to="/user_products"
                  activeClassName="active"
                  className="nav-link"
                  onClick={clicker}
                >
                  Feeds
                </NavLink>
              </li>: ''}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/shop"
                  activeClassName="active"
                  className="nav-link"
                  onClick={clicker}
                >
                  Shops
                </NavLink>
              </li>
              <div className="ml-4 d-none d-lg-block d-xl-block">
                <Search />
              </div>
            </ul>
            <ul className="navbar-nav ml-auto">
              <div className="l">
                {username ? (
                  <div className="navbar-nav auth-nav-actions">
                    <a className="nav-link" href="#username">
                      <i className="fa fa-user-circle text-success" /> Hi,{" "}
                      {username}
                    </a>
                    <a className="nav-link logout" onClick={this.logout}>
                      Logout
                    </a>
                  </div>
                ) : (
                    <div className="non-auth-nav-actions navbar-nav">
                      <NavLink
                        exact
                        to="/login"
                        activeClassName="active"
                        className="nav-link"
                        onClick={clicker}
                      >
                        Login
                    </NavLink>
                      <NavLink
                        exact
                        to="/signup"
                        activeClassName="active"
                        className="nav-link"
                        onClick={clicker}
                      >
                        Sign up
                    </NavLink>
                    </div>
                  )}
              </div>
            </ul>
          </div>
        </nav>
        <div className="mt-50" />
      </div>
    );
  }
}

function clicker() {
  Progress.show();
}
export default Navigation;
