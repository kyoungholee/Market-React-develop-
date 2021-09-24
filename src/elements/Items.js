import React from 'react'
import './Items.css';

function Items(props) {
        return(
        <div className = "qw">
            <li className="item">
                <a href= "/" className="imgBox">
                    <img src = {props.imgUrl}/>

                </a>
                
                <div className="infoBox">
                    <a href="javascript:void(0)" className="itemName">
                        <p>{props.name}</p>
                    </a>
                    <div className="salePrice">
                        <div className="sale">
                        <p>{props.slae}</p>
                        </div>
                        <div className="price">
                        <p>{props.price}</p>
                        </div>
                    
                        <div className="marketPrice">
                        <p>{props.marketPrice}</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>

        
        )
    }

export default Items
