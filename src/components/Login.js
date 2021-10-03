import React from 'react'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


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
                    <button className = "btn_type">
                            <span>로그인 </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login

