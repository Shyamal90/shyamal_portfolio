import React, { useState } from "react";
import ProjectAPI from "./ProjectAPI";
import "./Style.css";

const ProjectBanner = () => {
  
   const [index,setIndex] = useState(0);
   
   function preImage(){
      var totalImg = ProjectAPI.length;
      var index = (index + 1) % totalImg;

      setIndex(index);
   }
   
    return (
        <>
           <div className="projects">
              <h1>Hello I am Full Stack Developer.</h1>

              <div className="projectBanner">
                 {/* <button onClick={preImage}> + </button> */}
                 {
                     // ProjectAPI.map((currImg,index) =>{
                     //    return (<img src={currImg[index]} alt="imgLoading" />)
                     //  })
                    
                     <img src={ ProjectAPI[index].imageSrc} alt="imgLoading" />
                 }
                 
                 {/* <button onClick={nextImage()}> - </button> */}
              </div>
           </div>
        </>
    )
}

export default ProjectBanner;