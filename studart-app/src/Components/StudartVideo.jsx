import React from 'react'


class StudartVideo extends React.Component{
    render(){
        return(

       <div className="box">
           <div className="box-image">
           <p><img src={this.props.URL} alt={this.props.AltDesc} /></p>
           </div>
           <div className="box-description">

           </div>
       </div>
           
        )
    }
}
export default StudartVideo;


