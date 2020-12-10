import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import logo from '../images/logo.png'

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar className="nav" color="faded" dark expand="md">
        <NavbarBrand className="nav-brand" tag={Link} to='/'><img src={logo} className="logo" alt="Company Logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Graphics
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to='/MolderA04'>
                  Molder A04
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to='/MolderA10'>
                  Molder A10
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavItem>
              <NavLink tag={Link} to='/Data'>Data</NavLink>
            </NavItem> */}
          </Nav>
          <NavbarText className="nav-item">Molding V1.3.5</NavbarText>
        </Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Header;

