/**
 * Created by Administrator on 2017/9/6.
 */

import React, {Component} from "react";
import Tabs from '../../components/tabs/index.js'

const tabsPanesConfig = [
  {tab:'roger',key:1,content:'roger is hayson'},
  {tab:'jay',key:2,content:'jay is hayson'},
];

let Blob = function () {
  return (
    <div>
      <Tabs tabPanes={tabsPanesConfig}/>
      Blob
    </div>
  )
};


export default Blob;

