import './Seasons.css';
import { getShowSeasons } from './showFetch';
import { useState, useEffect } from 'react';

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
    const seasonImg = season.image ? <img alt="" src={season.image.medium}></img> : <div className="empty"></div>

    return (
      <div key={season.id}>
        {seasonImg}
        Season {season.number}
      </div>
    );
  });

  if(loading) {
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    )
  } else {
    return (
      <div className="page">
        <h1> Show Seasons </h1>
        {allSeasons}
      </div>
    )
  }
}

export default Seasons; 