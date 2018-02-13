import React, {Component} from 'react'
import {Layout} from 'antd'
import {withRouter} from 'react-router-dom'
import SideBar from './Layout/SideBar'
import Header from './Layout/Header'
import '@/assets/style.scss'

const {Content, Footer, Header} = Layout

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Layout>
        <SideBar></SideBar>
        <Layout>
          <Header></Header>
          <Content>main content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRoter(App)