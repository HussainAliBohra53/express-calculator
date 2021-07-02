import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppV2} from './App';
import {ExpProvider} from './Components/SampleContext';
import reportWebVitals from './reportWebVitals';
var screenSize=1400;
var isMobile=false;

screenSize=window.screen.width;
if(screenSize<=768){
  isMobile=true;
}

ReactDOM.render(
  <>
  <div className="text-center app-header mt-1" style={{height:'10vh'}}>
            <h3> <div className="d-inline-block icon-rotate"><i className="bi bi-lightning-charge-fill"></i></div>
            <div className="app-header-name d-inline">Express Calculator<sup>Beta</sup></div>
            </h3> 
            </div>
  <ExpProvider><AppV2 isMobile={isMobile} /></ExpProvider>
    
    </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
