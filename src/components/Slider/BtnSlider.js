import React from 'react'
//import './Slider.css';
import leftArrow from '../../images/left.png';
import rightArrow from '../../images/right.png';
export default function BtnSlider( {direction , moviSlide}) {
    return ( 
        <button
        onClick = {moviSlide}
        className = {direction === "next" ? 'btn-slide next' :
        "btn-silde prev"}
        >
            <img src = {direction === "next" ? rightArrow : leftArrow} width = "30px"/>
        </button>
    );
}
