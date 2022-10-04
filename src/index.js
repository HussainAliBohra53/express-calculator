import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import {AppV2} from './App';
import {ExpProvider} from './Components/MainContext';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Switch,
  Route,
  Link, 
  HashRouter} from 'react-router-dom';
import { HowItWorks } from './Pages/HowItWorks';
import {Developer} from './Pages/Developer';
import Menu, { Navbar } from './Components/Navbar';
import {Home} from './Pages/Home'; 
var screenSize=1400;
var isMobile=false;

screenSize=window.screen.width;
if(screenSize<=768){
  isMobile=true;
}

ReactDOM.render(
  <>
<HashRouter>
<Menu/>
          <Switch>

          <Route path="/home">
          <Home/>
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
        </HashRouter>
    </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
