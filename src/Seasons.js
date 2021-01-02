import { getShowSeasons } from './showFetch';
import { useState, useEffect } from 'react';

function Seasons(props){

  const showId = props.showId;

  const [seasons, setSeasons] = useState('');

  useEffect(() => {
    if(showId){
      getShowSeasons(showId).then((data) => {
        setSeasons(JSON.stringify(data.data));
      });
    }
  }, [showId]);

  return (
    <div className="page">
      <h1> Show Seasons </h1>
      {seasons}
    </div>
  )
}

export default Seasons; 