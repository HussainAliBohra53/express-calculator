import { useState,Component } from 'react';
import {Link } from 'react-router-dom';
import './../css/navbar.css';
import { HeadingName } from '../Pages/Home';
export function Navbar(props){
    const[isMenuHidded,setMenuHidden]=useState(true);
    const switchMenuHiden=(event)=>{
     setMenuHidden(!isMenuHidded);
    }
    
    return(
        <>
        <div className={isMenuHidded?'topnav':'topnav responsive'}>
                <Link to="/home">Home</Link>
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

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

  const show = (this.state.menu) ? "show" : "" ;

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <Link className="navbar-brand" to="/express-calculator"><span className='px-2 animate-charcter'>Express Calculator</span></Link>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav">
          <Link className="nav-item nav-link px-2" to="/home">Home</Link>
          <Link className="nav-item nav-link px-2" to="/how-to-use">How to Use</Link>
          <Link className="nav-item nav-link px-2" to="/developer">Developer</Link>
        </div>
      </div>
    </nav>

  );
  }
}
