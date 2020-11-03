import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  NavLink,
  NavItem
} from 'reactstrap';

const Header = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">TE Connectivity</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to='/Main'>Main</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/Data'>Data</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Molding</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

