import React from 'react'

class StudartNav extends React.Component{
    render(){
        return(

        <nav className="flex-nav">
            <ul>
                <li><a href="www.google.com">My Work</a></li>
                <li><a href="www.google.com">About Me</a></li>
                <li><a href="www.google.com">Training</a></li>
                <li><a href="www.google.com">item04</a></li>
                <li><a href="www.google.com">item05</a></li>
                <li><a href="www.google.com">item06</a></li>
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
                <li className="social">
                    <a href="http://twitter.com/patrickstudart">
                        <i className="fa fa-instagram"></i></a>
                </li>
            </ul>
        </nav>
        )
    }
}
export default StudartNav;