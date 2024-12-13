import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import detailsCSS from './../roomdetails/roomdetails.module.css';

const rooms = [
    {
        id: 1,
        type: "Junior Suite",
        price: "$120",
        features: ["Daily Cleaning ","+",  " Home Services ",   " Housekeeping ", "Wifi & Parking"],
        // frontClass: roomsCSS.card_front1,
    },
    {
        id: 2,
        type: "Twin Room",
        price: "$150",
        features: ["Daily Cleaning", "Home Services", "Housekeeping", "Wifi & Parking"],
        // frontClass: roomsCSS.card_front2,
    },
    {
        id: 3,
        type: "Deluxe Room",
        price: "$200",
        features: ["Daily Cleaning", "Room Service", "Housekeeping", "Pool Access"],
        // frontClass: roomsCSS.card_front3,
    },
    {
        id: 4,
        type: "Family Suite",
        price: "$250",
        features: ["Daily Cleaning", "Kids Play Area", "Housekeeping", "Wifi & Parking"],
        // frontClass: roomsCSS.card_front4,
    },
    {
        id: 5,
        type: "Presidential Suite",
        price: "$500",
        features: ["Daily Cleaning", "Private Pool", "Housekeeping", "Butler Service"],
        // frontClass: roomsCSS.card_front5,
    },
    {
        id: 6,
        type: "Luxury Suite",
        price: "$400",
        features: ["Daily Cleaning", "Home Services", "Private Balcony", "Wifi & Parking"],
        // frontClass: roomsCSS.card_front6,
    },
];
function RoomDetails() {
    useEffect(()=>{
           window.scrollTo(0,0)
    },[])
//   const { state } = useLocation();
  const { roomitem } = useParams();
  console.log(roomitem)
//   const navigate = useNavigate();
       const carddetail=rooms.find((val)=>{
        return val.id==roomitem
       })
       console.log(carddetail)
//   if (!state) {
//     return <p>Room details not found. Please select a room from the Rooms page.</p>;
//   }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!");
    navigate("/Rooms");
  };

  return (
    <div className={detailsCSS.details_container}>
      <h2>{carddetail.type}</h2>
      {/* <img src={carddetail.image} alt={carddetail.name} className={detailsCSS.room_image} /> */}
      <p><strong>Price:</strong> {carddetail.price}</p>
      <p><strong>Size:</strong> {carddetail.size}</p>
      <p><strong>Bed Type:</strong> {carddetail.features.join(" - ")}</p>
      <p>{carddetail.description}</p>

      <form onSubmit={handleSubmit} className={detailsCSS.booking_form}>
        <h3>Book Your Stay</h3>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Check-in Date:
          <input type="date" required />
        </label>
        <label>
          Check-out Date:
          <input type="date" required />
        </label>
        <button type="submit" className={detailsCSS.submit_button}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default RoomDetails;
