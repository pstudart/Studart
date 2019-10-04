import React from 'react'

class StudartNav extends React.Component{
    render(){
        return(

        <nav class="flex-nav">
            <ul>
                <li><a href="www.google.com">item 01</a></li>
                <li><a href="www.google.com">item 02</a></li>
                <li><a href="www.google.com">item 03</a></li>
                <li><a href="www.google.com">item 04</a></li>
                <li><a href="www.google.com">item 05</a></li>
                <li><a href="www.google.com">item 06</a></li>
                <li class="social">
                    <a href="http://twitter.com/patrickstudart">
                        <i class="fa fa-twitter"></i></a>
                </li>
                <li class="social">
                    <a href="http://facebook.com/patrickstudart">
                        <i class="fa fa-facebook"></i></a>
                </li>
                <li class="social">
                    <a href="http://github.com/patrickstudart">
                        <i class="fa fa-github"></i></a>
                </li>
                <li class="social">
                    <a href="http://twitter.com/patrickstudart">
                        <i class="fa fa-instagram"></i></a>
                </li>
            </ul>
        </nav>
        )
    }
}
export default StudartNav;