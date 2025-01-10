import React from "react";
import IMG_8753 from "../images/IMG_0769.jpg"

const Header = () => {
  return (
    <header className="header">
      <img src={IMG_8753} alt="Profile_picture" className="header-image"/>
      <h1>Olli Terävä | Student at University of Jyväskylä</h1>
    </header>
  )
}

export default Header
