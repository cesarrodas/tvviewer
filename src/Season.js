import './Season.css';
import Logo from './assets/notfound.svg';

function Season (props) {
  const season = props.season;
  const seasonImg = season.image ? <img alt="" src={season.image.medium}></img> : <div className="noImage"><img src={Logo} alt="season not available" /></div>
  const webChannel = season.webChannel ? <h4>{season.webChannel.name}</h4> : null;

  return (
    <div className="seasonContainer" key={season.id}>
      {seasonImg}
      <div>
        <h3>Season {season.number}</h3>
        {webChannel}
      </div>
    </div>
  )
}

export default Season;