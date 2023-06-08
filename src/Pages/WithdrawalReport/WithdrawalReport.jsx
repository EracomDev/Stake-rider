import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./WithdrawalReport.css";
import { ApiPaths } from '../../API';
import { useState } from 'react';
import axios from 'axios';
import ContractDetails from '../../Contracts/ContractDetails';
import { ethers } from 'ethers';
import Loader from '../../Component/Loader/Loader';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from './../../Images/a3.png'
import Img2 from './../../Images/a1.png'
const WithdrawalReport = () => {
    const { BigInt } = window;
    const token = localStorage.getItem('authToken')
    const [depositAmount, setDepositAmount] = useState();
    const [depositError, setDepositError] = useState('');
    const [loading, setLoading] = useState(false);
    const [withdrawError, setWithdrawError] = useState(false);
    const [withdrawAmount, setWithdrawAmount] = useState()
    const [msg, setMsg] = useState('')
    const [withdrawData, setWithdrawData] = useState([]);
    const Currency = localStorage.getItem('currency');
    const navigate = useNavigate();
    useEffect(() => {
        console.log('token', token)
        FetchData();
    }, [])

    function FetchData() {
        axios({
            method: "get",
            url: ApiPaths.WithdrawData,
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Token: token
            },
        })
            .then(function (response) {
                console.log('withdraw data', response)
                if (response.data.tokenStatus == false) {
                    setLoading(false);
                    navigate('/')
                } else {
                    setWithdrawData(response.data.main_wallet);
                    setLoading(false);
                }

            })
            .catch(function (response) {
                console.log('deposit', response);
                setLoading(false)
            });
    }

    async function CheckBeforeDeposit() {
        setLoading(true);
        setDepositError('');
        try {
            axios({
                method: "post",
                url: ApiPaths.BuyPackage,
                data: {
                    "amount": depositAmount
                },
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token
                },
            })
                .then(function (response) {
                    console.log('response deposit', response)
                    if (response?.data?.status) {
                        // register(response.data.result)
                        increaseAllowance(response.data)
                    } else {
                        setMsg(response.data.result.message)
                        setLoading(false)
                    }

                })
                .catch(function (response) {
                    console.log('deposit', response);
                    setLoading(false)
                });
        } catch (e) {
            console.log(e)
            setLoading(false)
        }

    }
    async function increaseAllowance(regData) {
        if (depositAmount >= 10) {
            let amount = BigInt(depositAmount * 1e18);
            setLoading(true);
            const { ethereum } = window;
            const chekBal = true;
            if (chekBal == true) {
                if (ethereum) {
                    try {
                        const provider = new ethers.providers.Web3Provider(ethereum);
                        const signer = provider.getSigner();
                        const busdInstance = new ethers.Contract(ContractDetails.BUSD, ContractDetails.BUSD_ABI, signer);
                        console.log("Instance : " + busdInstance);

                        let inc = await busdInstance.increaseAllowance(ContractDetails.contract, amount, { value: ethers.utils.parseEther('0') });
                        await inc.wait();
                        // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                        console.log("Tr Hash 1: " + inc.hash);
                        register(regData);
                    }
                    catch (error) {
                        setLoading(false);
                        console.log(error)
                        setMsg('Something Went Wrong');
                    }
                }
                else {
                    setMsg('Wallet Not Exist');
                    setLoading(false);
                }
            } else {
                setMsg('Insufficient Funds');
                setLoading(false);
            }
        } else {
            setMsg('Amount should be greater then or equal to 2000')
        }
    }

    async function register(apidata) {
        try {
            let add = JSON.parse(apidata?.address);
            let amtval = JSON.parse(apidata?.incomes);
            // var amt = amtval[0] * 1e18;
            let amtArray = [];
            for (let i = 0; i < amtval.length; i++) {
                let kk = BigInt(amtval[i] * 1e18);
                amtArray.push(kk);
            }
            console.log('111', ContractDetails.BUSD)
            console.log('222', add)
            console.log('333', amtArray)
            setLoading(true);
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                console.log('signer', signer)
                const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer);
                console.log("Instance 1111: " + contractinstance);
                let inc = await contractinstance.shareContribution(add, amtArray, ContractDetails.BUSD, { value: ethers.utils.parseEther('0') });
                await inc.wait();
                console.log("Tr Hash 2: " + inc.hash);
                // alert('success');
                try {
                    setLoading(true)
                    axios({
                        method: "post",
                        url: ApiPaths.ConfirmOrder,
                        data: {
                            "order_id": apidata.order_id,
                            "tx_hash": inc.hash
                        },
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Accept: "application/json",
                            Token: token
                        },
                    })
                        .then(function (response) {
                            console.log('verify', response);
                            console.log('verify 2', response.data.status);
                            if (response.data.status) {
                                alert('Transaction Success');
                                setMsg('')
                                setLoading(false)
                            } else {
                                alert('Transaction Failed');
                                setLoading(false)
                            }
                        })
                        .catch(function (response) {
                            console.log('verify', response);
                            setLoading(false);
                            setLoading(false)
                        });
                } catch (e) {
                    console.log(e)
                    setLoading(false)
                }
                setLoading(false);
            }
        } catch (error) {
            setMsg(<span className='text-danger'>Something went wrong</span>)
            console.log(error);
            setLoading(false);
        }
    }
    async function WithdrawFun() {
        try {
            axios({
                method: "post",
                url: ApiPaths.Withdraw,
                data: {
                    "amount": withdrawAmount
                },
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token
                },
            })
                .then(function (response) {
                    console.log('withdrawAmount', response);
                    console.log('withdrawAmount 2', response);
                    if (response.data.result.status) {
                        alert('Transaction Success');
                    } else {
                        setWithdrawError(response.data.result.message);
                    }
                    setLoading(false);
                })
                .catch(function (response) {
                    console.log('verify', response);
                    setLoading(false);
                });
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <React.Fragment>
            {
                loading === true ? <Loader /> : ''
            }
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / Withdrawal / <span>Withdrawal Report</span></p>
                </div>
                <Row>
                    <Col lg="6">
                        <div className="withdrawal_depositDiv">
                            <div className='withdrawAmount'>
                                <h2>Withdraw Amount</h2>
                                <h2>{Currency}{withdrawData}</h2>
                            </div>
                            <img className='depositWithdrawImg' src={Img1} alt="logo.png" />
                            <p style={{ fontSize: '12px', color: "red", margin: "0" }}>{withdrawError}</p>
                            <input type="number" placeholder='Enter Amount' value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} />
                            <button onClick={WithdrawFun}>Withdraw</button>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="withdrawal_depositDiv">
                            <h2>Deposit Amount</h2>
                            <p style={{ fontSize: '12px', color: "red", margin: "0" }}>{msg}</p>
                            <img className='depositWithdrawImg' src={Img2} alt="logo.png" />
                            <input type="number" placeholder='Enter Amount' value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
                            <button onClick={CheckBeforeDeposit}>Deposit</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}

export default WithdrawalReport