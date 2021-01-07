import './Home.css';
//import { getShowInfo } from './showFetch';
//import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

function Home({showData}){

  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);

  console.log(showData);

  const content = () => {
    if(showData.ok){
      const name = showData.name;
      const summary = showData.summary;
      const image = showData.image.original;
      return (
        <div className="page infoPage">
          <div className="showImageContainer"><img className="showImage" src={image} alt="" /></div>
          <div className="summaryContainer">
            <h1>{name}</h1>
            { ReactHtmlParser(summary) }
          </div>
        </div>
      )
    } else {
      return (
        <div className="page notFound">
          <h2>Show not found.</h2>
        </div>
      )
    }
  }
  // const content = () => {
  //   if(true){
  //     return (
  //       <div className="page infoPage">
  //         <div className="showImageContainer"><img className="showImage" src={image} alt="" /></div>
  //         <div className="summaryContainer">
  //           <h1>{name}</h1>
  //           { ReactHtmlParser(summary) }
  //         </div>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="page notFound">
  //         <h2>Show not found.</h2>
  //       </div>
  //     )
  //   }
  // }

  return content();
}

export default Home; 