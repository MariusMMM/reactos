import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Footer.js';

const FooterInitialState={};
const Footer=(props)=>{
    const [state,setstate] = useState(FooterInitialState);
    useEffect(()=>{

    },[state])

    return (
        <div className={style.Footer} data-testid='Footer'>
            footer
        </div>
    );
};

Footer.propTypes = {

};

Footer.defaultProps= {

};

export default Footer;