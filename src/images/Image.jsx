import React from 'react';


const Image = ({ title ,src}) => (
    <img src = {src} alt = {title} style = {{height : '370px'}}
    />
);

export default Image;

