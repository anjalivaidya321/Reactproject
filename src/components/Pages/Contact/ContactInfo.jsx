import React, { useState } from 'react';
import styles from './../Contact/ContactInfo.module.css'; // CSS module for styling
import { useEffect } from 'react';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful booking
    setNotification('Thank you for booking! Your stay has been successfully registered.');

    // Reset form fields
    setName('');
    setEmail('');
    setRoom('');
    setCheckInDate('');
    setCheckOutDate('');
    setMessage('');

    // Hide notification after 5 seconds
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  return (
    <div className={`${styles.contactContainer} section`}>
      <h2 className="section_Title">Book Your Stay with Us!</h2>

      {/* Toast Notification */}
      {notification && (
        <div className={styles.toast}>
          {notification}
        </div>
      )}

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="room">Preferred Room:</label>
          <select
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            required
            className={styles.inputField}
          >
            <option value="">Select Room</option>
            <option value="Junior Suite">Junior Suite</option>
            <option value="Deluxe Suite">Deluxe Suite</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="checkIn">Check-In Date:</label>
          <input
            type="date"
            id="checkIn"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="checkOut">Check-Out Date:</label>
          <input
            type="date"
            id="checkOut"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Additional Requests:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textareaField}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
