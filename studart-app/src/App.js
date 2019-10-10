import React from 'react';
/*import './App.css';*/
import StudartNav from './Components/StudartNav'
import StudartLogo from './Components/StudartLogo'
import StudartVideoContainer from './Components/StudartVideoContainer'
import StudartVideo from './Components/StudartVideo'
import uniqueId from './Images/Thumbnails/CreateUniqueID.png'






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
