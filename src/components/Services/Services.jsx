import React from "react";
import ServicesCSS from './../Services/Services.module.css'
function Services(){
return(
   <div className={`${ServicesCSS.Service_wrapper} section`}>
     <small className="section_Heading">Facilities</small>
     <h2 className="section_Title">Our Best <span>Services</span></h2>
     <div className={ServicesCSS.Services_cards}>
        <div className={ServicesCSS.Service_card}>
            <i className="ri-hotel-line"></i>
            <h3>Basic Facilities</h3>
            <p>- Reciption /Front Desk</p>
            <p>- Room Services</p>
            <p>- House Keeping</p>
            <p>- Wifi & Parking</p>
        </div>
        <div className={ServicesCSS.Service_card}>
            <i className="ri-hotel-bed-line"></i>
            <h3>Room Animities</h3>
            <p>- Comfortable Bedding</p>
            <p>- Bed Room and Pool</p>
            <p>- TV and AC</p>
            <p>- Bar</p>
        </div>
        <div className={ServicesCSS.Service_card}>
            <i className="ri-goblet-line"></i>
            <h3>Dining Options</h3>
            <p>- Restuarant Cafe</p>
            <p>- Bar and Launge</p>
            <p>- Cafe and Canteen</p>
            <p>- Room Services</p>
        </div>
        <div className={ServicesCSS.Service_card}>
            <i className="ri-restaurant-line"></i>
            <h3>Special Features</h3>
            <p>- Custom Rooms</p>
            <p>- Cricket Room</p>
            <p>- Gym</p>
            <p>- Room Services</p>
        </div>
        
     </div>


   </div>
)
}
export default Services