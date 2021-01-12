import backgroundtv from './assets/tv-by-diego-gonzalez.jpg';
import './Home.css';
//import { useState } from 'react';

function Home({ keyPressedHandler, setSearch }) {
  
  return (
    <div className="page front-page">
      <img className="bg" alt="" src={backgroundtv} />
      <div className="frontPageContainer">
        <div className="frontPageContent">
          <h1 className="phrase">Search:</h1>
          <input className="showInput" onKeyPress={keyPressedHandler} name="tvshowsearch"  onChange={(e)=> {setSearch(e.target.value)}} />
        </div>
      </div>
    </div>
  )
}

export default Home;