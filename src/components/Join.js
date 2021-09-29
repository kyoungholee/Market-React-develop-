import React, {useState} from 'react'
import './Join.css'

function Join() {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [name , setName]  = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    

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
                    <tr>
                        <td>아이디 
                            <span>*</span>
                            <form>
                                <input 
                                    placeholder = "아이디를 입력해주세요."
                                    value = {username}
                                    onChange = {(e) => setUsername(e.target.value)}
                                    />
                            </form>
                            <button>중복확인</button>
                        </td>

                        <td>비밀번호 
                            <span>*</span>
                            <form>
                                <input 
                                    placeholder = "비밀번호를 입력해주세요."
                                    value = {password1}
                                    onChange = {(e) => setPassword1(e.target.value)}
                                />
                            </form>
                        </td>

                        <td>비밀번호 확인
                        <span>*</span>
                        <form>
                            <input 
                                placeholder = "비밀번호를 한번 더  입력해주세요."
                                value = {password2}
                                onChange = {(e) => setPassword2(e.target.value)}
                            />
                        </form>
                        </td>

                        <td>이름 
                        <span>*</span>
                        <form>
                            <input 
                                placeholder = "이름을 입력해주세요."
                                value = {name}
                                onChange = {(e) => setName(e.target.value)}
                            />
                        </form>
                        </td>

                        <td>이메일 
                        <span>*</span>
                        <form>
                            <input 
                                placeholder = "이메일을 입력해주세요."
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                        </form>
                        <button>중복확인</button>
                        </td>

                        <td>휴대폰
                        <span>*</span>
                        <form>
                            <input 
                                placeholder = "숫자만 입력해주세요."
                                value = {number}
                                onChange = {(e) => setNumber(e.target.value)}
                            />
                        </form>
                    </td>
                    </tr>
                
                </table>
            </div>     
        </div>
    </>
    )
}

export default Join;
