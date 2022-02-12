import React from 'react';
import './Cart.css';

function Cart({techStack,descrip,src,deploy,github}) {
    return (
        <div>
            <div className="card card_container" style={{width: "18rem"}}>
                <img src={src} className="card-img-top card_img" alt="project image"/>
                    <div className="card-body card_body_container">
                        <p className="card-text card_text_container" style={{fontSize:"10px"}}>{descrip}</p>
                        <p style={{fontSize:"12px",fontWeight:"bold"}}>{techStack}</p>
                    </div>
                    <div>
                        <button className='btn btn-outline-warning'><a href={deploy} className="href">Demo</a></button>
                        <button className='btn btn-outline-warning'><a href={github} className="href">Github</a></button>
                        {/* <button className='btn btn-outline-warning'>Link</button> */}
                    </div>
            </div>
        </div>
    )
}

export default Cart
