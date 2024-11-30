import React from "react";
import headerCSS from './../header/header.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay,Parallax } from "swiper/modules";

function Header(){
    return(
       <div className={headerCSS.header_wrapper}>
<Swiper 
//  This controls how many slides are visible at once in the swiper.
slidesPerView={1}
// This defines the amount of space (in pixels) between each slide.
spaceBetween={0}
// / Makes the slider loop back to the first slide when it reaches the last one
loop={true} 
className={headerCSS.Swiper}
autoplay={{
    delay:1000,
}}
// This adds a 3D-like depth effect, making the page feel more interactive and visually dynamic
parallax={true}
speed={1500}
modules={[Autoplay,Parallax]}

>
    <SwiperSlide>
        <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
            <div className={headerCSS.content}>
                <small data-swiper-parallax="-200px">Luxury Hotel & Restuarant </small>
                <h2 data-swiper-parallax="-250px">Enjoy your <span>Dream</span> Time with<br/>
                <span>Luxury</span> Experience
                </h2>
                <p data-swiper-parallax="-400px">Call Now <span>+91 9674532410</span></p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
            <div className={headerCSS.content}>
                <small>Luxury Hotel & Restuarant </small>
                <h2>Enjoy your <span>Dream</span> Time with<br/>
                <span>Luxury</span> Experience
                </h2>
                <p>Call Now <span>+91 9674532410</span></p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
            <div className={headerCSS.content}>
                <small>Luxury Hotel & Restuarant </small>
                <h2>Enjoy your <span>Dream</span> Time with<br/>
                <span>Luxury</span> Experience
                </h2>
                <p>Call Now <span>+91 9674532410</span></p>
            </div>
        </div>
    </SwiperSlide>
</Swiper> 

        </div>

        
    )
}
export default Header