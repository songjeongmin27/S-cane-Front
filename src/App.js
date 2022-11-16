import './App.css';
import Login from "./login";
import Header from './header';
import Map from "./map";
import React, {useEffect} from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route } from "react-router-dom";
import Pin from './pin';
import Notification from './notice';
import Warning from './warning';



function App() {
  return (      
    <div className="App">
    <BrowserRouter>
    
        <Header/>
        <Map>
        <Route exact path='/' component={Pin} key='1'></Route>
        <Route exact path='/' component={Notification}></Route>
        </Map>
        {/* <Warning/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
