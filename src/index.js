import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppV2} from './App';
import {ExpProvider} from './Components/MainContext';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Switch,
  Route,
  Link } from 'react-router-dom';
import { Contact } from './Components/Contact';
import { HowItWorks } from './Pages/HowItWorks';
import {Developer} from './Pages/Developer';
import { Navbar } from './Components/Navbar';

var screenSize=1400;
var isMobile=false;

screenSize=window.screen.width;
if(screenSize<=768){
  isMobile=true;
}

ReactDOM.render(
  <>
<BrowserRouter>
<Navbar isMobile={isMobile}/>
            <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/how-to-use">
           <HowItWorks />
          </Route>
          <Route path="/developer">
           <Developer />
          </Route>
          <Route path="/">
          <ExpProvider><AppV2 isMobile={isMobile} /></ExpProvider>
          </Route>
        </Switch>
        </BrowserRouter>
    
    </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
