import React from 'react'
import "./Footer.css"

function Footer() {

    
    return (
    <>
        <div className="footer">
            <div className = "grid">    
                <div className="foot_cc">
                <h2 className="tit_cc">고객행복센터</h2>
                <div className="cc_view cc_call">
                    <h3>
                        <span classNames="call">1644-1107</span>
                    </h3>
                    <dl className="list_li">
                        <dt>365고객센터</dt>
                        <dd>오전7시 - 오후 7시</dd>
                </dl>
                </div>
                <div className="cc_view cc_kakao">
                    <h3>
                        <a className="call" href="#none">카카오톡 문의</a>
                    </h3>
                    <dl className="list_li">
                        <dt>365고객센터</dt>
                        <dd>오전7시 - 오후 7시</dd>
                    </dl>
                </div>
                <div className="cc_view cc_qna">
                    <h3>
                        <a href="#none" onClick='' className = "call">1:1문의</a>
                    </h3>
                    <dl className="list_li">
                        <dt>24시간 접수 가능</dt>
                        <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
                    </dl>
                </div>
                <div className="cc_view cc_bulkorder">
                    <h3>
                        <a href="#none" className = "call">대량주문 문의</a>
                    </h3>
                    <p className="txt">비회원의 경우 메일로 문의 바랍니다.</p>
                </div>
                </div>

                <div className="company">
                    <ul className="list">
                        <li>
                            <a className="link" href="/">컬리소개</a>
                        </li>
                        <li>
                            <a className="link" href="/">컬리소개영상</a>
                        </li>
                        <li>
                            <a className="link" href="/">인재채용</a>
                        </li>
                        <li>
                            <a className="link" href="/">이용약관</a>
                        </li>
                        <li>
                            <a className="link" href="/">개인정보처리방침</a>
                        </li>
                        <li>
                            <a className="link" href="/">이용안내</a>
                        </li>
                    </ul>
                    <p className = "footer_bar">
                        "법인명 (상호) : 주식회사 컬리"
                        <span className="bar">I</span>
                        "사업자등록번호 : 261-81-23567"
                        <a href="/" className="link">사업자정보 확인</a>
                        <br/>
                        "통신판매업 : 제 2018-서울강남-01646 호"
                        <span classNames="bar">I</span>
                        " 개인정보보호책임자 : 이원준" 
                        <br/>
                        "주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)"
                        <span className="bar">I</span>
                        "대표이사 : 김슬아"
                        <br/>
                        "입점문의 :"
                        <a href="/" className="link">입점문의하기</a>
                        <span className="bar">I</span>
                        "제휴문의 : "
                        <a href="/" className="link">kurlygift@kurlycorp.com</a>
                        <br/>
                        "채용문의 :"
                        <a href="/" className="link">business@kurlycorp.com</a>
                        <br/>
                        "팩스: 070 - 7500 -6098 "
                        <span className="bar">I</span>
                        "이메일 : "
                        <a href="/" className="link">help@kurlycorp.com</a>
                        <br/>
                        "대량주문 문의 :"
                        <a href="/" className="link">kurlycorp@kurlycorp.com</a>
                        <em className="copy"> KURLY CORP .ALL RIGHTS RESERVED</em>
                    </p>
                    <div className="list_sns">
                        <ul>
                            <li>
                                <a href="/">
                                    <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt = "인스타"/>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt = "페북"/>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt = "블로그"/>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt = "유튜브"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;
