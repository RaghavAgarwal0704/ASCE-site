import React, { useState, useEffect } from "react";
// import "../styles/footer.css";
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
                        <p className='pr-0 pr-lg-5'>
                            ASCE-VIT is a student chapter in Vellore Institute
                            of Technology, Vellore, committed towards inspiring
                            and motivating personalities in the field of civil
                            engineering. It is a group of 75 dedicated students
                            who are relentless in their endeavours.
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
                            <ul
                                className='mx-auto my-2 p-0 '
                                style={{
                                    width: "fit-content",
                                    textAlign: "start",
                                }}>
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
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                    />{" "}
                                    <Link to='/sponsors'>Sponsors</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                    />{" "}
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                        </Collapse>
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
                            className='text-align-center'>
                            Vellore Institute of Technology, Vellore
                            <br />
                            asce@vit.ac.in
                        </Collapse>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 mt-2'>
                        <ul className='list-unstyled list-inline social text-center'>
                            <li className='list-inline-item'>
                                <a href='https://www.facebook.com/asceVIT/'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='https://instagram.com/asce.vit?igshid=ccdsz9lhltnd'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='https://twitter.com/asce__vit?s=21'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='mailto:asce@vit.ac.in'>
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
                        <small>
                            Website created and maintained by{" "}
                            <a
                                href='https://github.com/RaghavAgarwal0704'
                                target='_blank'
                                rel='noreferrer'>
                                Raghav
                            </a>{" "}
                            &{" "}
                            <a
                                href='https://github.com/SparshJain2000/'
                                target='_blank'
                                rel='noreferrer'>
                                Sparsh
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
