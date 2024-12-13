import React, { useState } from "react";
import testimonialCSS from "./../Testimonial/testimonial.module.css";
import Testimonial from "../../Testimonals/Testimonals";
import { useEffect } from "react";
function TestimonialSlider() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testimonials = [
    {
      text: "The experience at this hotel was absolutely phenomenal. Great service and luxurious amenities!",
      name: "Emma Stone",
    },
    {
      text: "I loved every minute of my stay here. The staff was courteous, and the environment was so relaxing.",
      name: "Liam Johnson",
    },
    {
      text: "Highly recommend this place! The rooms were spotless, and the food was divine.",
      name: "Sophia Williams",
    },
    {
      text: "This hotel made my vacation unforgettable. Beautiful interiors and top-notch hospitality!",
      name: "James Brown",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
     <section>
      <div>
       <Testimonial/>
      </div>
     </section>

    <section>
      <div>
      <div className={testimonialCSS.sliderWrapper}>
      <h2 className={testimonialCSS.title}>Guest Reviews</h2>
      <div className={testimonialCSS.slider}>
        <button className={testimonialCSS.prev} onClick={handlePrev}>
          &lt;
        </button>
        <div className={testimonialCSS.testimonial}>
          <p>"{testimonials[currentIndex].text}"</p>
          <h3>- {testimonials[currentIndex].name}</h3>
        </div>
        <button className={testimonialCSS.next} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
      </div>
    </section>
    </>
    
  );
}

export default TestimonialSlider;
