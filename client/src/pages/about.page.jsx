import React from "react";
import mailer1 from "../assets/mailer1.pdf";
import mailer2 from "../assets/mailer2.pdf";
const About = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2'>
            <h1>About the ASCE All India Student Conference</h1>
            <hr className='line' />
            <p>
                Welcome to the All India Student Conference in
                Vellore Institute of Technology, Vellore. The conference hosts the yearly business meeting,
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
                November 15, 2020.
            </p>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6 col-lg-4 px-0'>
                    <a href={mailer1} target='_blank' rel='noreferrer'>
                        <div class='box'>Mailer 1</div>
                    </a>
                    <p>Released November 15, 2020</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 px-0'>
                    <a href={mailer2} target='_blank' rel='noreferrer'>
                        <div class='box'>Mailer 2</div>
                    </a>
                    <p>Released on December 30, 2020</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 px-0'>
                    <div class='box'>Mailer 3</div>
                    <p>Released on January 30, 2021</p>
                </div>
            </div>
            <p>
                To contact conference organizers, please email{" "}
                <a href='mailto:asce@vit.ac.in'>asce@vit.ac.in</a>
            </p>
        </div>
    );
};
export default About;
