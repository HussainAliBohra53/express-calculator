import { useState } from 'react';
import {Link } from 'react-router-dom';
import './../css/navbar.css';
export function Navbar(props){
    const[isMenuHidded,setMenuHidden]=useState(true);
    const switchMenuHiden=(event)=>{
     setMenuHidden(!isMenuHidded);
    }
    
    return(
        <>
        <div className={isMenuHidded?'topnav':'topnav responsive'}>
                <Link to="/">Express Calculator</Link>
                <Link to="/how-to-use">How to Use</Link>
                <Link to="/developer">Developer</Link>
                <Link className="icon" onClick={switchMenuHiden}>
                    <i className="bi bi-list"></i>
                </Link>
        </div>
        </>
    )
}