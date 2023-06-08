import React from 'react'
import "./Register.css"
import { Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ConnectButton from '../../Component/ConnectButton';
import { useState } from 'react';
import { ApiPaths } from '../../API';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../Component/Loader/Loader';
var CryptoJS = require("crypto-js");
const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [sponsorId, setSponsorId] = useState('');
    var acc = useSelector((state) => state.account.value);
    const userAddress = localStorage.getItem('address');
    const [error, setError] = useState('');
    const { ethereum } = window
    useEffect(() => {
        console.log('address:  ' + userAddress);
        const after = window.location.search.slice(window.location.search.indexOf('=') + 1);
        console.log("url here", after);
        setSponsorId(after)
    }, [])

    var CryptoJSAesJson = {
        stringify: function (cipherParams) {
            var j = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
            if (cipherParams.iv) j.iv = cipherParams.iv.toString();
            if (cipherParams.salt) j.s = cipherParams.salt.toString();
            return JSON.stringify(j);
        },
        parse: function (jsonStr) {
            var j = JSON.parse(jsonStr);
            var cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(j.ct) });
            if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
            if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
            return cipherParams;
        },
    }

    const Register = async () => {
        setLoading(true);
        try {
            let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            axios({
                method: "post",
                url: ApiPaths.RegisterApi,
                data: {
                    user_name: accounts[0],
                    sponsor: sponsorId
                },
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    console.log("user", response.data.status);
                    console.log("user exist", response);
                    if (response.data.status === true) {
                        localStorage.setItem('authToken', response.data.accessToken);
                        localStorage.setItem('userAddress', accounts[0]);
                        setLoading(false);
                        navigate('/dashboard')
                    } else {

                        setError(response.data.message);
                        setLoading(false);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false);
                });
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };
    const GetData = async () => {
        setLoading(true);
        try {
            let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            let myKey = await accounts[0].slice(0, 10);
            let encrypted = CryptoJS.AES.encrypt(JSON.stringify(myKey), "eeerrraaa", { format: CryptoJSAesJson }).toString();
            console.log('foedeodeipdipjpioj', encrypted);
            axios({
                method: "post",
                url: ApiPaths.LoginApi,
                data: {
                    user_name: accounts[0],
                    key: encrypted
                },
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    console.log("Data", response);
                    if (response.data.status) {
                        localStorage.setItem('authToken', response?.data?.accessToken)
                        localStorage.setItem('userAddress', accounts[0]);
                        setLoading(false);
                        navigate('/dashboard')
                    } else {
                        setError('User Not Exist')
                        setLoading(false);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false);
                });
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    const LoginSubmit = () => {
        GetData();
    }
    return (
        <React.Fragment>
            {
                loading === true ? <Loader /> : null
            }
            <Row className='m-0 p-0'>
                <Col md="6" className="loginLeft">
                    <div className="loginContent">
                        <h5>Nice to see you</h5>
                        <h1>Welcome</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum officiis quo quasi repudiandae aut fugit necessitatibus, est saepe quas.</p>
                    </div>
                </Col>
                <Col md="6" className="loginCol">
                    <div className="loginFormDiv">
                        <ConnectButton />
                        <p className='errorMsg'>{error.toString().replace(/<[^>]+>/g, '')}</p>
                        <h1>Create Account</h1> <div className="registerForm">
                            <div >
                                <label htmlFor="sponsor_Id">Sponsor id:</label>
                                <input
                                    type="text"
                                    name="sponsor_Id"
                                    placeholder='Sponsor Id'
                                    value={sponsorId}
                                    onChange={(e) => setSponsorId(e.target.value)}
                                />
                            </div>

                            <div>
                                <button className='btnLogin' onClick={Register}>Sign Up</button>
                            </div>
                        </div>
                        <p className='mt-2'>Already have account?</p>
                        <button className="btnLogin mt-0" onClick={LoginSubmit}>Login</button>
                    </div>
                </Col>
            </Row>
        </React.Fragment >
    )
}

export default Register