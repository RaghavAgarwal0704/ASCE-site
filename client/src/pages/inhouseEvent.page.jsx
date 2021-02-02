import React from "react";
import { Link } from "react-router-dom";
import unbreakable from "../assets/unbreakable.jpg";
import acethespace from "../assets/acethespace.jpg";
import cadathon from "../assets/cadathon.jpg";
import paper from "../assets/paper.jpg";
const InhouseCompetitions = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2' id='event'>
            <h1>Events</h1>
            <hr className='line' />
            <p>
                There are several Inhouse Competitions.
            </p>

            <div className='row justify-content-center my-2'>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/unbreakable'>
                        <img src={unbreakable} alt='unbreakable' />
                        <div class='centered'>
                            <h4>Unbreakable(quiz)</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/acethespace'>
                        <img src={acethespace} alt='acethespace' />
                        <div class='centered'>
                            <h4>Ace the Space</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/cadathon'>
                        <img src={cadathon} alt='cadathon' />
                        <div class='centered'>
                            <h4>CAD-A-THON</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/paper'>
                        <img src={paper} alt='paper' />
                        <div class='centered'>
                            <h4>Paper presentation</h4>
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
export default InhouseCompetitions;
