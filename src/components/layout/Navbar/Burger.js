import React from 'react'
import { withRouter } from 'react-router-dom'
import { bool, func } from 'prop-types'
import styled from 'styled-components'

const BurgerMenu = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger 
        aria-label="Toggle menu" 
        aria-expanded={isExpanded} 
        open={open} 
        onClick={() => setOpen(!open)} {...props}
        className="d-block"
    >
      <span className="menu-bar" />
      <span className="menu-bar" />
      <span className="menu-bar" />
    </StyledBurger>
  )
}

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default withRouter(BurgerMenu)

const StyledBurger = styled.button`
  position: relative;
  top: 5%;
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
  margin-left: auto;
  span {
    width: 30px;
    height: 2px;
    display: block;
    background: ${({ open }) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transition: all 0.4s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(2) {
        width: 20px;
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        margin: 6px 0;
    }
    :nth-child(3) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
  }
  &:hover span:nth-child(2) {
    width: 30px;
}
`