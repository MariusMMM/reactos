import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './TemplateName.js';

const TemplateNameInitialState={};
const TemplateName=(props)=>{
    const [state,setstate] = useState(TemplateNameInitialState);
    useEffect(()=>{

    },[state])

    return (
        <div className={style.TemplateName} data-testid='TemplateName'>
            templateName
        </div>
    );
};

TemplateName.propTypes = {

};

TemplateName.defaultProps= {

};

export default TemplateName;