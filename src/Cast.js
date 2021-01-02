import { getShowCast } from './showFetch';
import { useState, useEffect } from 'react';

function Cast(props){

  const showId = props.showId;

  const [cast, setCast] = useState('');

  useEffect(() => {
    if(showId){
      getShowCast(showId).then((data) => {
        setCast(JSON.stringify(data.data));
      });
    }
  }, [showId]);

  return (
    <div className="page">
      <h1 >Show Cast</h1>
      {cast}
    </div>
  )
}

export default Cast; 