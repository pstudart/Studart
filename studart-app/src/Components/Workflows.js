import React from 'react';
import StudartLogo from './StudartLogo'
import StudartNav from './StudartNav'
import StudartVideoContainer from './StudartVideoContainer'
import StudartVideo from './StudartVideo'
import uniqueId from '../Images/Thumbnails/CreateUniqueID.png'






function Workflows() {
  return (
    <div className="Workflows">
      <StudartLogo />
        <StudartNav />
        <StudartVideoContainer>
          <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={uniqueId}></StudartVideo>
          <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={uniqueId}></StudartVideo>
          <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={uniqueId}></StudartVideo>
        </StudartVideoContainer>

    </div>
  );
}

export default Workflows;