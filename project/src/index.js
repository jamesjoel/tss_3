import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import App2 from './App2';
import App3 from './App3';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AdminAuthReducer from './redux/AdminAuthReducer';

let rootReduer = combineReducers({
  AdminAuthReducer
})

let store = configureStore({
  reducer : rootReduer
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

