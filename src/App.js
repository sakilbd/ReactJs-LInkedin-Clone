
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";

import {BrowserRouter as Router} from "react-router-dom";
import { Switch, Route } from "react-router-dom";





class App extends Component {


render(){ 
return (
    <div className='App'>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route  path="/home">
              <Header/>
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
    
  );
}
}

export default App;
