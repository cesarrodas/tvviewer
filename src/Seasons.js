import './Seasons.css';
import { getShowSeasons } from './showFetch';
import { useState, useEffect } from 'react';
import Season from './Season.js';

function Seasons({showId}){

  const [loading, setLoading] = useState(false);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    if(showId){
      setLoading(true);
      getShowSeasons(showId).then((data) => {
        setSeasons(data.data);
        console.log(data.data);
        setLoading(false);
      });
    }
  }, [showId]);

  const allSeasons = seasons.map((season) => {

    return (
      <Season season={season} key={season.id} />
    );
  });

  const content = seasons.length ?  <div className="allSeasonsContainer">{allSeasons}</div>: 
  <div className="centerContainer">
    <h1 className="centerText">No seasons to display</h1>
  </div>;

  if(loading) {
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    )
  } else {
    return (
      <div className="page">
        {content}
      </div>
    )
  }
}

export default Seasons; 