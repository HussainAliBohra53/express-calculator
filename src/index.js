import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppV2} from './App';
import {ExpProvider} from './Components/SampleContext';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
  <div className="text-center app-header">
            <h1> <div className="d-inline-block icon-rotate"><i className="bi bi-lightning-charge-fill"></i></div>
            <div className="app-header-name" style={{display:'inline-block',fontFamily:'Rancho, serif'}}>Express Calculator<sup>Beta</sup></div>
            </h1> 
            
            </div>
  <ExpProvider><AppV2/></ExpProvider>
    
    </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
