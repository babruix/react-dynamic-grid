import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const renderAll = function() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

renderAll();
window.onresize = () => renderAll();