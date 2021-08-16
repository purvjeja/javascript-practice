import { BrowserRouter as Router,Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router";
export default function Example1() {
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
      let match1 = useRouteMatch();
    
      return (
        <div>
          <h2>Topics</h2>
    
          <ul>
            <li>
              <Link to={`${match1.url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${match1.url}/props-v-state`}>
                Props v. State
              </Link>
            </li>
          </ul>
    
          <Switch>
            <Route path={`${match1.path}/:topicIdd`}>
              <Topic />
            </Route>
            <Route path={match1.path}>
              <h3>Please select a topic.</h3>
            </Route>
          </Switch>
        </div>
      );
}
function Topic() {
  let { topicIdd } = useParams();
  return <h3>Requested topic ID: {topicIdd}</h3>;
}
