import React from 'react'

class StudartNav extends React.Component{
    render(){
        return(

        <nav className="flex-nav">
            <ul>
                <li><a href="www.google.com">Event Handlers</a></li>
                <li><a href="www.google.com">Workflows</a></li>
                <li><a href="www.google.com">API's</a></li>
                <li><a href="www.google.com">My Resume</a></li>
                
                
                
                <li className="social">
                    <a href="http://twitter.com/patrickstudart">
                        <i className="fa fa-twitter"></i></a>
                </li>
                <li className="social">
                    <a href="http://facebook.com/patrickstudart">
                        <i className="fa fa-facebook"></i></a>
                </li>
                <li className="social">
                    <a href="http://github.com/patrickstudart">
                        <i className="fa fa-github"></i></a>
                </li>
            </ul>
        </nav>
        )
    }
}
export default StudartNav;