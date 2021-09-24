import React from 'react'
import './ThreeItems.css';

function ThreeItems(props) {
        return(
        <div className = "qw3">
            <li className="item3">
                <a href= "/" className="imgBox3">
                    <img src = {props.imgUrl}/>

                </a>
                
                <div className="infoBox3">
                    <a href="/">
                        <p>{props.name}</p>
                    </a>
                    <div className="salePrice3">
                        <div className="marketPrice3">
                        <p>{props.marketPrice}</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>

        
        )
    }

export default ThreeItems
