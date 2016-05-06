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
import { FractionShow, FractionTrainer, FractionTest } from './components/algorithms'
import { ConvergentsShow, ConvergentsTrainer, ConvergentsTest } from './components/algorithms'
import { InverseShow, InverseTrainer, InverseTest } from './components/algorithms'

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
      <Route path="fraction/show" component={FractionShow}/>
      <Route path="fraction/trainer" component={FractionTrainer}/>
      <Route path="fraction/test" component={FractionTest}/>
      <Route path="convergents/show" component={ConvergentsShow}/>
      <Route path="convergents/trainer" component={ConvergentsTrainer}/>
      <Route path="convergents/test" component={ConvergentsTest}/>
      <Route path="inverse/show" component={InverseShow}/>
      <Route path="inverse/trainer" component={InverseTrainer}/>
      <Route path="inverse/test" component={InverseTest}/>    
    </Route>
  </Router>,
  document.getElementById('mount')
)
