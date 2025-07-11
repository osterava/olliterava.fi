import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Skills from "./components/Skills"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Xyhi from "./components/Xyhi"
import "./App.css"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/xyhi2025ot52572412" element={<Xyhi />} />
        <Route path="/" element={(
          <div>
            <About />
            <div className="Merge">
              <Skills />
              <Projects />
            </div>
          </div>
        )} /> 
      </Routes>
    </Router>
  )
}

export default App
