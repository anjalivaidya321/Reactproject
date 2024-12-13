import React, { useState } from "react";
import tabsCSS from "./../Amenities/amenities.module.css";
import skyLoungeImage from "../../../assets/view.jpg";
import poolImage from "../../../assets/pools.jpg";
import golfImage from "../../../assets/game.jpg";
import petFriendlyImage from "../../../assets/dog.jpg";
import wineCellarImage from "../../../assets/gardenview.jpeg";
import movieNightImage from "../../../assets/movie.webp";
import Amenities from "../../Amenities/Amenities";

function TabsWithImages() {
  const amenities = [
    {
        title: "Sky Lounge",
        description: "Experience breathtaking views of the city or coastline at our rooftop sky lounge.",
        image: skyLoungeImage,
      },
      {
        title: "Infinity Pool",
        description: "Relax at our infinity pool with stunning views and tranquil ambiance.",
        image: poolImage,
      },
      {
        title: "Virtual Golf Simulator",
        description: "Perfect your swing with our state-of-the-art virtual golf experience.",
        image: golfImage,
      },
      {
        title: "Pet-Friendly Accommodations",
        description: "Your furry companions are welcome with special amenities just for them.",
        image: petFriendlyImage,
      },
      {
        title: "Exclusive Wine Cellar",
        description: "Indulge in rare vintages and sommelier-guided tastings.",
        image: wineCellarImage,
      },
      {
        title: "Movie Under the Stars",
        description: "Enjoy an open-air cinema experience with cozy blankets and gourmet popcorn.",
        image: movieNightImage,
      },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
<section>
    <div>
        <Amenities/>
    </div>
</section>
<div className={tabsCSS.tabsSection}>
      <h2 className={tabsCSS.title}>
        Discover Our <span>Amenities</span>
      </h2>
      <div className={tabsCSS.container}>
        <div className={tabsCSS.tabs}>
          {amenities.map((amenity, index) => (
            <button
              key={index}
              className={`${tabsCSS.tab} ${activeIndex === index ? tabsCSS.active : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {amenity.title}
            </button>
          ))}
        </div>
        <div className={tabsCSS.content}>
          <img src={amenities[activeIndex].image} alt={amenities[activeIndex].title} className={tabsCSS.image} />
          <p className={tabsCSS.description}>{amenities[activeIndex].description}</p>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default TabsWithImages;
