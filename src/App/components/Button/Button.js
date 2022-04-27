import React, { useEffect, useState } from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types'

const Button =(props)=>{
    const [isClicked, setClicked] = useState(false);
    const [isHovered, setHovered] = useState(false);
    useEffect(() => {
        console.log('update state', isClicked);
        if (isClicked) {
            setTimeout(() => {
                setClicked(false);
            }, 500);
        }
    }, [isClicked, isHovered]);
    return (
        <button
            className={`${style.Button}${isClicked ? ' ' + style.clicked : isHovered ? ' ' + style.hovered : ''}`}
            style={ {color:props.color, backgroundColor:props.bgColor} }
            onClick={(evt)=>{
                //console.log(evt);
                setClicked(true);
                props.onButtonClicked('Hello');
                //console.log("isClicked", isClicked);
            }}
            onMouseOver={(evt)=>{
                //console.log(evt);
                setHovered(true);
                //console.log("isHovered", isHovered);
            }}
            onMouseLeave={(evt)=>{
                //console.log(evt);
                setHovered(false);
                //console.log("isHovered", isHovered);
            }}
        >
            {props.children}
            <br/>
            {isClicked.toString()}
        </button>
    );

};
Button.prototypes={
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func.isRequired,
}
Button.defaultProps={
    bgColor: "red",
}

export default Button;