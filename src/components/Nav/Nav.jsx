import React, { useRef } from "react";
import  navCSS from './../Nav/Nav.module.css'
import { Link } from "react-router-dom";
function Nav(){
const  menu=useRef();
const menuHandler=()=>{
    menu.current.classList.toggle(navCSS.showNav);
}

// const navbar=useRef()
// window.addEventListener('scroll',function(){
//     if(window.scrollY>200){
//         navbar.current.classList.add(navCSS.navbarScroll)
//     }
//     else{
//         navbar.current.classList.remove(navCSS.navbarScroll)
//     }
// })
    return(
        <div className={navCSS.nav_wrapper} >
                 <div className={navCSS.logo}>
                    <a href="#"><span>ROYAL</span>X</a>
                 </div>
                 <ul ref={menu}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/About Us">About Us</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Rooms">Rooms</Link></li>
                    <li><Link to="/Testimonials">Testimonials</Link></li>
                    <li><Link to="/Amenities">Amenities</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                 </ul>

                 <div className={navCSS.Nav_btns}>
                      <button><Link to="/Rooms/2">Book Now</Link></button>
                      <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
                 </div>
        </div>
    )
}
export default Nav;