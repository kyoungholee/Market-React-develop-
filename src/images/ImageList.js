import React from 'react';
import ImageRender from './Image';
import { hotdogImage } from './imageFile';

const ImageList = () => {
    const images = [
        {title : "hotdog Image", src : hotdogImage}
    ];
    return(
        <> 
        {images.map(({src, title}) => (
            <ImageRender src = {src} title = {title} key = {title} />

        ))}

        </>
    );
};

export default ImageList;
