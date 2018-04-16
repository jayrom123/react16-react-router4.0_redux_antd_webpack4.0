/**
 * Created by Administrator on 2018/4/16.
 */

import React,{Component} from 'react';
import {HashRouter,BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from './main/index.jsx'

let Output = (props)=>{
   return (
           <BrowserRouter>
               <Main />
           </BrowserRouter>
       )
}


export default Output;