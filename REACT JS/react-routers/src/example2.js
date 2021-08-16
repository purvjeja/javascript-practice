import { BrowserRouter as Router,Route, Link, Switch, useRouteMatch } from "react-router-dom";
export default function Example2() {

  let match = useRouteMatch();
    return (
        <Router>
          <div>
            <ol>
              <li>
                <Link to={`${match.url}/`}>Home</Link>
              </li>
              <li>
                <Link to={`${match.url}/about`}>About</Link>
              </li>
              <li>
                <Link to={`${match.url}/topics`}>Topics</Link>
              </li>
            </ol>
    
            <Switch>
              <Route path={`${match.url}/about`}>
                <About />
              </Route>
              <Route path={`${match.url}/topics`}>
                <Topics />
              </Route>
              <Route path={`${match.url}/`}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
    function Home() {
      return <h2>Home Page</h2>;
    }
    
    function About() {
      return <h2>About Page</h2>;
    }
    
    function Topics() {
  
      return (
        <div>
          <h2>Topic</h2>
        </div>
      );
}
