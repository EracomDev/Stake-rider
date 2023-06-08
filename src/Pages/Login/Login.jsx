import React, { useState } from 'react'
import "./Login.css"
import { Row, Col } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import User3 from "./../../Images/user3.jpg"
import axios from 'axios';
import { ApiPaths } from '../../API';
const Login = () => {
    const [passwordVisiblity, setPasswordVisiblity] = useState("password");
    const [errorMsg, setErrorMsg] = useState("")
    const navigate = useNavigate();
    const [userId, setUserId] = useState()
    const [userPassword, setUserPassword] = useState('')
    const ChangeVisiblity = () => {
        if (passwordVisiblity === "password") {
            setPasswordVisiblity("text")
        } else {
            setPasswordVisiblity("password")
        }
    }
    const GetData = async () => {
        try {
            axios({
                method: "post",
                url: ApiPaths.LoginApi,
                data: {
                    "user_name": userId,
                    "password": userPassword
                },
                headers: { "Content-Type": "application/json" },
            })
                .then(function (response) {
                    console.log("Data", response);
                })
                .catch(function (response) {
                    console.log(response);
                });
            return;
        } catch (e) {
            console.log(e);
        }
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
                                value={userId}
                                type="text"
                                name="user_Id"
                                placeholder='Username'
                                style={{ marginBottom: "10px" }}
                                onChange={(e) => setUserId(e.target.value)} />
                            {/* <div className="passwordDiv">
                                <input
                                    type={passwordVisiblity}
                                    name="password"
                                    placeholder='Password'
                                    value={userPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />
                                <i onClick={ChangeVisiblity} > {passwordVisiblity === "password" ? <AiFillEye /> : <AiFillEyeInvisible />} </i>
                            </div> */}
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

export default Login