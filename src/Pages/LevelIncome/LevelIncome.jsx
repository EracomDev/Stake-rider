import React, { useEffect, useState } from 'react'
import "./LevelIncome.css"
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import RewardImg1 from "./../../Images/reward1.png";
import { ApiPaths } from '../../API';
import axios from 'axios';
import Change from '../../Common/StringToSub';
import ConvertTime from '../../Common/ConvertTime';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';
const LevelIncome = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [toggleFilter, setToggleFilter] = useState('none');
    const [levelIncomeData, setLevelIncomeData] = useState([]);
    const [walletData, setWalletData] = useState(0);
    const token = localStorage.getItem('authToken');
    const myfun = () => {
        if (toggleFilter === 'none') {
            setToggleFilter('flex');
        } else {
            setToggleFilter('none');
        }
    }
    async function GetData() {
        setLoading(true)
        try {
            axios({
                method: "get",
                url: ApiPaths.LevelIncome,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token
                },
            })
                .then(function (response) {
                    console.log('level team', response)
                    if (response.data.tokenStatus == false) {
                        setLoading(false);
                        navigate('/');
                    } else {
                        setLevelIncomeData(response.data.result);
                        setWalletData(response.data.total_income);
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

    useEffect(() => {
        GetData();
    }, [])


    return (
        <React.Fragment>
            {
                loading === true ? <Loader /> : ''
            }
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / Payout Report / <span>Level Income</span></p>
                </div>
                <Row id="filterRow">
                    <span id="filterLogo" onClick={() => myfun()}><i><BiFilter /></i>Filter</span>
                    <Row className="p-0 m-0" style={{ display: toggleFilter }}>
                        <Col lg="2">
                            <div>
                                <input type="text" placeholder='Search By Name' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="text" placeholder='Search User By Id' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="date" placeholder='from date' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="date" placeholder='to date' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <select name="" id="">
                                    <option value="">--Level--</option>
                                    <option value="">Level 1</option>
                                    <option value="">Level 2</option>
                                    <option value="">Level 3</option>
                                    <option value="">Level 4</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <select name="" id="">
                                    <option value="">--All--</option>
                                    <option value="">20</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                    <option value="">200</option>
                                </select>
                            </div>
                        </Col>
                        <div>
                            <button className="save filter" onClick={() => setToggleFilter("FilterMainDiv")}>Filter <i><BiFilter /></i></button>
                            <button className="cancel reset">Reset <i><GrPowerReset /></i></button>
                        </div>
                    </Row>
                </Row>
                <div id="directIncomeDiv">
                    <div id="rewardIncomeImg"><img src={RewardImg1} alt="" /></div>
                    <Row id="directIncomeRow">
                        <h4>Total Income</h4>
                        <p><span>$ </span>{walletData}</p>
                    </Row>
                    <Row id="directTableRow" className="">
                        <Col md="12" className="p-0">
                            <div style={{ width: "100%" }}>
                                <table>
                                    <tr>
                                        <th>S No.</th>
                                        <th>From</th>
                                        <th>Level</th>
                                        <th>Amount ($)</th>
                                        <th>Remark</th>
                                        <th>time</th>
                                    </tr>
                                    {
                                        levelIncomeData.map((x, i) => {
                                            return (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{Change(x?.to_from)}</td>
                                                    <td>{x?.level}</td>
                                                    <td>{x?.amount}</td>
                                                    <td>{x?.remark}</td>
                                                    <td>{ConvertTime(x?.time)}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default LevelIncome