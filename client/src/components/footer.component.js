import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function FooterComponent() {
    return (
        <footer className=' py-3 footer'>
            <div className='mx-2 mx-sm-2  mx-md-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-8 about-company'>
                        <h3>ASCE</h3>
                        <p className='pr-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Sequi qui pariatur vel! Dicta, quibusdam
                        </p>
                    </div>
                    <div className='col-lg-3 col-4 links'>
                        <h5 className='mt-lg-0 mt-sm-3 '>Links</h5>
                        <ul className='m-0 p-0 '>
                            <li>
                                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                                <Link to='/event'>Event</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                        <br />
                    </div>

                    <div className='col-lg-4 col-12 location'>
                        <h5 className='mt-lg-0 mt-sm-4'>Contact Us</h5>
                        <p>
                            Address : Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Aspernatur pariatur sed, quis
                        </p>
                        <p className='mb-0'>(+91) 9999-888-888</p>
                        <p>support@asce.com</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 mt-2'>
                        <ul className='list-unstyled list-inline social text-center'>
                            <li className='list-inline-item'>
                                <a href='https://www.facebook.com/'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='https://www.instagram.com/'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='https://www.linkedin.com/'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='https://twitter.com/'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                </div>
                <div className='row mt-1'>
                    <div className='col copyright'>
                        <small className='text-white-50'>
                            © ASCE 2020. All Rights Reserved.
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
