import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Example2 from "./example2";
import Example1 from "./example1";

export default function App() {
    return (
      <Router>  
        <Switch>
          <Route path="/example1" component={Example1} />
          <Route path="/example2" component={Example2} />
        </Switch>
      </Router>
    )
}


