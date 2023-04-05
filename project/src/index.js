import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import App2 from './App2';
import App3 from './App3';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App3 />
    </BrowserRouter>
  </React.StrictMode>
);

