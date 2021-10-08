import React from 'react';
import "./Main.css";
import {main_pic1} from "../images/mainImage"
import {main_pic2} from "../images/mainImage"
import {main_pic3} from "../images/mainImage"
import {main_pic4} from "../images/mainImage"
import ImageRender from "../images/Image";
import BtnSlider from './Slider/BtnSlider';
import Items from '../elements/Items';
import ThreeItems from '../elements/ThreeItems';
import MDItems from '../elements/MDItems';
import dummy from "../dummy/category";
import {useState} from 'react';



function Main() {

    //const [test, setTest] = useState();
//어른이 되면 무엇이 하고싶었을까? ~ 

const movies = [
    {title: '첫번째 사진', src : main_pic1},
    // {title: '두번째 사진', src : main_pic2},
    // {title: '셋번째 사진', src : main_pic3},
    // {title: '넷번째 사진', src : main_pic4},
  ];

  const renderMovies = movies.map(({title, src}) => {
      return(
        <div className = "box">
            <ImageRender title= {title} src ={src} key = {title}></ImageRender>
        </div>

      )
  })

  const [item, setItem] = useState([]);

 

  const renderDatas = dummy.map(category => {
    return(
      <li>{category.name}</li>
    );

  })




const [slideIndex ,setSlideIndex] = useState(1);

const prevSlide = () => {
    if(slideIndex !== 1) {
        setSlideIndex(movies -1)
    }
    else if (slideIndex === 1) {
        setSlideIndex(movies.length)
    }

}

const nextSlide = () => {
    if(slideIndex !== movies.length) {
        setSlideIndex(slideIndex +1)
    }
    else if (slideIndex === movies.length) {
        setSlideIndex(1)
    }
}



    return (
        <>
            <div className ="kurlyMain">
                <div className = "main_type1" title ="main_pic">
                    {renderMovies}
                </div>
                <div className ="arrow-dir">
                    <BtnSlider className="prev" moveSlide = {prevSlide} direction = {"prev"}/>
                    <BtnSlider className="next" moveSlide = {nextSlide} direction = {"next"}/>
                </div>
                    
            </div>
                <div className = "main_type2">
                    <div className="product">
                        <h3 class = "name">이 상품 어때요?</h3>
                        <div>
                            <ul data-title = "이 상품은 어때요~?" className ="list">
                                <li data-index = "1">
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1548297396276l0.jpg"
                                        name = "[우리밀 ]부침가루 & 튀김가루"  price ="3,000원" />
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1591331546650l0.jpg"
                                        name = "[브라미] 리코타 치즈" slae ="20%" price ="8,240원" marketPrice ="6,592원"/>
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1479894808415l0.jpg"
                                        name = "[자연에찬] 보쌈" slae ="5%" price ="10,450원" marketPrice ="11,000원"/>
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1494205841687l0.jpg"
                                        name = "[설성목장] 한우 곰탕" slae ="20%" price ="9,600원" marketPrice ="12,000원"/>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="product3">
                        <h3 class = "name3">특가 혜택</h3>
                        <div>
                            <ul data-title = "특가 혜택" className ="list3">
                                <li data-index = "3">
                                        <ThreeItems imgUrl = "https://img-cf.kurly.com/shop/data/main/3/pc_img_1631868884.jpg"
                                        name = "삼성전자 최대 15% 할인"  marketPrice= "추석 끝 나에게 주는 선물"/>
                                        <ThreeItems imgUrl = "https://img-cf.kurly.com/shop/data/main/3/pc_img_1631868888.jpg"
                                        name = "떡편 최대 30% 할인"   marketPrice= "쫀득쫀득 영양 간식"/>
                                        <ThreeItems imgUrl = "https://img-cf.kurly.com/shop/data/main/3/pc_img_1631870892.jpg"
                                        name = "쌜모네키친 최대 14%" marketPrice= "연어 전문 브랜드"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product">
                        <h3 class = "name">놓치면 후회할 가격</h3>
                        <div>
                            <ul data-title = "이 상품은 어때요~?" className ="list">
                                <li data-index = "1">
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1595490225464l0.jpg"
                                        name = "불비빔냉명 2인분"  slae ="50%" price ="5,400원" marketPrice ="10,00원" />
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1577085009134l0.jpg"
                                        name = "[김소영 아티장인의 안단테] 시에라 네바다 크림치즈 플레인" slae ="30%" price ="9,030원" marketPrice ="12,900원"/>
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1594624047649l0.jpg"
                                        name = "[에델코첸] 통 3종 이지프리즘 팬 3종" slae ="20%" price ="26,400원" marketPrice ="33,000원"/>
                                        <Items imgUrl = "https://img-cf.kurly.com/shop/data/goods/1560494342342l0.jpg"
                                        name = "[선물세트] 바로이즙 이로울 사과즙 2종" slae ="22%" price ="20,202원" marketPrice ="25,900원"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = "bnr_main">
                        <a className="link">
                        </a>
                </div>

                <div className = "main_type4">
                    <div className = "product4">
                        <h3> MD추천</h3>
                    </div>
                            <div>
                                <dummy className = "dumdata">{renderDatas}</dummy>
                            </div>
                </div> 
        </>
    )
}

export default Main;
