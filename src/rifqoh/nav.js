/**
 * Copyright (c) 2018-present, A68, Inc.
 *
 * This source code is free
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Progress from 'react-progress-2';
import 'react-progress-2/main.css';
import strip from '../strip.png';
import Search from './search';
class Navigation extends Component {
   
    render() {
        return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top mb-4">
        <NavLink exact to='/' activeClassName='active' className='nav-link' onClick={clicker}><img src={strip} alt='logo' className='logo'/></NavLink>
            <div className='specialBar'>
                <Search/>
            </div>
            <a className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </a>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to='/' activeClassName='active' className='nav-link' onClick={clicker}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to='/trending' activeClassName='active' className='nav-link' onClick={clicker}>Trending</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to='/shop' activeClassName='active' className='nav-link' onClick={clicker}>Shops</NavLink>
                    </li>
                    <div  className='ml-4 d-none d-lg-block d-xl-block'>
                        <Search/>
                    </div>
                </ul>
                
            </div>
            </nav>
            <div className='mt-50'></div>
            </div>
        )
    } 
}

function clicker() {
    Progress.show();
}
export default Navigation;