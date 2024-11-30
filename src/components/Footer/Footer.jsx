import React from "react";
import footerCSS from './../Footer/Footer.module.css'
function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
               <div className={footerCSS.logo}>
                  <h2>RoyalX</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magnam, recusandae illum at praesentium accusamus ad ratione eius tempore culpa nobis sint doloribus iste natus dolore aut error consectetur esse.</p>
               </div>

            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About </p>
                <p>Contact US</p>
                <p>Rooms</p>
                <p>Gym</p>
                <p>Restuarant</p>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>City Branches</h3>
                <p>Maxico</p>
                <p>Bharat</p>
                <p>Germany</p>
                <p>Australia</p>
                <p>California</p>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>Contact US</h3>
                <p>Adress:<span>360 street- Mumbai , India</span></p>
                <p>Email : <span>RoyalX@gmail.com</span></p>
                <p>Phone : <span>9843289790</span></p>
                
            </div>
         </footer>
      
    )
}
export default Footer