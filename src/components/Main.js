import React from 'react';
import "./Main.css";
import {main_pic1} from "../images/mainImage"
import {main_pic2} from "../images/mainImage"
import {main_pic3} from "../images/mainImage"
import {main_pic4} from "../images/mainImage"
import ImageRender from "../images/Image";
import BtnSlider from './Slider/BtnSlider';
import {useState} from 'react';



function Main(props) {

    //const [test, setTest] = useState();
//어른이 되면 무엇이 하고싶었을까? ~ 

const movies = [
    {title: '첫번째 사진', src : main_pic1},
    {title: '두번째 사진', src : main_pic2},
     {title: '셋번째 사진', src : main_pic3},
      {title: '넷번째 사진', src : main_pic4}
  ];

const [slideIndex ,setSlideIndex] = useState(1);

const prevSlide = () => {


}

const nextSlide = () => {

}


    return (
        <>
            <div className ="kurlyMain">
                <div className = "main_type1" title ="main_pic">
                    {movies.map(({title, src}) => (
                        <div className = {slideIndex === src + 1}>
                            <ImageRender title= {title} src ={src} key = {title}></ImageRender>
                        </div>
                    ))}
                
                </div>
                <div className ="arrow-dir">
                    <BtnSlider moveSlide  = {prevSlide} direction = {"prev"}/>
                    <BtnSlider moveSlide = {nextSlide} direction = {"next"}/>
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
