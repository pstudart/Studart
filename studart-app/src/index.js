import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import './CSS/StudartNav.css';
import './CSS/StudartLogo.css';
import './CSS/StudartVideo.css';
import './CSS/StudartVideoContainer.css';
/*import App from './App';*/
import Router from "./Components/Router";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
