import React from "react";
import { judges } from "../assets/data";
const Judge = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2 row justify-content-center'>
            <div className='col-12'>
                <h1>Judges</h1>
                <hr className='line' />
            </div>
            {judges.map((user) => (
                <div className='col-12 px-1 py-2'>
                    <div className='judge-card row'>
                        <div className='judge-img col-12 col-md-4'>
                            <img
                                className='img-fluid my-auto mx-auto'
                                src={user.img}
                                alt=''
                            />
                        </div>
                        <div className='judge-content  col-12 col-md-8'>
                            <h4>
                                <strong>{user.name}</strong>
                            </h4>
                            <h5>
                                {user.role.slice(
                                    0,
                                    user.role.indexOf("for") + 4,
                                )}
                                <strong>
                                    {user.role.slice(
                                        user.role.indexOf("for") + 4,
                                    )}
                                </strong>
                            </h5>
                            <p>{user.about}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Judge;
