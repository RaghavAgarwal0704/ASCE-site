import React from "react";
import { Link } from "react-router-dom";
import bim from "../assets/bim.jpg";
import modular from "../assets/modular.jpg";
import concrete from "../assets/concrete.jpg";
const workshop = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2' id='event'>
            <h1>Events</h1>
            <hr className='line' />
            <p>There are several National Competitions.</p>

            <div className='row justify-content-center my-2'>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/workshop/bim'>
                        <img src={bim} alt='bim' />
                        <div className='centered'>
                            <h4>BIM</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/workshop/modular'>
                        <img src={modular} alt='modular' />
                        <div className='centered'>
                            <h4>Modular and Nano housing</h4>
                        </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-6 col-md-4 position-relative p-1'>
                    <Link to='/event/workshop/concrete'>
                        <img src={concrete} alt='concrete' />
                        <div className='centered'>
                            <h4>Self healing concrete</h4>
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
export default workshop;
