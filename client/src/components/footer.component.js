import React, { useState, useEffect } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleRight,
    faAngleDown,
    faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Collapse, NavbarToggler } from "reactstrap";
export default function FooterComponent() {
    useEffect(() => {
        const handleResize = () => {
            const open = window.innerWidth >= 992;
            setIsOpenContact(open);
            setIsOpenLinks(open);
        };

        window.addEventListener("resize", handleResize);
        // return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [isOpenLinks, setIsOpenLinks] = useState(true);
    const [isOpenContact, setIsOpenContact] = useState(true);
    const toggle = () => setIsOpenLinks(!isOpenLinks);
    const toggleContact = () => setIsOpenContact(!isOpenContact);
    return (
        <footer className=' py-3 footer'>
            <div className='mx-2 mx-sm-2  mx-md-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-12 about-company'>
                        <h3>ASCE</h3>
                        <p className='pr-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Sequi qui pariatur vel! Dicta, quibusdam
                        </p>
                    </div>
                    <div className='col-lg-3 col-12 links text-align-center'>
                        <h5 className='mt-lg-0 mt-sm-3 '>
                            Links
                            <NavbarToggler
                                onClick={toggle}
                                className={`d-inline d-lg-none position-relative ${
                                    !isOpenLinks ? "collapsed" : ""
                                }`}>
                                <FontAwesomeIcon
                                    icon={
                                        !isOpenLinks ? faAngleDown : faAngleUp
                                    }
                                />
                            </NavbarToggler>
                        </h5>
                        <Collapse
                            isOpen={isOpenLinks}
                            navbar
                            className='justify-content-lg-center'>
                            <ul className='m-0 p-0 '>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                    />{" "}
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                    />{" "}
                                    <Link to='/event'>Event</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                    />{" "}
                                    <Link to='/about'>About</Link>
                                </li>
                            </ul>
                        </Collapse>
                        <br />
                    </div>

                    <div className='col-lg-4 col-12 location text-align-center'>
                        <h5 className='mt-lg-0 mt-sm-3 '>
                            Contact Us
                            <NavbarToggler
                                onClick={toggleContact}
                                className={`d-inline d-lg-none position-relative ${
                                    !isOpenContact ? "collapsed" : ""
                                }`}>
                                <FontAwesomeIcon
                                    icon={
                                        !isOpenContact ? faAngleDown : faAngleUp
                                    }
                                />
                            </NavbarToggler>
                        </h5>
                        <Collapse
                            isOpen={isOpenContact}
                            navbar
                            className='justify-content-lg-center'>
                            <p>
                                Address : Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Aspernatur
                                pariatur sed, quis
                            </p>
                            <p style={{ textAlign: "end" }}>
                                <p className='mb-0'>(+91) 9999-888-888</p>
                                <p>support@asce.com</p>
                            </p>
                        </Collapse>
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
                            <li className='list-inline-item'>
                                <a href='mailto:jainsparsh0801@gmail.com'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='bg-secondary' />
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
