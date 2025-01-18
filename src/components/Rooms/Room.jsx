import React from "react";
import roomsCSS from './../Rooms/Room.module.css';
import { Link } from "react-router-dom";

function Rooms() {
    // Array of room data
    const rooms = [
        {
            id: 1,
            type: "Junior Suite",
            price: "9,600",
            features: ["Daily Cleaning", "Home Services", "Housekeeping", "Wifi & Parking"],
            frontClass: roomsCSS.card_front1,
        },
        {
            id: 2,
            type: "Twin Room",
            price: "10,400",
            features: ["Daily Cleaning", "Home Services", "Housekeeping", "Wifi & Parking"],
            frontClass: roomsCSS.card_front2,
        },
        {
            id: 3,
            type: "Deluxe Room",
            price: "16,000",
            features: ["Daily Cleaning", "Room Service", "Housekeeping", "Pool Access"],
            frontClass: roomsCSS.card_front3,
        },
        {
            id: 4,
            type: "Family Suite",
            price: "20,000",
            features: ["Daily Cleaning", "Kids Play Area", "Housekeeping", "Wifi & Parking"],
            frontClass: roomsCSS.card_front4,
        },
        {
            id: 5,
            type: "Executive Suite",
            price: "40,000",
            features: ["Daily Cleaning", "Private Pool", "Housekeeping", "Butler Service"],
            frontClass: roomsCSS.card_front5,
        },
        {
            id: 6,
            type: "Luxury Suite",
            price: "32,000",
            features: ["Daily Cleaning", "Home Services", "Private Balcony", "Wifi & Parking"],
            frontClass: roomsCSS.card_front6,
        },
    ];

    return (
        <div className={`${roomsCSS.Rooms_container} section`}>
            <small className="section_Heading">Luxury Suites</small>
            <h2 className="section_Title">
                Our Best <span>Rooms</span>
            </h2>

            <div className={roomsCSS.cards}>
                {rooms.map((room) => (
                    <div className={roomsCSS.card_container} key={room.id}>
                        <div className={roomsCSS.card}>
                            {/* Card Front */}
                            <div className={`${roomsCSS.card_front} ${room.frontClass}`}>
                                <button className={roomsCSS.luxury}>{room.type}</button>
                            </div>
                            {/* Card Back */}
                            <div className={roomsCSS.card_back}>
                                <div className={roomsCSS.price}>
                                    <p>{room.price}</p>
                                </div>
                                <div className={roomsCSS.card_content}>
                                    <h3>{room.type}</h3>
                                    {room.features.map((feature, index) => (
                                        <p key={index}>- {feature}</p>
                                    ))}
                                </div>
                                <div className={roomsCSS.booknow}>
                                    <button>
                                        <Link to={`/Rooms/${room.id}`}>Book Now</Link>
                                    </button>
                                    <Link to={`/Rooms/${room.id}`}><i className="ri-arrow-right-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rooms;
