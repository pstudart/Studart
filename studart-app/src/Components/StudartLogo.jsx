import React from 'react'
import Logo from '../Images/Logo_500w150h.png'

class StudartLogo extends React.Component{
    render(){
        return(

       <div class="mainlogo">
           <p><img src={Logo} alt="Logo" /></p>
       </div>
        )
    }
}
export default StudartLogo;