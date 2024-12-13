import Nav from "../Nav/Nav";
// import Header from "../header/header";
// import About from "../About/About";
// import Amenities from "../Amenities/Amenities";
import Footer from "../Footer/Footer";
// import Rooms from "../Rooms/Room";
// import Services from "../Services/Services";
// import Testimonial from "../Testimonals/Testimonals";
import Routers from "../Routers/Routes";
const Layout = () => {
    return (
        <>
        <Nav/>
        <div>
         <Routers/>
        </div>
    <Footer/>
        </>
    )
}
export default Layout
