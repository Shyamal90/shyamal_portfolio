import React from "react";
import Header from "./Header";
import ProjectBanner from "./ProjectBanner";
import Contact from './Contact';
import './style/app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from "./About";
import Project from "./Project";
import './App.css'
import Skills from "./Skills";

const App = () => {
    return(
        <div className="container w-75 main_container">
          <Header />
          {/* <ProjectBanner /> */}
          <About />
          <Skills />
          <Project />
          <Contact/>
        </div>
    )
}

export default App;