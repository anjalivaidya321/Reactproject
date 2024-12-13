import React from "react";
import aminitiesCSS from './../Amenities/Amenities.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// Image imports
import img1 from './../../assets/pool.jpg';
import img2 from './../../assets/gym.jpg';
import img3 from './../../assets/rest.jpg';

function Amenities() {
    // Array of amenities data
    const amenities = [
        {
            id: 1,
            title: "Swimming Pool",
            description: "Relax and rejuvenate in our luxury swimming pool. Equipped with modern facilities for your comfort and enjoyment.",
            imgSrc: img1,
        },
        {
            id: 2,
            title: "Gym",
            description: "Stay fit and active during your stay with our fully equipped gym facilities designed for all fitness levels.",
            imgSrc: img2,
        },
        {
            id: 3,
            title: "Restro & Cafe",
            description: "Enjoy gourmet meals and refreshing beverages in our premium Restro & Cafe, offering a delightful dining experience.",
            imgSrc: img3,
        },
    ];

    return (
        <div className={`${aminitiesCSS.aminities_wrapper} section`}>
            <small className="section_Heading">Luxury Amenities</small>
            <h2 className="section_Title">Our Best <span>Amenities</span></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,
                }}
                speed={2000}
                modules={[Autoplay]}
                className={aminitiesCSS.swiper}
            >
                {amenities.map((amenity) => (
                    <SwiperSlide key={amenity.id}>
                        <div className={aminitiesCSS.amenities_item}>
                            <img src={amenity.imgSrc} alt={`${amenity.title}-img`} />
                            <div className={aminitiesCSS.content}>
                                <h2>{amenity.title}</h2>
                                <p>{amenity.description}</p>
                                <button> <Link to={`/Amenitie/${amenity.id}`}>Book Now</Link></button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Amenities;
