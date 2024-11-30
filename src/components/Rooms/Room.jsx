import React from "react";
import roomsCSS from './../Rooms/Room.module.css'
function Rooms(){
    return(
        <div className={`${roomsCSS.Rooms_container} section`}>
             <small className="section_Heading">Luxury Suites</small>
             <h2 className="section_Title">Our Best <span>Rooms</span></h2>

             <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front1}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={roomsCSS.card_back}>
                            <div className={roomsCSS.price}>
                                <p>$120</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Services</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.booknow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front2}`}>
                            <button>Twin Room</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card.card_back2}`}>
                            <div className={roomsCSS.price}>
                                <p>$120</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Services</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.booknow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front3}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card.card_back3}`}>
                            <div className={roomsCSS.price}>
                                <p>$120</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Services</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.booknow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front4}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card.card_back4}`}>
                            <div className={roomsCSS.price}>
                                <p>$120</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Services</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.booknow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front5}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card.card_back5}`}>
                            <div className={roomsCSS.price}>
                                <p>$120</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Services</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.booknow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front6}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card.card_back6}`}>
                            <div className={roomsCSS.price}>
                                <p>$120</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Services</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.booknow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Rooms;