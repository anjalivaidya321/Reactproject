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
       <small className="section_Heading">The Royal Hotel</small>
       <h2 className="section_Title">Where Elegance Meets <span>Excellance</span></h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam, alias laborum esse eius omnis natus debitis veniam dolore accusamus unde excepturi dolores illo. Commodi tenetur at corrupti harum fuga.</p>
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