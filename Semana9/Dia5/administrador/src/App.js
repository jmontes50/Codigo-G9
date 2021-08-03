import { BrowserRouter as Router, Switch } from "react-router-dom"
import Routes from "./Routes"

export default function App() {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  )
}
