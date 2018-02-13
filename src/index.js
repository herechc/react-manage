import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader'
import Route from './router/'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}
render(Route)

if(module.hot){
  module.hot.accept('./router/',()=>{
    render(Route)
  })
}

registerServiceWorker();