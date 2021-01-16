import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Footer = (props) => {
    // const [isOpen, setIsOpen] = useState(false);
  
    // const toggle = () => setIsOpen(!isOpen);
  
    return (

        <div className= 'footer'>
                    <NavLink href={ props.sign_in_route }>Sign In
                    </NavLink>
                    <NavLink href={ props.sign_up_route }>Sign Up
                    </NavLink>
        </div>

    );
  }

export default Footer