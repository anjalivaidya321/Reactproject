import React from "react";
import ServicesCSS from '../../Services/Services.module.css';
import Services from "../../Services/Services";
import { useEffect } from "react";
function Service() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <section>
            <div>
                <Services/>
            </div>
        </section>
                <div className={`${ServicesCSS.Service_wrapper} section`}>
            <small className="section_Heading">Our Popular Services</small>
            <h2 className="section_Title">Explore Our <span>Offerings</span></h2>
            <div className={ServicesCSS.Services_cards}>
                {/* Adventure & Unique Activities */}
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-compass-line"></i>
                    <h3>Adventure & Activities</h3>
                    <p>- Scuba Diving</p>
                    <p>- Hot Air Balloon Rides</p>
                    <p>- Desert Safari</p>
                    <p>- Guided Nature Trails</p>
                </div>
               
                <div className={ServicesCSS.Service_card}>
                   <i className="ri-restaurant-line"></i>
                   <h3>Local Cuisine Masterclass</h3>
                   <p>- Learn to cook authentic regional dishes</p>
                   <p>- Hands-on cooking experience with expert chefs</p>
                   <p>- Taste and enjoy your creations</p>
                 </div>
               <div className={ServicesCSS.Service_card}>
                   <i className="ri-rocket-line"></i>
                   <h3>Smart Room Features</h3>
                   <p>- Automated lighting and temperature control</p>
                   <p>- Voice-activated assistants</p>
                   <p>- Smart TVs with streaming services</p>
                   <p>- Personalized room settings for guests</p>
                 </div>
                
            </div>
        </div>
        </>

    );
} 

export default Service;
