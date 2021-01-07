import './Cast.css';
import { getShowCast } from './showFetch';
import { useState, useEffect } from 'react';

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
    return (
      <div className="actor" key={actor.character.id}>
        <img className="characterImage" src={actor.character.image.medium} alt="" />
        <img className="actorImage" src={actor.person.image.medium} alt="" />
        <h3>{actor.person.name}</h3>
      </div>
    );
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
      <h1 >Show Cast</h1>
      {actorContent}
    </div>
    )
  }
}

export default Cast; 