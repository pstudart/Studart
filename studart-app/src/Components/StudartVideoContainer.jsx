import React from 'react'
import StudartVideo from './StudartVideo'
import drone from '../Images/Thumbnails/drone.png'

class StudartVideoContainer extends React.Component{
    render(){
        return(

    <div class="VideosWrapper">
            <h3 class="VideosHeaderText">My Video Collection</h3>
        <div class="Videos">
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>
            <StudartVideo VideoUrl="www.google.com" AltDesc="infowise training" Description="getting started with infowise" ThumbnailImage={drone}/>

        </div>
    </div>
        )
    }
}
export default StudartVideoContainer;