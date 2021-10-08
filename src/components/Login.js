import React from 'react'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import styled from "styled-components";

function Login() {

    const [id , setId] = useState('')
    const [pwd, setPwd] = useState('')

    const newId = () => {
        setId(id.toString())
    }

    useEffect(() => {
        console.log("로그인이 되었습니다.")

    },[id] );

    const login = () => {
        if (id === "" || pwd === "") {
            window.alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }
    }
    
    const root = () => {
        alert ("감사합니다. ")
    }

    const click = () => {
        alert("조건을 말하세요")
    }

    return (
        <div className = "content">
            <div className = "section_login">
                <h3>로그인</h3>
                <div className = "write_form">
                    <form>
                        <input
                            onChange = {(e) => {
                                setId(e.target.value)
                            }}
                            width = "380px"
                            height = "45px"
                            placeholder = "아이디 입력"
                        />

                        <input
                            onChange = {(e) => {
                                setPwd(e.target.value)
                            }}
                            width = "380px"
                            height = "45px"
                            placeholder = "비밀번호  입력"
                        />
                    </form>
                    <div className = "checkbox_save">
                            <label>
                                보안접속
                            </label>
                    
                        <div className = "login_search">
                                <Link to = "/">아이디 찾기</Link>
                                <span className = "bar"></span>
                                <Link to = "/">비밀번호 찾기</Link>
                        </div>
                    </div>


                
                    <Button bgcolor ="blue" className = "btn_type" onClick = {root}>
                            <span>로그인 </span>
                    </Button>
                    <br/>

                    <Button bgcolor = "red" className = "btn_type2" onClick = {click}>
                            <span>회원가입 </span>
                    </Button>

                </div>
            </div>
        </div>
    )
}
//조건은 다 같은데 배경색만 다르게 한다 !! 
// 회원가입은 props로 받고 배경색만 바꾸게 된다.!
// 이렇듯  button 이라는 같은 태그안에 배경색만 다를 때
// style-conponets를 이용해서 태그안에 bgcolor = "blue"색을 받아서 
// props로 값을 받을 수 있다. 
//background-color : ${prop s=> props.bgcolor}


const Button = styled.button`
    cursor: pointer;
    border: 1px solid black;
    width: 100%;
    background-color: ${props => props.bgcolor};
    border-radius: 3px;
    font-weight: 500;
    font-size : 30px;
    color : black;
    line-height: 51px;
    margin-top: 30px;
`

export default Login;

