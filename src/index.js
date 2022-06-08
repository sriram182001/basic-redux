import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {Provider } from 'react-redux';

const initialstate={count:0}
function reducer(state=initialstate,action){
  if(action.type==='INC'){
    return {count:state.count+1}
  }
  else if(action.type==='DEC'){
    return {count:state.count-1}
  }
  else if(action.type==='RES'){
    return initialstate
  }
  else{
    return state
  }
}

const store=createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

