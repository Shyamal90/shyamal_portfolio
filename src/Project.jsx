import React from 'react';
import Cart from './Cart';
import './style/Project.css'

function Project() {
    return (
        <div className='project_main-container' id="projects">
            <h1>Projects</h1>
            <hr className='w-75 mx-auto' />
            <div className='project_container'>
                <Cart src={'image/pulsePlus_bg2.png'} techStack={`HTML | css | Basic Javascript`} descrip={`Pulse plus is a pharmacuitical e-commerce website where customers can easily get the medicine they need at very low prices and they can also book consultation from certified doctor.`} deploy={`https://61ff9721624257b707b4e751--pulsepluspharmacy.netlify.app/`} github={`https://github.com/Rohanverma4/UNIT_2_PROJECT_TESTING`}/>


                <Cart src={'image/homeDepot_bg.png'} techStack={`HTML | css | Advanced Javascript`} descrip={`.The Home Depot, Inc., commonly known as Home Depot, is the largest home improvement retailer in the United States, supplying tools, construction products, appliances, and services. `} deploy={`https://shyamal90.github.io/homeDepot_clone/`} github={`https://github.com/Shyamal90/homeDepot_clone`}/>

                
                <Cart src={'image/pulsePlus_bg.png'} techStack={`HTML | css | Basic Javascript`} descrip={`Pulse plus is a pharmacuitical e-commerce website where customers can easily get the medicine they need at very low prices and they can also book consultation from certified doctor.`} deploy={`https://61ff9721624257b707b4e751--pulsepluspharmacy.netlify.app/`} github={`https://github.com/Rohanverma4/UNIT_2_PROJECT_TESTING`}/>
            </div>
        </div>

    )
}

export default Project
