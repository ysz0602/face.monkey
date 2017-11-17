import React from 'react';
import PropTypes from 'prop-types';
import BodyChild from './bodychild';

import { Input } from 'antd';

export default class BodyIndex extends React.Component {
  constructor(){
    super();
    this.state={
      uername:'Parry',
      age:20
    }
  }
  changeUserInfo(age){
    this.setState({age:age});

  }
  handleChildValueChange(e){
    this.setState({age:e.target.value});
  }
  render(){
    return (
      <div>
        <h2>页面的主题内容</h2>
        <p>接收到的父页面的属性：userid: {this.props.userid}
					username: {this.props.username}</p>
        <p>age:{this.state.age}</p>
        <Input placeholder="Basic usage"/>
        <Input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)}/>
        <BodyChild {...this.props} id={4} handleChildValueChange = {this.handleChildValueChange.bind(this)} />
      </div>
    )
  }
}
const defaultProps = {
  username: 'Admin'
}
BodyIndex.propTypes = {
  userid: PropTypes.number.isRequired
}
BodyIndex.defaultProps = defaultProps;
