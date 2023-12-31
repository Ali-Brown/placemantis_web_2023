import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from './store/reducers/authReducer';
import gameReducer from './store/reducers/gameReducer';
import {SET_AUTHENTICATION_FROM_LOCAL_STORAGE} from './store/actions/actionTypes';


const store = configureStore({ 
  reducer: {
    game: gameReducer,
    auth: authReducer
  }
});

const user = localStorage.getItem(('user'));
const userParsed = JSON.parse(user);

if (user) {
  store.dispatch({ type: SET_AUTHENTICATION_FROM_LOCAL_STORAGE, user: userParsed });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
