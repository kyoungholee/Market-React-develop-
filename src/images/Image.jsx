import React from 'react';


const Image = ({ title ,src}) => (
    <img src = {src} className = "img" alt = {title} style = {{height : '370px'}} //{objectFit : 'cover'}}
     //src = {${title + 1}.jpg}
    />
);

export default Image;

