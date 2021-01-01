import { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
//import { createBrowserHistory } from "history";
import './App.css';
import Home from './Home';

///const customHistory = createBrowserHistory();

function App() {

  const [search, setSearch] = useState('');

  return (
    <Router >
      <div className="app">
        <nav>
          <ul>
            <li className="title">
              <Link to="/">Tv Viewer</Link>
            </li>
            <li id="searchContainer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="white" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              <input name="search" value={search} onChange={(e)=> {setSearch(e.target.value)}}/>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cast">Cast</Link>
            </li>
            <li>
              <Link to="/seasons">Seasons</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route className="page" path="/cast">
            {/* <About /> */}
          </Route>
          <Route className="page" path="/seasons">
            {/* <Users /> */}
          </Route>
          <Route className="page" path="/">
            {/* <Home /> */}
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
