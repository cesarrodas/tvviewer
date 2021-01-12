import { useState, useEffect } from 'react';
 import { Router } from 'react-router'
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Info from './Info';
import Cast from './Cast';
import Home from './Home';
import Seasons from './Seasons';
import { getShowInfo } from './showFetch';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();


function App() {

  const [search, setSearch] = useState('');
  const [submitted, setSubmit] = useState('');
  const [showId, setShowId] = useState('');
  const [showData, setShowData] = useState({ ok: false });
  const [loading, setLoading] = useState(false);

  const keyPressedHandler = (e) => {
    if(e.charCode === 13) {
      setSubmit(search);
      customHistory.push('/info');
    }
  };

  useEffect(() => {
    if(submitted) {
      setLoading(true);
      getShowInfo(submitted).then((data) => {
        setShowId(data.data.id);
        setShowData(Object.assign({}, data.data, { ok: true }));
        setLoading(false);
      }).catch(() => {
        setShowData({ ok: false });
        setLoading(false);
      });
    }
  }, [submitted]);

  return (
    <Router history={customHistory} >
      <div className="app">
        <nav>
          <ul>
            <li className="title">
              <Link to="/">Tv Viewer</Link>
            </li>
            <li id="searchContainer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="white" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              <input onKeyPress={keyPressedHandler} name="search" value={search} onChange={(e)=> {setSearch(e.target.value)}}/>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/cast">Cast</Link>
            </li>
            <li>
              <Link to="/seasons">Seasons</Link>
            </li>
          </ul>
        </nav>
        { console.log("render")}
        <Switch>
          <Route className="page" path="/cast">
            <Cast showId={showId} />
          </Route>
          <Route className="page" path="/seasons">
            <Seasons showId={showId} />
          </Route>
          <Route className="page" path="/info">
            <Info showData={showData} loading={loading} />
          </Route>
          <Route path="/">
            <Home setSearch={setSearch} keyPressedHandler={keyPressedHandler} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;