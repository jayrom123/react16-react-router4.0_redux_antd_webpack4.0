
/**
 * Created by Administrator on 2017/9/6.
 */

import React, {Component} from "react";
import {Link} from "react-router-dom";

let AppWrapper = function (props){
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
        {props.children}
      </div>
    </div>
  )
};

export default AppWrapper;

