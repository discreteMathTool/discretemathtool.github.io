import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App, Home, About } from './components'
import { GCDShow, GCDTrainer, GCDTest } from './components/algorithms'
import { axbyShow, axbyTrainer, axbyTest } from './components/algorithms'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="gcd/show" component={GCDShow}/>
      <Route path="gcd/trainer" component={GCDTrainer}/>
      <Route path="gcd/test" component={GCDTest}/>
      <Route path="axby1/show" component={axbyShow}/>
      <Route path="axby1/trainer" component={axbyTrainer}/>
      <Route path="axby1/test" component={axbyTest}/>
    </Route>
  </Router>,
  document.getElementById('mount')
)
