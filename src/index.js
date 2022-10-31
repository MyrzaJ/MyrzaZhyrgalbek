import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Sugar } from 'react-preloaders';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Sugar background="##11d50d"/>
  </React.StrictMode>,
  document.getElementById('root')
);

