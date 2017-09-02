import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Excel from './Excel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Excel />,
    document.getElementById('root'));
registerServiceWorker();
