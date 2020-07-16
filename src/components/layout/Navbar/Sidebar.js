import React from 'react'
import { bool, func } from 'prop-types'
import { withRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../../small-logo.svg'

const Sidebar = ({ open, setOpen, ...props }) => {
    const isHidden = open ? true : false 
    const tabIndex = isHidden ? 0 : -1
    const isExpanded = open ? true : false

    return(
        <StyledMenu 
            open={open} 
            aria-hidden={!isHidden} 
            {...props} 
            className=""
        >
            <div className="menu-wrapper h-100">
                <StyledBurger 
                    aria-label="Toggle menu" 
                    aria-expanded={isExpanded} 
                    open={open} 
                    onClick={() => setOpen(!open)} 
                    {...props}
                    className="d-block"
                >
                    <span />
                    <span />
                </StyledBurger>
                
                <ul 
                    className="m-0 p-0 list-unstyled text-left menu-link p-font pb-5"
                >
                    <li>
                        <img 
                            src={LOGO}
                            alt="Frontier Technology Partners"
                            className="mb-5 align-self-start"
                        />
                    </li>
                    <li>
                        <NavLink to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)} className="d-inline-block text-decoration-none link-menu text-uppercase">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" tabIndex={tabIndex} onClick={() => setOpen(!open)} className="d-inline-block text-decoration-none link-menu text-uppercase" activeClassName="deviceLinkActive">About Us</NavLink>
                    </li>
                    <li
                    >
                        <a 
                            href="!#" 
                            id="dropdownMenuLink"
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            rel="noopener noreferrer"
                            className="d-inline-block text-decoration-none link-menu text-uppercase custom-dropdown-menu position-relative"
                        >
                            Our Services
                        </a>

                        <div 
                            className="small-menus dropdown-menu m-0 p-0 pl-3 border-0 rounded-0 w-100" 
                            aria-labelledby="dropdownMenuLink"
                            style={{
                                background: 'transparent',
                                zIndex: '999999',
                            }}
                        >
                            <NavLink 
                                to="/customized-software-solutions"
                                tabIndex={tabIndex}
                                onClick={() => setOpen(!open)}
                                className="dropdown-item text-uppercase"
                                style={{
                                    fontSize: '1.1rem',
                                    whiteSpace: 'unset'
                                }}
                                activeClassName="deviceLinkActive"
                            >Customized Software Solutions</NavLink>
                            <NavLink 
                                to="/web-design-creation"
                                tabIndex={tabIndex}
                                onClick={() => setOpen(!open)}
                                className="dropdown-item text-uppercase"
                                style={{
                                    fontSize: '1.1rem',
                                    whiteSpace: 'unset'
                                }}
                                activeClassName="deviceLinkActive"
                            >Web Design Creation</NavLink>
                            <NavLink 
                                to="/mobile-application"
                                tabIndex={tabIndex}
                                onClick={() => setOpen(!open)}
                                className="dropdown-item text-uppercase"
                                style={{
                                    fontSize: '1.1rem',
                                    whiteSpace: 'unset'
                                }}
                                activeClassName="deviceLinkActive"
                            >Mobile Application</NavLink>
                            <NavLink 
                                to="/system-maintenance-support"
                                tabIndex={tabIndex}
                                onClick={() => setOpen(!open)}
                                className="dropdown-item text-uppercase"
                                style={{
                                    fontSize: '1.1rem',
                                    whiteSpace: 'unset'
                                }}
                                activeClassName="deviceLinkActive"
                            >System Maintenance & Support</NavLink>
                            <NavLink 
                                to="/network-security"
                                tabIndex={tabIndex}
                                onClick={() => setOpen(!open)}
                                className="dropdown-item text-uppercase"
                                style={{
                                    fontSize: '1.1rem',
                                    whiteSpace: 'unset'
                                }}
                                activeClassName="deviceLinkActive"
                            >Network & Security</NavLink>
                            <NavLink 
                                to="/it-consulting"
                                tabIndex={tabIndex}
                                onClick={() => setOpen(!open)}
                                className="dropdown-item text-uppercase mb-3"
                                style={{
                                    fontSize: '1.1rem',
                                    whiteSpace: 'unset'
                                }}
                                activeClassName="deviceLinkActive"
                            >IT Consulting</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/enquiry" tabIndex={tabIndex} onClick={() => setOpen(!open)} className="d-inline-block text-decoration-none link-menu text-uppercase" activeClassName="deviceLinkActive">Enquiry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/careers" tabIndex={tabIndex} onClick={() => setOpen(!open)} className="d-inline-block text-decoration-none link-menu text-uppercase" activeClassName="deviceLinkActive">Careers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" tabIndex={tabIndex} onClick={() => setOpen(!open)} className="d-inline-block text-decoration-none link-menu text-uppercase" activeClassName="deviceLinkActive">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </StyledMenu>
    )
}

Sidebar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}

export default withRouter(Sidebar)

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  -o-transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  -ms-transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  -moz-transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  -webkit-transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  transition: transform ${({ open }) => open ? '0.3s' : '0.15s'} ease-in-out;
  -webkit-transition: -webkit-transform ${({ open }) => open ? '0.3s' : '0.15s'} ease-in-out;
  -o-transition: -o-transform ${({ open }) => open ? '0.3s' : '0.15s'} ease-in-out;
  -ms-transition: -ms-transform ${({ open }) => open ? '0.3s' : '0.15s'} ease-in-out;
  -moz-transition: -moz-transform ${({ open }) => open ? '0.3s' : '0.15s'} ease-in-out;

  .menu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #029acc;
    text-align: left;
    padding: 2rem;
    overflow-y: visible;
    overflow-x: hidden;
  }

    a {
        font-size: 1.5rem;
        margin-bottom: 10px;
        padding: 0;
        letter-spacing: 1px;
        color: #fff;
        transition: color 0.3s linear;
        @media (max-width: 575px) {
            font-size: 1.3rem;
        }
        &:hover {
            color: #ffc107 !important;
        }
    }
`

const StyledBurger = styled.button`
  position: fixed;
  right: 2rem;
  top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transform: scale(1.0);
  transition: transform 0.1s linear;
  span {
    width: 30px;
    height: 2px;
    display: block;
    background: #fff;
    border-radius: 10px;
    transition: transform 0.5s linear;
    position: relative;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(45deg)'};
    }
    :nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(-45deg)'};
      margin-top: -2px;
    }
  }
  &:hover {
      transform: scale(1.3);
  }
`