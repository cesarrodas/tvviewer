import './Info.css';
import ReactHtmlParser from 'react-html-parser'; 

function Info({showData, loading}){

  console.log(showData);

  const content = () => {
    if(loading){
      return (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      )
    } else {
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
            <h1 className="centerText">Show not found</h1>
          </div>
        )
      }
    }
  }

  return content();
}

export default Info; 