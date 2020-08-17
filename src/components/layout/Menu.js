import React, { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LOGO from '../../small-logo.svg'
import BLUELOGO from '../../ftp_logo.png'
import FocusLock from 'react-focus-lock'
import BurgerMenu from './Navbar/Burger'
import Sidebar from './Navbar/Sidebar'
import Sticky from 'react-sticky-el'

function Menu() {
    const [open, setOpen] = useState(false)
    const node = useRef()
    const menuId = "main-menu"
    
    return (
        <>
            <div
                className="scrollarea"
                style={{
                    position: 'absolute',
                    zIndex: '5555',
                    left: '0',
                    top: '0',
                    right: '0'
                }}
            >
                <Sticky
                    style={{
                        background: 'transparent'
                    }}        
                >
                    <div
                        className=""
                        style={{
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-lg-2 text-left text-lg-center py-3 cu-py-3">
                                    <Link 
                                        to="/"
                                        className=""
                                    >
                                        <img
                                            src={LOGO}
                                            alt="Frontier Technology Partners"
                                            className="unstickyImg d-block"
                                        />
                                        <img
                                            src={BLUELOGO}
                                            alt="Frontier Technology Partners"
                                            className="stickyImg d-none"
                                            height="40"
                                        />
                                    </Link>
                                </div>
                                <div className="col-6 col-lg-10 d-none d-lg-block">
                                    <ul
                                        className="menu-link float-right list-unstyled mb-0 d-flex h-100 align-items-center text-white p-font text-uppercase"
                                        style={{
                                            fontSize: '16px',
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        <li
                                            className="cu-py-3 py-3 mr-5 d-flex h-100 align-items-center"
                                        >
                                            <NavLink 
                                                to="/"
                                                className="text-white text-decoration-none line-btm position-relative"
                                            >Home</NavLink>
                                        </li>
                                        <li
                                            className="cu-py-3 py-3 mr-5 d-flex h-100 align-items-center"
                                        >
                                            <NavLink 
                                                to="/about-us"
                                                className="text-white text-decoration-none line-btm position-relative"
                                                activeClassName="linkActive"
                                            >About Us</NavLink>
                                        </li>
                                        <li
                                            className="cu-py-3 py-3 mr-5 linkHover position-relative d-flex h-100 align-items-center"
                                        >
                                            <a 
                                                href="!#" 
                                                id="dropdownMenuLink"
                                                data-toggle="dropdown" 
                                                aria-haspopup="true" 
                                                aria-expanded="true"
                                                rel="noopener noreferrer"
                                                className="text-white text-decoration-none custom-dropdown-menu"
                                            >
                                                Our Services
                                            </a>

                                            <div 
                                                className="dropdown-menu submenu-bg m-0 px-2 border-0 rounded-0 shadow-sm text-white pb-3" 
                                                aria-labelledby="dropdownMenuLink"
                                                style={{
                                                    zIndex: '999999',
                                                    fontSize: '14px',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                <NavLink 
                                                    to="/customized-software-solutions"
                                                    activeClassName="linkActive noLineActive"
                                                    className="bg-transparent dropdown-item text-decoration-none p-font text-secondary py-2 px-4 d-block"
                                                >Customized Software Solutions</NavLink>
                                                <NavLink 
                                                    to="/web-design-creation"
                                                    activeClassName="linkActive noLineActive"
                                                    className="bg-transparent dropdown-item text-decoration-none p-font text-secondary py-2 px-4 d-block"
                                                >Web Design Creation</NavLink>
                                                <NavLink 
                                                    to="/mobile-application"
                                                    activeClassName="linkActive noLineActive"
                                                    className="bg-transparent dropdown-item text-decoration-none p-font text-secondary py-2 px-4 d-block"
                                                >Mobile Application</NavLink>
                                                <NavLink 
                                                    to="/system-maintenance-support"
                                                    activeClassName="linkActive noLineActive"
                                                    className="bg-transparent dropdown-item text-decoration-none p-font text-secondary py-2 px-4 d-block"
                                                >System Maintenance & Support</NavLink>
                                                <NavLink 
                                                    to="/network-security"
                                                    activeClassName="linkActive noLineActive"
                                                    className="bg-transparent dropdown-item text-decoration-none p-font text-secondary py-2 px-4 d-block"
                                                >Network & Security</NavLink>
                                                <NavLink 
                                                    to="/it-consulting"
                                                    activeClassName="linkActive noLineActive"
                                                    className="bg-transparent dropdown-item text-decoration-none p-font text-secondary py-2 px-4 d-block"
                                                >IT Consulting</NavLink>
                                            </div>
                                        </li>
                                        <li
                                            className="cu-py-3 py-3 mr-5 d-flex h-100 align-items-center"
                                        >
                                            <NavLink 
                                                to="/enquiry"
                                                className="text-white text-decoration-none line-btm position-relative"
                                                activeClassName="linkActive"
                                            >Enquiry</NavLink>
                                        </li>
                                        <li
                                            className="cu-py-3 py-3 mr-5 d-flex h-100 align-items-center"
                                        >
                                            <NavLink 
                                                to="/careers"
                                                className="text-white text-decoration-none line-btm position-relative"
                                                activeClassName="linkActive"
                                            >Careers</NavLink>
                                        </li>
                                        <li
                                            className="cu-py-3 py-3 d-flex h-100 align-items-center"
                                        >
                                            <NavLink 
                                                to="/contact-us"
                                                className="text-white text-decoration-none line-btm position-relative"
                                                activeClassName="linkActive"
                                            >Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 d-block d-lg-none">
                                    <div ref={node} className="d-flex h-100 align-items-center float-right">
                                        <FocusLock disabled={!open}>
                                            <BurgerMenu open={open} setOpen={setOpen} id={menuId} />
                                        </FocusLock>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Sticky>
            </div>

            <div ref={node}>
                <FocusLock disabled={!open}>
                    <Sidebar open={open} setOpen={setOpen} id={menuId} />
                </FocusLock>
            </div>
        </>
    )
}

export default Menu
