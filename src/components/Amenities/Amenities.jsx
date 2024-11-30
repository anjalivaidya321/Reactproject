import React from "react";
import aminitiesCSS from './../Amenities/Amenities.module.css'
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css'
import img1 from './../../assets/pool.jpg'
import img2 from './../../assets/gym.jpg'
import img3 from './../../assets/rest.jpg'
import { Autoplay } from "swiper/modules";
function Amenities(){
return(
    <div className={`${aminitiesCSS.aminities_wrapper} section`}>
         <small className="section_Heading">Luxury Amenities</small>
         <h2 className="section_Title">Our Best <span>Amenities</span></h2>
         <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay:1000,
          }}
          speed={2000}
          modules={[Autoplay]}
         className={aminitiesCSS.swiper}
         >
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img1} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
                        <h2>Swimming Pool</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic at dolore laudantium commodi harum officiis repellendus deserunt pariatur? Fugit tenetur ratione placeat iusto quibusdam aliquam nisi eius laboriosam molestiae.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img2} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
                        <h2>Gym</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic at dolore laudantium commodi harum officiis repellendus deserunt pariatur? Fugit tenetur ratione placeat iusto quibusdam aliquam nisi eius laboriosam molestiae.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img3} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
                        <h2>Restro & Cafe</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic at dolore laudantium commodi harum officiis repellendus deserunt pariatur? Fugit tenetur ratione placeat iusto quibusdam aliquam nisi eius laboriosam molestiae.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </SwiperSlide>
         </Swiper>
    </div>
)
}
export default Amenities