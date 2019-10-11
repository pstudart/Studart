import React from 'react'
import BigLogo from '../Images/MainLogo/Logo_500w150h.png'
import SmallLogo from '../Images/MainLogo/Logo_200w75h.png'

class StudartLogo extends React.Component{
    render(){
        return(

       <div className="mainlogo">
           <p><img className="logo-big" src={BigLogo} alt="Logo" /></p>
           <p><img className="logo-small" src={SmallLogo} alt="SmallLogo" /></p>
       </div>
        )
    }
}
export default StudartLogo;