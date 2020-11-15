import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './components/blog/Blog';
import Admin from './components/admin/Admin';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/admin">
            <div>test</div>
            <Admin/>
          </Route>
          <Route path="/">
            <Blog/>
          </Route>
        </Switch>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>


      </div>
    </Router>
  );
}

export default App;
