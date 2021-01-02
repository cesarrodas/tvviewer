import './Home.css';
import { getShowInfo } from './showFetch';
import { useState, useEffect } from 'react';

function Home(props){

  const { showName, setId } = props;

  const [summary, setSummary] = useState('');

  useEffect(() => {
    if(showName){
      getShowInfo(showName).then((data) => {
        setId(data.data.id);
        setSummary(data.data.summary);
      });
    }
  }, [showName, setId]);

  return (
    <div className="page">
      <div>{props.name}</div>
      <div>{summary}</div>
    </div>
  )
}

export default Home; 