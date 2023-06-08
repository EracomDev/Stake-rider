import React, { useEffect, useState } from 'react'
import "./RoiIncome.css"
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import RewardImg1 from "./../../Images/reward1.png"
import { ApiPaths } from '../../API';
import axios from 'axios';
import ConvertTime from '../../Common/ConvertTime';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';
const DirectIncome = () => {
    const token = localStorage.getItem('authToken')
    const [toggleFilter, setToggleFilter] = useState("none");
    const [roiData, setRoiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const myfun = () => {
        if (toggleFilter === "none") {
            setToggleFilter("flex");
        } else {
            setToggleFilter("none");
        }
    }
    async function GetData() {
        setLoading(true)
        try {
            axios({
                method: "get",
                url: ApiPaths.RoiIncome,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token
                },
            })
                .then(function (response) {
                    console.log("RoiData", response);
                    if (response.data.tokenStatus == false) {
                        setLoading(false);
                        navigate('/')
                    } else {
                        setRoiData(response.data.result);
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
                    <p className="m-0">Home / Payout Report / <span>ROI Income</span></p>
                </div>
                <Row id="filterRow">
                    <span id="filterLogo" onClick={() => myfun()}><i><BiFilter /></i>Filter</span>
                    <Row id={toggleFilter} className="p-0 m-0" style={{ display: toggleFilter }}>
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
                                    <option value="">--All--</option>
                                    <option value="">20</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                    <option value="">200</option>
                                </select>
                            </div>
                        </Col>
                        <div>
                            <button className="save filter">Filter <i><BiFilter /></i></button>
                            <button className="cancel reset">Reset <i><GrPowerReset /></i></button>
                        </div>
                    </Row>
                </Row>
                <div id="directIncomeDiv">
                    {/* <Row id="directIncomeRow">
                        <div id="rewardIncomeImg"><img src={RewardImg1} alt="" /></div>
                        <Col xs="6" md="6" lg="6" className="p-0">
                            <h4>Total Income</h4>
                            <p><span>$ </span>2400</p>
                        </Col>
                        <Col xs="6" md="6" lg="6" className="p-0">
                            <h4>Payable Income</h4>
                            <p><span>$ </span>2400</p>
                        </Col>
                    </Row> */}
                    <Row id="directTableRow" className="">
                        <Col md="12" className="p-0">
                            <div style={{ width: "100%" }}>
                                <table>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                    </tr>
                                    {
                                        roiData?.map((x, i) => {
                                            return (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{x.amount}</td>
                                                    <td>{ConvertTime(x.time)}</td>
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

export default DirectIncome