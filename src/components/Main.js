import React from 'react';
import "./Main.css";



function Main(props) {

    //const [test, setTest] = useState();
//어른이 되면 무엇이 하고싶었을까? ~ 
    return (
        <>
            <div className ="kurlyMain">
                <div style = {{ color : props.color}}>{props.name}</div>
               


                <div className = "main_type1">
                    <a>
                        <img src= "https://img-cf.kurly.com/shop/data/main/1/pc_img_1631103162.jpg"
                        alt="메인배너"></img>
                    </a>
                </div>

                <div className = "main_type2">
                    <div className="product">
                        <h3 class = "name">이상품은 어때요?</h3>
                            <ul data-title = "이 상품은 어때요~?">
                                <li data-index = "1">
                                    <a>
                                        <img/>
                                    </a>
                                        <div className = "goods_info">
                                            <span className ="name1">
                                                <a className = "txt">[사바니] 트러플 미니 3종 세트 (미니 트러플 세트 2호)</a>
                                            </span>
                                            <span className = "price">
                                                <span className="dc">20%</span>
                                                "51,200원"
                                            </span>
                                            <span className="cost">64,000원</span>
                                        </div>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
