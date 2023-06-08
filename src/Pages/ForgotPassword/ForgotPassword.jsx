import React, { useState } from 'react'
import "./ForgotPassword.css"
import { Row, Col } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import User3 from "./../../Images/user3.jpg"
const ForgotPassword = () => {
    const [passwordVisiblity, setPasswordVisiblity] = useState("password");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        user_Id: '',
        password: ''
    });
    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        });
    };
    const ChangeVisiblity = () => {
        if (passwordVisiblity === "password") {
            setPasswordVisiblity("text")
        } else {
            setPasswordVisiblity("password")
        }
    }
    const GetData = async () => {
        console.log(loginData)
        try {
            const rawResponse = await fetch('http://192.168.1.16:3000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            const content = await rawResponse.json();
            console.log(content);
            console.log(content.message);
            if (content.status) {
                localStorage.setItem('AuthToken', content.accessToken);
                navigate('/sidebar', { replace: true });
            } else {
                setErrorMsg(content.message);
            }
        }
        catch (e) { console.log("error = ", e) }
    }
    const LoginSubmit = () => {
        GetData();
    }
    return (
        <React.Fragment>
            <Row>
                <Col md="6" className="loginLeft">
                    <div className="loginContent">
                        <h5>Nice to see you again</h5>
                        <h1>Welcome Back</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum officiis quo quasi repudiandae aut fugit necessitatibus, est saepe quas.</p>
                    </div>
                </Col>
                <Col md="6" className="loginCol">
                    <div className="loginFormDiv">
                        <img src={User3} alt="logo.png"></img>
                        <h1>Login Account</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem accusamus ea magni iste reprehenderit nobis!</p>
                        <div className="loginForm">
                            <div className="formError">{errorMsg}</div>
                            <input
                                value={loginData.user_Id}
                                type="text"
                                name="user_Id"
                                placeholder='Username'
                                style={{ marginBottom: "10px" }}
                                onChange={handleChange} />
                            <div className="passwordDiv">
                                <input
                                    type={passwordVisiblity}
                                    name="password"
                                    placeholder='Password'
                                    value={loginData.password}
                                    onChange={handleChange}
                                />
                                <i onClick={ChangeVisiblity} > {passwordVisiblity === "password" ? <AiFillEye /> : <AiFillEyeInvisible />} </i>
                            </div>
                            <Link id="forgotPassword">Forgot Your Password?</Link>
                            <button className="btnLogin" onClick={LoginSubmit}>Login</button>
                        </div>
                        <div className="loginLinkDiv">
                            <p>Don't have account?</p>
                            <Link to='/' className="loginLink">Register</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ForgotPassword