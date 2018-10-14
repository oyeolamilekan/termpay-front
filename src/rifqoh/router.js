/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './home/products';
import Trending from './trending/trending';
import Trending_p from './trending/trending_p';
import Trending_l from './trending/trending_l';
import Trending_g from './trending/trending_g';
import Shop from './shop/index'
import phoneProducts from './home/phoneProducts';
import laptopsProducts from './home/laptopsProducts';
import gamingProducts from './home/gamingProducts';
import ShopIndex from './shop/p_index';
import LaptopIndex from './shop/laptops';
import GamingIndex from './shop/gaming';
import PhoneIndex from './shop/phone';
import Results from './results';
import NotFound from './404';
import Navigation from './nav';

class Main extends Component {
    render () {
        return (
        <div className='con'>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Products}></Route>
                <Route path='/phone' component={phoneProducts}></Route>
                <Route path='/laptops' component={laptopsProducts}/>
                <Route path='/gaming' component={gamingProducts}></Route>
                <Route path='/trending' component={Trending}></Route>
                <Route path='/trending_p' component={Trending_p}></Route>
                <Route path='/trending_l' component={Trending_l}></Route>
                <Route path='/trending_g' component={Trending_g}></Route>
                <Route exact path='/results' component={Results}></Route>
                <Route path='/:slug/all' component={ShopIndex}/>
                <Route path='/:slug/laptops' component={LaptopIndex}/>
                <Route path='/:slug/gaming' component={GamingIndex}/>
                <Route path='/:slug/phone' component={PhoneIndex}/>
                <Route path='/shop' component={Shop}/>
                <Route path='' component={NotFound}/>
            </Switch>
        </div>
        )
    }
}

export default Main;