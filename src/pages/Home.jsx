/**
 * Created by Administrator on 2017/9/6.
 */


import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { turnModal } from "../redux/actions/home/actions"

import { Button,Modal } from 'antd';

// import {}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleButtonClick(){
    this.props.actions.turnModal(true)
  }
  handleOk(){
    console.log("ok")
  }
  handleCancel(){
    this.props.actions.turnModal(false)
  }
  render() {
    const {visible}  = this.props;

    console.log('render')
    return (
      <div className="pages-home">
        <Button type="primary" onClick={this.handleButtonClick.bind(this)}>Primary</Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

// 将 store 中的数据作为 props 绑定到 Home
const mapStateToProps = (state, ownProps) => {
  let { Test } = state;
  return {
    visible: Test.visible
  }
};

// 将 action 作为 props 绑定到 Home
const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({ turnModal }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);