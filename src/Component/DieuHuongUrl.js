import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Blog from "./Blog";
import Main from './Main';

  
class DieuHuongUrl extends Component {

    render() {
        return (
            
            <div>
               <Route exact path="/home">
                   <Main />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
            </div>
        );
    }
}

export default DieuHuongUrl;