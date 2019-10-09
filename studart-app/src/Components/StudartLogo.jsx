import React from 'react'
import Logo from '../Images/MainLogo/Logo_500w150h.png'

class StudartLogo extends React.Component{
    render(){
        return(

       <div className="mainlogo">
           <p><img src={Logo} alt="Logo" /></p>
       </div>
        )
    }
}
export default StudartLogo;