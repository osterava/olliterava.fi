import React from "react";
import IMG_8753 from "../images/IMG_0769.jpg"

const Header = () => {
  return (
    <header className="header">
      <img src={IMG_8753} alt="Profile_picture" className="header-image"/>
      <h1>Olli Terävä | Student at University of Jyväskylä</h1>
      <nav className="Nav">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
