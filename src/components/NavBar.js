import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
  return (
    <div>
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
     <nav className="navbar" onClick={e => e.stopPropagation()}>
       <div className="nav-container">
        <div>
         <NavLink exact to="/" className="nav-logo">
           Bird_Detection
           <i className="fa fa-code"></i>
         </NavLink>
         </div> 
         <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li className="nav-item">
             <NavLink
               exact
               to="/"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Home
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/detect"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Detect
             </NavLink>
           </li>
           {/* <li className="nav-item">
             <NavLink
               exact
               to="/blog"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Blog
             </NavLink>
           </li> */}
           <li className="nav-item">
             <NavLink
               exact
               to="/about"
               activeClassName="active"
               className="nav-links"
              onClick={click ? handleClick : null}
             >
               About
             </NavLink>
           </li>
         </ul>
         <div className="nav-icon" onClick={handleClick}>
           <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
         </div>
       </div>
     </nav>
   </ div>
  )
}

export default NavBar