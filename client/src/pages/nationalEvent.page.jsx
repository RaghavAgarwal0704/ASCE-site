import React from "react";
import { Link } from "react-router-dom";
import canoe from "../assets/canoe.jpg";
import sustainable from "../assets/sustainable.jpg";
import survey from "../assets/survey.png";
const NationalCompetitions = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2' id='event'>
            <h1>Events</h1>
            <hr className='line' />
            <p>
                There are several National Competitions.
            </p>

            <div className='row justify-content-center my-2'>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/canoe'>
                        <img src={canoe} alt='canoe' />
                        <div class='centered'>
                            <h4>ASCE Concrete Canoe Competition</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/sustainable'>
                        <img src={sustainable} alt='sustainable' />
                        <div class='centered'>
                            <h4>ASCE Sustainable Solutions Competition</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/survey'>
                        <img src={survey} alt='survey' />
                        <div class='centered'>
                            <h4>ASCE UESI Surveying Competition</h4>
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
export default NationalCompetitions;
