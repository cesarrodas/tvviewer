import './Actor.css';
import Logo from './assets/notfound.svg';

function Actor(props) {

  const actor = props.actor;

  const characterImage = actor.character.image ? 
  <img className="bigImage" src={actor.character.image.medium} alt="" /> :
  <div className="noBigImage"><img src={Logo} alt="character not available" /></div>

  const actorImage = actor.character.image ? 
  <img className="littleImage" src={actor.person.image.medium} alt="" /> : 
  <div className="noLittleImage"><img src={Logo} alt="actor not available" /></div>

  return (
    <div className="actor" key={actor.character.id}>
      <div className="imagesContainer">
        {characterImage}
        {actorImage}
      </div>
      <div>
        <h3>{actor.character.name}</h3>
        <p>Actor: {actor.person.name}</p>
      </div>
    </div>
  )
}

export default Actor;