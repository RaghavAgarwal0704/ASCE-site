import React from "react";
import doc from "../assets/brochure.pdf";
const About = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2'>
            <h1>About the ASCE Southeast Conference</h1>
            <hr className='line' />
            <p>
                Welcome to the ASCE 2021 Southeast Student Conference in
                Nashville, TN. The conference hosts the yearly business meeting,
                civil engineering related competitions, and an awards banquet.
                To learn more about ASCE Student Conferences, visit the{" "}
                <a
                    href='https://www.asce.org/student_conferences/'
                    target='_blank'
                    rel='noreferrer'>
                    ASCE website
                </a>
            </p>
            <p>
                For up to date details, please read Mailer 1, released on
                October 15, 2020.
            </p>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6 col-lg-4 px-0'>
                    <a href={doc} target='_blank' rel='noreferrer'>
                        <div class='box'>Mailer 1</div>
                    </a>
                    <p>Released October 15, 2020</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 px-0'>
                    <div class='box'>Mailer 2</div>
                    <p>Will be released on January 15, 2021</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 px-0'>
                    <div class='box'>Mailer 3</div>
                    <p>Will be released on March 4th, 2021</p>
                </div>
            </div>
            <p>
                To contact conference organizers, please email{" "}
                <a href='mailto:xyz@gmail.com'>xyz@gmail.com</a>
            </p>
        </div>
    );
};
export default About;
