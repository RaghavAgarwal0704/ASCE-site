import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../assets/data";
import { Link } from "react-router-dom";
const Event = () => {
    const { event } = useParams();

    return (
        <div className='row col-12 col-md-11 col-lg-10 mx-auto my-2'>
            <div className='col-12'>
                <h2>{events[event].name}</h2>
                <hr className='line' />
            </div>
            <div className='event-img'>
                <img
                    src={events[event].img}
                    alt={event}
                    className='img-fluid'
                />
            </div>
            <div className='event-content pl-md-3'>
                {events[event].objective && (
                    <>
                        <h5>
                            <strong>Objectives</strong>
                        </h5>
                        <p>{events[event].objective}</p>
                    </>
                )}
                {events[event].prerequisites && (
                    <>
                        <h5>
                            <strong>Prerequisites</strong>
                        </h5>
                        <p>{events[event].prerequisites}</p>
                    </>
                )}
                {events[event].participants && (
                    <>
                        <h5>
                            <strong>Participants</strong>
                        </h5>
                        <ul>
                            {events[event].participants.map((x, i) => (
                                <li key={i}>{x}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            {events[event].description && (
                <div className='col-12 px-0  mt-md-3'>
                    <h5>
                        <strong>Description</strong>
                    </h5>
                    <ul>
                        {events[event].description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            )}
            <Link to='/' className='btn btn-bg'>
                Register Here
            </Link>
        </div>
    );
};
export default Event;
