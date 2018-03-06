import React, {Component} from 'react'
import {Breadcrumb} from 'antd'
// import {Link} from 'react-router-dom'
class BreadcrumbCustom extends Component{
  render(){
    return(
      <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default BreadcrumbCustom
