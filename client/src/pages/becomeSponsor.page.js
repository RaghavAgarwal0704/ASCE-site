import React from "react";
const BecomeSponsor = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2'>
            <h1>Sponsorship levels</h1>
            <hr className='line' />

            <div>
                <h3>GOLD: Corporate Gifts $3000+</h3>
                <hr className='bg-highlight' />
                <p>
                    Company logo with GOLD level acknowledgement on t-shirt,
                    website and any other conference materials. The company will
                    also be recognized at the online awards ceremony and have an
                    opportunity to speak with students via an online sign up.
                </p>
            </div>
            <div>
                <h3>SILVER: Corporate Gifts $1,000 - $2,999</h3>
                <hr className='bg-highlight' />
                <p>
                    Company logo with SILVER level acknowledgement on t-shirt,
                    website and any other conference materials. The company will
                    also be recognized at the online awards ceremony.
                </p>
            </div>
            <div>
                <h3>COPPER: Corporate Gifts under $1,000</h3>
                <hr className='bg-highlight' />
                <p>
                    Company logo with COPPER level acknowledgement on t-shirt,
                    website and any other conference materials.
                </p>
            </div>
            <div className='box'>
                <h5>Become a Sponsor</h5>
            </div>
            <div>
                To start the sponsorship process, or if you have any questions
                please contact conference organizers:{" "}
                <a href='mailto:xyz@gmail.com'>xyz@gmail.com</a>
            </div>
        </div>
    );
};
export default BecomeSponsor;
