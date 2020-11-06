import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Containers/layout'
import 'canvas-gauges/gauge.min.js'
class App extends Component {
  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path = "/" component = {Layout}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;