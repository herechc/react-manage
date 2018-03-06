import React, {Component} from 'react'
import {Layout} from 'antd'
import {withRouter,Route} from 'react-router-dom'
import SideBar from './SideBar'
import '@/assets/style.scss'
import {routesMap} from '@/router'
const {Content, Footer, Header} = Layout

class App extends Component {

  render(){
    return(
      <Layout>
        <SideBar></SideBar>
        <Layout>
          <Header></Header>
          <Content>
            {
              routesMap.map((route,index)=>{
                return !route.hidden && <Route key={index} path={route.path} component={route.component}></Route>
              })
            }
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(App)