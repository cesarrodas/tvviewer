import './Cast.css';
import { getShowCast } from './showFetch';
import { useState, useEffect } from 'react';
import Actor from './Actor';

function Cast(props){

  //const showId = props.showId;

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(props.showId){
      setLoading(true);
      getShowCast(props.showId).then((data) => {
        console.log(data.data);
        setCast(data.data);
        setLoading(false);
      });
    }
  }, [props.showId]);

  const actors = cast.map((actor) => {
    return <Actor actor={actor}/>
  });

  const actorContent = cast.length ? <div className="actorsContainer">{actors}</div> : 
    <div className="centerContainer">
      <h1 className="centerText">No actors to display</h1>
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
      {actorContent}
    </div>
    )
  }
}

export default Cast; 