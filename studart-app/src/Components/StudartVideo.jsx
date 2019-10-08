import React from 'react'


class StudartVideo extends React.Component{
    render(){
        return(

       <div className="videobox">
           <a href={this.props.VideoUrl}>
               <img src={this.props.ThumbnailImage} alt={this.props.AltDesc} />
            
           
           <h4 className="videobox-desc">
                {this.props.Description}
           </h4>
           </a>
        </div>
       
           
        )
    }
}
export default StudartVideo;


