import React from 'react'


class StudartVideoContainer extends React.Component{
    render(){
        return(

    <div class="VideosWrapper">
            <h3 class="VideosHeaderText">My Video Collection</h3>
        <div class="Videos">
        {this.props.children}
        </div>
    </div>
        )
    }
}
export default StudartVideoContainer;