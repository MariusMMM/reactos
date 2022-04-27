import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Navbar.js';

const NavbarInitialState={};
const Navbar=(props)=>{
    const [state,setstate] = useState(NavbarInitialState);
    useEffect(()=>{

    },[state])

    return (
        <div className={style.Navbar} data-testid='Navbar'>
            navbar
        </div>
    );
};

Navbar.propTypes = {

};

Navbar.defaultProps= {

};

export default Navbar;