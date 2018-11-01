/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./home/products";
import Trending from "./trending/trending";
import Trending_p from "./trending/trending_p";
import Trending_l from "./trending/trending_l";
import Trending_g from "./trending/trending_g";
import Shop from "./shop/index";
import phoneProducts from "./home/phoneProducts";
import laptopsProducts from "./home/laptopsProducts";
import gamingProducts from "./home/gamingProducts";
import ShopIndex from "./shop/p_index";
import LaptopIndex from "./shop/laptops";
import GamingIndex from "./shop/gaming";
import PhoneIndex from "./shop/phone";
import Results from "./results";
import NotFound from "./404";
import Navigation from "./nav";
import Login from "./accounts/Login";
import SignUp from "./accounts/Signup";
import UserIndex from "./accounts/user_products";
import genreList from "./accounts/genreChoice";

class Main extends Component {
  render() {
    return (
      <div className="con">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/phone" component={phoneProducts} />
          <Route path="/laptops" component={laptopsProducts} />
          <Route path="/gaming" component={gamingProducts} />
          <Route path="/trending" component={Trending} />
          <Route path="/trending_p" component={Trending_p} />
          <Route path="/trending_l" component={Trending_l} />
          <Route path="/trending_g" component={Trending_g} />
          <Route exact path="/results" component={Results} />
          <Route path="/shop" component={Shop} />
          <Route path="/user_products" component={UserIndex} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/pick" component={genreList} />
          <Route path="/:slug/all" component={ShopIndex} />
          <Route path="/:slug/laptops" component={LaptopIndex} />
          <Route path="/:slug/gaming" component={GamingIndex} />
          <Route path="/:slug/phone" component={PhoneIndex} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
