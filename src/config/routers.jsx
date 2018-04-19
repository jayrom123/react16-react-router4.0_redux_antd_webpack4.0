/*
* create by Roger on 2017-09-08
*
* */

import React, {Component} from "react";
import {HashRouter,BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

/*
 * pages
 */
import AppWrapper from "../pages/AppWrapper.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Blob from "../pages/Blob.jsx";

let Routers = (
  <BrowserRouter >
    <div>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blob" component={Blob}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  </BrowserRouter>
);

// let Routers =  <div>Roger</div>;


export default Routers;

