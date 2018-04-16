/**
 * Created by Administrator on 2017/9/6.
 */

import React, {Component} from "react";
import {HashRouter,BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";

import Home from "../home/index.jsx";
import About from "../about/index.jsx";
import Blob from "../blob/index.jsx";

let AppWrapper = function (props) {
    return (
        <div className="app-wrapper">
            <div className="app-header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blob">Blob</Link>
                    </li>
                    <li>
                        <Link to="/other">Other</Link>
                    </li>
                </ul>
            </div>
            <div className="app-body">
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/blob" component={Blob}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default AppWrapper;

