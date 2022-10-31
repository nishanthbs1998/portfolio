import "./App.css";
//import { Container,Nav,Offcanvas,Navbar } from "react-bootstrap";

import x from './icons8-linkedin.svg'
import y from './icons8-github.svg'
import z from './man.png'
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navigation/>
      </div>
      <div className="banner">
        <h1 className="typewriter">Hello, I'm Nishanth BS.</h1>
        {/* <h1 className="typewriter"> I'm Nishanth.</h1> */}
        <h4 className="subtitle">I design and develop elegant websites and web applications.</h4>
        <div className="icons">
        <a href="https://www.linkedin.com/in/nishanth-b-s-2a0570170/"><img src={x} alt="LinkedIn" /></a>
        <a  href="https://github.com/nishanthbs1998"><img src={y} alt="GitHub" /></a>
        </div>
      </div>

      <div className="about">
        {/* <div className="aboutHeader"> */}
        <h2>About Me</h2>
        {/* <img src={z} alt="" /> */}
        {/* </div> */}
        <div className="aboutContent">
        <p>Hi! I'm Nishanth BS. I love building web sites and web applications with a sharp eye for clean aesthetics, code efficiency, and functionality.
           My work and experience mainly revolves around building web applications using the MERN stack. Two years ago, as a fresh graduate, I started out 
           this journey as a backend developer at an early stage startup and gradually transitioned into the frontend development space, simply because I was
            attracted to the possibilites that could be bought to life by having the skills to build creative and beautiful applications.  
             
                  </p>
        <p>Here is a list of technolgies I have been working with:</p>
        <ul className="techList">
          <div>
          <li>JavaScript</li>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>Reactjs</li>
          </div>
          <div>
          <li>Redux</li>
          <li>Nodejs</li>
          <li>MongoDB</li>
          <li>BootStrap</li>
          </div>
        </ul>
        </div>
      </div>

      <div className="experience">
        <h2 style={{marginBottom:"1em"}}>Experience</h2>
        <div className="expContentMain">
          <Experience/>
        </div>
        
        {/* <h5>Application Development Analyst, <b>Accenture</b></h5>
        <p className="date">Jan 2021 - Present</p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, at?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, at?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, at?</li>
        </ul> */}
      </div>

      <div className="projects">
        <h2 style={{marginBottom:"2em",alignContent:"center"}}>My Projects</h2>
        <Project/>
      </div>

      <div className="contact">
        <h2>Contact Me</h2>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
