import React from 'react';
import "./Header.css";
import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';



function Header() {
    const [login, setlogin] = useState();
    const [userInfo ,setuserInfo] = useState();

    const history = useHistory();

    const goToLogin  = () => {
        history.push('/Login')
    }
    const goToJoin = () => {
        history.push('/Join')
    }

    useEffect(() => {
        console.log("로그인 페이지로 이동")
    }, [login])



    return (
        <>
        <div className="hkhk">
            <div className = "header">
                <div className = "header-firLine">
                    <img src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" alt="샛별, 택배 배송안내"
                    style = {{cursor: 'pointer'}} width ="121" height="22"/>
                    <div className="HeaderMenu">
                        {!login && (
                            <ul>
                                <li onClick = {goToJoin} className = "header-menu-join">회원가입</li>
                            <li onClick = {goToLogin} className="header-menu">로그인</li>
                                <li className="arrow">고객센터</li>
                            </ul>
                        )}
                        {login && (
                            <ul>
                                <li className = "header-menu">{userInfo}</li>
                                <li className = "header-menu" onClick = {() => {
                                }}>로그아웃</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="headerLogo">
                <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" width="103px" alt="마켓컬리 로고" style={{ cursor: 'pointer' }} onClick={()=>history.push('/')}/>
                </div>

                <div className="headerCategory">
                    <ul>
                        <li className="all-category">전체 카테고리</li>
                        <li onClick={()=>history.push('/new')} >신상품</li>
                        <li onClick={() => history.push('/')} >베스트</li>
                        <li onClick={()=>history.push('/cheap')} >알뜰쇼핑 </li>
                        <li onClick={()=> history.push('/event')}> 특가/혜택</li>
                    </ul>
                    <div className="search">
                        <input type ="text" placeholder = "검색하세요 "/>
                    </div>

                    <div className="adress-icon">
                        <div className="cart-icon" onClick ={() => {
                            if(!userInfo) {
                                alert("로그인 후 사용해주세요");
                                return false;
                            }
                            history.push('/cart');
                        }}>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Header;


