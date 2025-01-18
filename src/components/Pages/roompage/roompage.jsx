import React, { useState } from "react";
import roomsCSS from './../roompage/roompage.module.css';
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/3.jpg'
import img3 from '../../../assets/hero-3.png'
import img5 from '../../../assets/gardenview.jpeg'
import img4 from '../../../assets/penthouse.webp'
import img6 from '../../../assets/beachview.jpg'
import Rooms from "../../Rooms/Room";
function Roompage() {
  const [selectedRoom, setSelectedRoom] = useState(null); // For displaying pop-up overlay

  const rooms = [
    {
      name: "Junior Suite",
      price: "9,600",
      description: "A cozy and spacious room, perfect for relaxation. Includes daily cleaning, home services, and more.",
      size: "25m²",
      bedType: "1 King Bed",
      image: img1,
    },
    {
      name: "Twin Room",
      price: "10,400",
      description: "A modern twin room with excellent amenities for a comfortable stay.",
      size: "30m²",
      bedType: "2 Single Beds",
      image: img2,
    },
    {
      name: "Deluxe Suite",
      price: "16,000",
      description: "A luxurious suite with breathtaking views and extra space.",
      size: "50m²",
      bedType: "1 King Bed + Sofa Bed",
      image: img3,
    },
    {
        name: "Penthouse Suite",
        price: "40,000",
        description: " For those who desire nothing but the best, the Penthouse Suite is the pinnacle of luxury. Spanning the top floor, this suite offers 360-degree views, a private hot tub, and exclusive access to the rooftop lounge. ",
        size: "120m²",
        bedType: "2 King Beds",
        image: img4,
      },
      {
        name: " Garden View Suite",
        price: "12,000",
        description: "Immerse yourself in the beauty of nature while enjoying modern amenities in this suite. Overlooking lush gardens, this room combines comfort with serenity.",
        size: "40m²",
        bedType: "2 Single Beds or 1 King Bed",
        image: img5,
      },
      {
        name: "Ocean Breeze Room",
        price: "14,400",
        description: " Wake up to the sound of the waves and the fresh ocean air in this beautifully appointed room. Perfect for those who crave tranquility, the Ocean Breeze Room offers a calming escape with beach views, a minimalist design, and natural elements that blend perfectly with the surrounding environment.",
        size: "35m²",
        bedType: "1 Queen Bed",
        image: img6,
      }
    // Add more rooms here as needed
  ];

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const closePopup = () => {
    setSelectedRoom(null);
  };

  return (
    <>
     <section>
        <div>
            <Rooms/>
        </div>
    </section>
    <section>
    <div className={`${roomsCSS.Rooms_container} section`}>
      {/* <small className="section_Heading">Luxury Suites</small> */}
      <h2 className="section_Title">Our Best <span>Rooms</span></h2>

      <div className={roomsCSS.cards}>
        {rooms.map((room, index) => (
          <div
            key={index}
            className={roomsCSS.card_container}
            onClick={() => handleRoomClick(room)}
          >
            <div className={roomsCSS.card}>
              <img src={room.image} alt={room.name} className={roomsCSS.room_image} />
              <div className={roomsCSS.card_content}>
                <h1 >{room.name}</h1>
                {/* <p>{room.price}</p>
                <p>{room.size}</p>
                <p>{room.bedType}</p> */}
              </div>
              <button className={roomsCSS.booknow}>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Room Details Pop-up */}
      {selectedRoom && (
        <div className={roomsCSS.popup_overlay}>
          <div className={roomsCSS.popup_content}>
            <span className={roomsCSS.close_btn} onClick={closePopup}>×</span>
            <h3>{selectedRoom.name}</h3>
            <img src={selectedRoom.image} alt={selectedRoom.name} className={roomsCSS.popup_image} />
            <p><strong>Price:</strong> {selectedRoom.price}</p>
            <p><strong>Size:</strong> {selectedRoom.size}</p>
            <p><strong>Bed Type:</strong> {selectedRoom.bedType}</p>
            <p>{selectedRoom.description}</p>
          
          </div>
        </div>
      )}
    </div>
    </section>
   
    </>
    
  );
}

export default Roompage;
