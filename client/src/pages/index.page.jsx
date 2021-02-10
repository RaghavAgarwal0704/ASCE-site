import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2'>
            <h1>ASCE All India Student Conference</h1>
            <hr className='line' />
            <div>
                <p>
                    The ASCE All India Student Conference will be held on March
                    25-27, 2021, hosted by Vellore Institute of Technology, Vellore. 
                </p>
                <p className='mt-3'>
                    If you have any questions, email conference organizers at{" "}
                    <a href='mailto:asce@vit.ac.in'>asce@vit.ac.in</a>
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
                            learn more about the ASCE All India Student
                            Conference
                        </p>
                    </div>
                    <div className='col-12 col-md-6 px-0'>
                        <div className='box mb-4'>
                            <h5>Become a Sponsor</h5>
                        </div>
                        <p>
                            Visit our <Link to='/sponsors'>sponsors page</Link>{" "}
                            to learn more about supporting the ASCE All India Student Conference!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index;
