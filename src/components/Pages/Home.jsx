import About from "../About/About"
import Testimonial from "../Testimonals/Testimonals"
import Amenities from "../Amenities/Amenities"
import Header from "../header/header"
import Rooms from "../Rooms/Room"
import Services from "../Services/Services"


function Home(){
    return(
        <>
        <section>
            <div>
                <Header/>
            </div>
        </section>
        <section>
            <div>
               <About/>
            </div>
        </section>
        <section>
            <div>
              <Services/>
            </div>
        </section>
        <section>
            <div>
              <Rooms/>
            </div>
        </section>
        <section>
            <div>
              <Testimonial/>
            </div>
        </section>
        <section>
            <div>
              <Amenities/>
            </div>
        </section>
        
        </>
    )
}
export default Home