import React from 'react';
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
var screenSize=1400;
var isMobile=false;

screenSize=window.screen.width;
if(screenSize<=768){
  isMobile=true;
}

ReactDOM.render(
  <>
<BrowserRouter>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" className="navbar-brand"><icon className="bi bi-lightning-charge"></icon> Express Calculator</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/how-it-works">How it Works</Link>
        </li>
        
        <li class="nav-item">
          <Link to="/developer">Developer</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/how-it-works">
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
