// import Header from "../header/header";
// import About from "../About/About";
// import Amenities from "../Amenities/Amenities";
// import Rooms from "../Rooms/Room";
// import Services from "../Services/Services";
import Aboutpage from "../Pages/aboutpage";
// import Testimonial from "../Testimonals/Testimonals";
import Service from "../Pages/servicespage/servicepage";
import Roompage from "../Pages/roompage/roompage";
import { Navigate, Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Roomdetails from "../Pages/roomdetails/roomdetails";
import NewAmenities from "../Pages/Amenities/amenities";
import ParallaxTestimonials from "../Pages/Testimonial/testimonial";
import Contact from "../Pages/Contact/ContactInfo";
import AmenitiesDetails from "../Pages/amenitiesdetails/amenitiesdetails";

function Routers(){
    return(
      <>
       <Routes>
<Route path="/" element={<Navigate to="/Home"/>}/>
<Route path="/Home" element={<Home/>}/>
<Route path="/About Us" element={<Aboutpage/>}/>
<Route path="/Rooms" element={<Roompage/>}/>
<Route path="/Rooms/:roomitem" element={<Roomdetails/>}/>

<Route path="/Testimonials" element={<ParallaxTestimonials/>}/>
<Route path="/Amenities" element={<NewAmenities/>}/>
<Route path="/Amenitie/:amenitieitem" element={<AmenitiesDetails/>}/>
<Route path="/Services" element={<Service/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>


      </>
    )
}
export default Routers