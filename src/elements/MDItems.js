import React from 'react';
import './MDItems.css';

function MDItems(props) {
    return(
    <>    
            <ul className ="md-items">
                <li>
                    <a href = "/">{props.gift}</a>
                </li>
            </ul>
 
    </>    
    )

}

export default MDItems;