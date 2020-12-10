import React from "react";
import { Link } from "react-router-dom";
import inhouse from "../assets/inhouse.jpg";
import national from "../assets/national.jpg";
import workshop from "../assets/workshop.jpg";

import "../styles/events.css";
const Event = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2' id='event'>
            <h1>Events</h1>
            <hr className='line' />
            <p>
                The ASCE 2021 Southeast Student Conference will consist of
                National Competitions, Inhouse Competitions and Workshops.
            </p>

            <div className='row justify-content-center my-2'>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/national'>
                        <img src={national} alt='national' />
                        <div class='centered'>
                            <h4>National Competitions</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/inhouse'>
                        <img src={inhouse} alt='inhouse' />
                        <div class='centered'>
                            <h4>Inhouse Competitions</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/workshop'>
                        <img src={workshop} alt='workshop' />
                        <div class='centered'>
                            <h4>Workshops</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <p>
                To contact conference organizers, please email{" "}
                <a href='mailto:asce@vit.ac.in'>asce@vit.ac.in</a>
            </p>
        </div>
    );
};
export default Event;
