import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './Cars.css';
import Cars from './Cars.js';
import car from './Cars_list.js';
import Menu from './Menu'
import Video from './video-background'


 ReactDOM.render(<Cars carlist = {car}/>, document.getElementById('root'));
ReactDOM.render(<Menu />, document.getElementById('head'));
ReactDOM.render(<Video />, document.getElementById('video-bg'));



