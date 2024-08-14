import React from 'react'
import PropTypes from 'prop-types'
import { MdDarkMode } from "react-icons/md";
import { useState } from 'react';
// import { TbBackground } from 'react-icons/tb';
// import { Link } from 'react-router-dom';

 function Navbar(p) {
  const [colors, setColor] = useState("white")
  const mode = (e)=>{
     setColor(e.target.value) 
    // console.log(e.target.value)
    // console.log("function...")
    // console.log(color)
    // document.body.style.color = "white";
    // document.body.style.backgroundColor = color;
    
    p.changeMode(e.target.value)
    //   if(color==="white"){
    //   document.body.style.color = "black";
    //   document.body.style.backgoundColor = color;
    // }
    // else{
    //   document.body.style.color = "white";
    //   document.body.style.backgoundColor = `${color}`;
      
    // }
  }


  // bg-${p.mode} navbar-${p.mode}
 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${colors==="white" || null ? "bg-light navbar-light" : "bg-dark navbar-dark"} `}>
        <div className="container-fluid ">
          {/* <Link className="navbar-brand" to="/home">{p.title}</Link> */}
          <a className="navbar-brand" href="#">{p.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                {/* <Link className="nav-link active" aria-current="page" to="/home">Home</Link> */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">{p.about}</a>
              </li> */}

            </ul>
            <form className="d-flex mx-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
            {/* <div className="form-check form-switch mx-3">
              <input className="form-check-input" type="checkbox" role="switch" onClick={p.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
            </div> */}

            <div className="mode mx-4 ">
              <MdDarkMode className={`icon ${colors==="white"? "text-dark" : "text-light"}`}  />Change Mode
              <div className="option">
                <button className="button" onClick={mode} value="white">White Mode</button>
                <button className="button" onClick={mode} value={"rgb(55 23 23)"}>Brown Mode</button>
                <button className="button" onClick={mode} value={"#262739"}>Blue Mode</button>
                <button className="button" onClick={mode} value={"rgb(23 44 26)"}>Green Mode</button>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

// Navbar.defaultProps = {
//     title : "Set title here",
//     about : "About"
// }
export default Navbar
