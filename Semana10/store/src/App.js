import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from "./Routes"
import NavTop from './components/NavTop'

export default function App() {
  return (
    <Router>
      <NavTop />
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  )
}

