import React from "react";
const NationalEvent = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2'>
            <h1>National Competitions</h1>
            <hr className='line' />
            <article className='my-4'>
                <div className='box p-2'>
                    <h4>1. ASCE Concrete Canoe Competition</h4>
                </div>
                <p>
                    The goal of this competition is to provide civil engineering
                    students an opportunity to gain hands-on, practical
                    experience and leadership skills by working with concrete
                    mix designs and project management.
                </p>
            </article>
            <article className='my-4'>
                <div className='box p-2'>
                    <h4>2. ASCE Sustainable Solutions Competition</h4>
                </div>
                <p>
                    This competition challenges students to develop a stronger
                    understanding of sustainability and learn to incorporate
                    sustainable solutions into everyday problems that engineers
                    incur. Students are encouraged to be creative in their
                    solutions and use all resources available.  This year’s
                    theme is a parks and recreation challenge.
                </p>
            </article>
            <article className='my-4'>
                <div className='box p-2'>
                    <h4>3. ASCE UESI Surveying Competition</h4>
                </div>
                <p>
                    Consists of four separate tasks, each involving three team
                    members to demonstrate the ability to apply the techniques
                    of land surveying.
                </p>
            </article>
        </div>
    );
};
export default NationalEvent;
