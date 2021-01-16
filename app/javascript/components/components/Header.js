import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
    <Navbar 
        color="dark"
        dark expand="md"
        fixed="top">
    <NavbarBrand href="/">ApartmentApp</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem >
        <NavLink href={ props.sign_in_route }>Sign In
        </NavLink>
      </NavItem>
      <NavItem >
        <NavLink href={ props.sign_up_route }>Sign Up
        </NavLink>
      </NavItem>
      </Nav>
      <UncontrolledDropdown>
          <DropdownToggle nav caret>
            Navigation
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
            <a href="/availableapartments">Available Properties</a>
            </DropdownItem>
            <DropdownItem>
            <a href="/newapartment">Add a Listing</a>
            </DropdownItem>
            <DropdownItem>
            <a href="/myapartments">My Listings</a>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
            <a href={ props.sign_out_route }>Sign Out</a>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    </Collapse>
  </Navbar>
</div>
  )
}




  export default Header;