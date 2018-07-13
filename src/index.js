import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Game } from './Game.jsx';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  