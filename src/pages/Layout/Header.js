import React, {Component} from 'react'
import {Breadcrumb} from 'antd'
import {withRouter} from 'react-router-dom'
class Header extends Component{
  render(){
    return(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      
    )
  }
}

export default withRouter(Header)