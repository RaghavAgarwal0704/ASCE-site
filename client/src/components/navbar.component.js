import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Alert,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
} from "reactstrap";

const NavbarComponent = () => {
    const [error] = useState("");
    const [showError, setShowError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Alert
                color='danger'
                isOpen={showError}
                toggle={() => {
                    setShowError(false);
                }}>
                {error}
            </Alert>
            <Navbar expand='lg' className='justify-content-between'>
                <div>
                    <Link
                        to='/'
                        className='navbar-brand Raleway text-align-center'>
                        ASCE
                    </Link>
                </div>
                <NavbarToggler
                    onClick={toggle}
                    className={`position-relative ${
                        !isOpen ? "collapsed" : ""
                    }`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavbarToggler>

                <Collapse
                    isOpen={isOpen}
                    navbar
                    className='justify-content-lg-center'>
                    <Nav className='row justify-content-center px-4' navbar>
                        <NavItem className='m-1 my-2 my-lg-1'>
                            <NavLink to='/' exact>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className='m-1 my-2 my-lg-1'>
                            <NavLink to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem className='m-1 my-2 my-lg-1'>
                            <NavLink to='/event'>Events</NavLink>
                        </NavItem>
                        {/* <NavItem className=''> */}
                        <UncontrolledDropdown
                            nav
                            inNavbar
                            className='m-1 my-2 my-lg-1 p-0'>
                            <DropdownToggle nav caret>
                                <NavLink to='/sponsors'>Sponsors</NavLink>
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                    <Link to='/sponsors'>Sponsors</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/sponsors/become'>
                                        Become a sponsor
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/* </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default NavbarComponent;
