import React, {Component} from 'react'
import {Layout} from 'antd'
import {withRouter} from 'react-router-dom'
import {routesMap} from '@/router'
import SideBarItem from './SideBarItem'

const {Sider} = Layout
class SideBar extends Component {
  state = {
    collapsed: false,
    openKey: '',
    selectedKey: ''
  }
  render() {
    return (
      <Sider>
        <SideBarItem
          menu={routesMap}
          theme="dark"
          mode="inline"
          ></SideBarItem>
      </Sider>
    )
  }
}
export default withRouter(SideBar)