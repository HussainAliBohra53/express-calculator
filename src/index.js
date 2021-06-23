import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppV2} from './App';
import {ExpProvider} from './Components/SampleContext';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
  <ExpProvider><AppV2/></ExpProvider>
    
    </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
