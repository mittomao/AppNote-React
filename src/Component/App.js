import React,{ Component } from 'react';
import './../App.css';
import Nav from './Nav';
import DieuHuongUrl from './DieuHuongUrl';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AlertInfo from './AlertInfo';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
            <Nav></Nav>
            <AlertInfo/>
            <DieuHuongUrl />  
        </div>
        </Router>
    );
  }
}

export default App;