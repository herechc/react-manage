import React from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router-dom'

const renderMenuItem = ({ key, title, icon, path,hidden, ...props }) => 
  {
    return !hidden && <Menu.Item 
      key={key || path}
      {...props}>
      <Link to={path || key}>
        {icon && <Icon type={icon}/>}
        <span className="nav-tit">{title}</span>
      </Link>
    </Menu.Item>
  }
const renderSubMenu = ({key, title,icon,path,children,...props}) => 
  <Menu.SubMenu 
    key={key || path}
    title={
      <span>
        {icon && <Icon type={icon} />}
        <span className="nav-tit">{title}</span>
      </span>
    }
    {...props}>
    {children && children.map(item=>renderMenuItem(item))}
  </Menu.SubMenu>

export default ({menu, ...props}) => <Menu {...props}>
  {menu && menu.map(
    item => item.children && item.children.length ? renderSubMenu(item) : renderMenuItem(item))
  }
</Menu>