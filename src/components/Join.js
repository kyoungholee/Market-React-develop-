import React, {useState, useEffect} from 'react'
import './Join.css'

function Join() {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [name , setName]  = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    


    useEffect(() => {
        console.log("조건에 맞는 아이디입니다.")
    } , [setUsername])



    return (
    <>    
        <div className = "glgl">
            <div className = "start_Join">
                <div className = "sign-up">
                <h2>회원가입</h2>
                </div>
                <br/>
                <div className = "text">
                    <span className = "ico">*</span>
                    필수입력사항
                </div>
                <table className = "list">
                    <tbody>
                        <tr>
                            <th>아이디 
                                <span className = "icon">*</span>
                            </th>
                            <td>
                                <form className = "Kan">
                                    <input 
                                        placeholder = "아이디를 입력해주세요."
                                        value = {username}
                                        onChange = {(e) => setUsername(e.target.value)}
                                        />
                                    <button className = "chk" onClick = {setUsername}>중복확인</button>
                                </form>
                            </td>
                        </tr>

                        <tr>
                        <th>비밀번호 
                            <span className = "icon">*</span>
                        </th>
                        <td>
                            <form className = "Kan">
                                <input 
                                    placeholder = "비밀번호를 입력해주세요."
                                    value = {password1}
                                    onChange = {(e) => setPassword1(e.target.value)}
                                    />
                            </form>
                        </td>
                        </tr>

                        <tr>
                        <th>비밀번호확인 
                            <span className = "icon">*</span>
                        </th>
                        <td>
                            <form className = "Kan">
                                <input 
                                    placeholder = "비밀번호를 한번 더 입력해주세요."
                                    value = {password2}
                                    onChange = {(e) => setPassword2(e.target.value)}
                                    />
                            </form>
                        </td>
                        </tr>

                        <tr>
                        <th>이름
                            <span className = "icon">*</span>
                        </th>
                        <td>
                            <form className = "Kan">
                                <input 
                                    placeholder = "이름을 입력해주세요."
                                    value = {name}
                                    onChange = {(e) => setName(e.target.value)}
                                    />
                            </form>
                        </td>
                        </tr>

                        <tr>
                            <th>이메일 
                                <span className = "icon">*</span>
                            </th>
                            <td>
                                <form className = "Kan">
                                    <input 
                                        placeholder = "이메일을 입력해주세요."
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                        />
                                    <button className = "chk" onClick = {setUsername}>중복확인</button>
                                </form>
                            </td>
                        </tr>

                        
                        <tr>
                            <th>휴대폰 
                                <span className = "icon">*</span>
                            </th>
                            <td>
                                <form className = "Kan">
                                    <input 
                                        placeholder = "핸드폰 번호를 입력해주세요."
                                        value = {number}
                                        onChange = {(e) => setNumber(e.target.value)}
                                        />
                                    <button className = "white">인증번호</button>
                                </form>
                            </td>
                        </tr>


                        <tr>
                        <th>주소 
                            <span className = "icon">*</span>
                        </th>
                        <td>
                                <button className = "adr_No"
                                    value = {address}
                                    onChange = {(e) => setAddress(e.target.value)}
                                >주소검색</button>
                        </td>
                        </tr>

                        <tr class="select_sex">
                        <th>성별</th>
                        <td>
                            <label>
                                <input type="radio" name="sex" value="m" />
                                <span class="ico"></span>
                                남자
                            </label>
                            <label>
                                <input type="radio" name="sex" value="ㅈ"/>
                                <span class="ico"></span>
                                여자
                            </label>
                            <label class="checked">
                                <input type="radio" name="sex" value="n"
                                checked="checked"/>
                                <span class="ico"></span>
                                선택안함
                            </label>
                        </td>
                    </tr>


                    </tbody>
                    <button className = "Sign_up">가입하기</button>
                </table>
            </div>     
        </div>
    </>
    )
}

export default Join;
