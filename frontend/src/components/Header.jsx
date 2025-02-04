import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import kuva_0 from "../images/kuva_0.jpg"
import kuva_3 from "../images/kuva_3.jpeg"
import kuva_4 from "../images/kuva_4.jpeg"
import kuva_5 from "../images/kuva_5.jpeg"
import linkedin from "../images/linkedin.PNG"
import git from "../images/git-log.png"

const images = [kuva_0, kuva_3, kuva_4, kuva_5]

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isChanging = useRef(false)

  const nextImage = () => {
    if (isChanging.current) return
    isChanging.current = true
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length
      return newIndex
    })
    setTimeout(() => {
      isChanging.current = false
    }, 300)
  }

  const prevImage = () => {
    if (isChanging.current) return
    isChanging.current = true
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length
      return newIndex
    })
    setTimeout(() => {
      isChanging.current = false
    }, 300)
  }

  return (
    <header className="header">

    <div className="navigation">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/resume">Resume</Link></li>  
              <li><Link to="/contact">Contact</Link></li>
              <a href="https://linkedin.com/in/olliterava" >
                <img src={linkedin} alt="linkedin" width={23}/>
               </a>
              <a href= "https://github.com/osterava">
                <img src={git} alt="github" width={23}/>
              </a>
            </ul>
          </nav>
        </div>

      <div className="album-container">
        <div className="name-container">
          <h1>Olli Terävä</h1>
          <h2>IT-Student at University of Jyväskylä</h2>
        </div>
        <div className="image-container">
          <button className="prev" onClick={prevImage}>&#10094;</button>
          <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} className="album-image" />
          <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
      </div>
    </header>
  )
}

export default Header
