import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StudentReducer from './redux/StudentSlice';
import TeacherReducer from './redux/TeacherSlice';
import ProductReducer from './redux/ProductSlice'
import CartReducer from './redux/CartSlice'
import Student2Reducer from './redux/Student2Slice';

let allReducer = combineReducers({
  StudentReducer,
  TeacherReducer,
  ProductReducer,
  CartReducer,
  Student2Reducer
})

let store = configureStore({
  reducer : allReducer
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
