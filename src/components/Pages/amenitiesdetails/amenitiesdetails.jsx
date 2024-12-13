import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AmenitiesdetailsCSS from "./../amenitiesdetails/amenitiesdetails.module.css";

const amenities = [
  {
    id: 1,
    name: "Swimming Pool",
    description: "Relax and rejuvenate in our luxury swimming pool. Equipped with modern facilities for your comfort and enjoyment.",
    price: "Free",
    size: "Large",
    // bedType: "N/A",
  },
  {
    id: 2,
    name: "Gym",
    description: "Stay fit and active during your stay with our fully equipped gym facilities designed for all fitness levels.",
    price: "Free",
    size: "Medium",
    // bedType: "N/A",
  },
  {
    id: 3,
    name: "Restro & Cafe",
    description: "Enjoy gourmet meals and refreshing beverages in our premium Restro & Cafe, offering a delightful dining experience.",
    price: "$20 per person",
    size: "Varies",
    // bedType: "N/A",
  },
];

function AmenitiesDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { amenitieitem } = useParams();
  const navigate = useNavigate();

  // Find the amenity by ID (convert param to number)
  const amenitiedetail = amenities.find((val) => val.id === Number(amenitieitem));

  // Handle undefined amenity
  if (!amenitiedetail) {
    return <p>Amenity details not found. Please select a valid amenity from the Amenities page.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!");
    navigate("/Amenities");
  };

  return (
    <div className={AmenitiesdetailsCSS.details_container}>
      <h2>{amenitiedetail.name}</h2>
      <p>
        <strong>Price:</strong> {amenitiedetail.price}
      </p>
      <p>
        <strong>Size:</strong> {amenitiedetail.size}
      </p>
      {/* <p>
        <strong>Bed Type:</strong> {amenitiedetail.bedType}
      </p> */}
      <p className={AmenitiesdetailsCSS.des}>{amenitiedetail.description}</p>

      <form onSubmit={handleSubmit} className={AmenitiesdetailsCSS.booking_form}>
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
        <button type="submit" className={AmenitiesdetailsCSS.submit_button}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default AmenitiesDetails;
