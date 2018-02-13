import React, {Component} from 'react'
import {Layout} from 'antd'
import {withRouter} from 'react-router-dom'
import {menus} from 'utils/menu'
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
          menu={menus}
          theme="dark"
          mode="inline"
          ></SideBarItem>
      </Sider>
    )
  }
}
export default withRouter(SideBar)