import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
class Nav extends Component {

    render() {
        return (
           
            <ul className="nav nav-tabs mb-3" id="navId">
                <li className="nav-item">
                <NavLink  to = "/home" className="nav-link active">Note</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to = "/blog" className="nav-link"> Blog</NavLink>
                </li> 
            </ul>
           
        );
    }
}

export default Nav;