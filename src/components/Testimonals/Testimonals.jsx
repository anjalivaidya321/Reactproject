import React from "react";
import testimonialCSS from './../Testimonals/Testimonals.module.css'
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";
import img1 from '../../assets/testi-01.jpg'
import img2 from '../../assets/testi-03.jpg'
import img3 from '../../assets/images.jpg'
function Testimonial(){
    return(
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>
 
         <small className="section_Heading">Luxury Amenities</small>
         <h2 className="section_Title">Our Best <span>Amenities</span></h2>
         <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay:1000,
          }}
          breakpoints={{
            0:{
                slidesPerView:1
            },
            1200:{
                slidesPerView:2
            },
            900:{
                slidesPerView:1
            }
          }}
          speed={1500}
          modules={[Autoplay]}
         className={testimonialCSS.swiper}
         >
            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img1} alt="" />
                    <div className={testimonialCSS.content}>
                        <h3>Amritha <span>Manager</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet laborum quia ratione culpa vitae, quidem ad exercitationem. Aliquid soluta non libero quasi dolorem quisquam officiis aut qui reiciendis eligendi?</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img3} alt="" />
                    <div className={testimonialCSS.content}>
                        <h3>Samantha<span> Sales Manager</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet laborum quia ratione culpa vitae, quidem ad exercitationem. Aliquid soluta non libero quasi dolorem quisquam officiis aut qui reiciendis eligendi?</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img2} alt="" />
                    <div className={testimonialCSS.content}>
                        <h3>John Doe <span>Manager</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet laborum quia ratione culpa vitae, quidem ad exercitationem. Aliquid soluta non libero quasi dolorem quisquam officiis aut qui reiciendis eligendi?</p>
                    </div>
                </div>
            </SwiperSlide>
         </Swiper>
        </div>
        
    )
}
export default Testimonial