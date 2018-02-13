import React, {Component} from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

const App = asyncComponent(() => import('src/pages/App'))

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App}/>
        </Switch>
      </HashRouter>
    )
  }
}