import React from 'react';

class TopSection extends React.Component{
    render(){
        return 
        
        <nav class="flex-nav">
            <ul>
                <li><a href="#">item 01</a></li>
                <li><a href="#">item 02</a></li>
                <li><a href="#">item 03</a></li>
                <li><a href="#">item 04</a></li>
                <li><a href="#">item 05</a></li>
                <li><a href="#">item 06</a></li>
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

    }
}
export default TopSection;