import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Hello from './components/hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello name="le monde" />
  </React.StrictMode>
);


// reportWebVitals();
