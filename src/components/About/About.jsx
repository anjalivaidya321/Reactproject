import React from "react";
import aboutCSS from './../About/About.module.css'
import aboutImg from '../../assets/about-one.png'
function About(){
  
return(
<div className={`${aboutCSS.about_wrapper} section`} id="imgecon">
   <div className={aboutCSS.about_img}>
   <img src={aboutImg} alt="about-img" />
   </div>
   <div className={aboutCSS.about_content}>
       <small className="section_Heading" style={{fontSize:"25px"}}>The Royal Hotel</small>
       <h2 className="section_Title">Where Elegance Meets <span>Excellance</span></h2>
       <p>At RoyalX, we take pride in offering the highest standards of luxury and service, ensuring every guest enjoys a royal experience from start to finish.Discover the charm, indulge in luxury, and experience the royal treatment you deserve at RoyalX.</p>
       <div className={aboutCSS.Cards}>
           <p>260+<span>Awards Wins</span></p>
           <p>250K+<span>Visitors Visits</span></p>
            <p>150K+<span>Events</span></p>
          </div>
   </div>
   
</div>
)
}
export default About