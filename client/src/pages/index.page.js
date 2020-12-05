import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2'>
            <h1>ASCE 2021 Southeast Student Conference</h1>
            <hr className='line' />
            <div>
                <p>
                    The ASCE 2021 Southeast Student Conference will be March
                    25-27, 2021, hosted by Vanderbilt University and Lipscomb
                    University. Put on your cowboy boots and travel back to the
                    Wild West and join us in Engineering for a New Frontier.
                </p>
                <p className='mt-3'>
                    If you have any questions, email conference organizers at{" "}
                    <a href='mailto:xyz@gmail.com'>xyz@gmail.com</a>
                </p>
                <div className='box'>
                    <h5>Mailer 1 and Competetions released</h5>
                </div>
                <p>
                    Visit our <Link to='/event'>events</Link> page to view this
                    year's competetions!
                </p>

                <div className='row mt-5'>
                    <div className='col-12 col-md-6 px-0 '>
                        <div className='box mb-4'>
                            <h5>What is an ASCE Student Conference?</h5>
                        </div>
                        <p>
                            Visit our <Link to='/about'>about page</Link> to
                            learn more about the ASCE 2021 Southeast Student
                            Conference
                        </p>
                    </div>
                    <div className='col-12 col-md-6 px-0'>
                        <div className='box mb-4'>
                            <h5>Become a Sponsor</h5>
                        </div>
                        <p>
                            Visit our <Link to='/sponsors'>sponsors page</Link>{" "}
                            to learn more about supporting the ASCE 2021
                            Southeast Student Conference!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index;
