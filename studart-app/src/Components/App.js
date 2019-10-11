import React from 'react';
/*import './App.css';*/
import StudartNav from './StudartNav'
import StudartLogo from './StudartLogo'
import StudartVideoContainer from './StudartVideoContainer'
import StudartVideo from './StudartVideo'
import uniqueId from '../Images/Thumbnails/CreateUniqueID.png'


function App() {
  return (
    <div className="App">
      <StudartLogo />
        <StudartNav />
        <StudartVideoContainer>
          <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={uniqueId}></StudartVideo>
          <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={uniqueId}></StudartVideo>
          <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={uniqueId}></StudartVideo>
          <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={uniqueId}></StudartVideo>
        </StudartVideoContainer>

    </div>
  );
}

export default App;


