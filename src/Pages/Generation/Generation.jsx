import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { ImTree } from "react-icons/im";
import "./Generation.css"
import { ApiPaths } from '../../API';
import axios from 'axios';
import { useEffect } from 'react';
import Change from '../../Common/StringToSub';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';
const Generation = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const [loading, setLoading] = useState(false);
    const [toggleFilter, setToggleFilter] = useState("none");
    const [generationData, setGenerationData] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchFromDate, setSearchFromDate] = useState('');
    const [searchToDate, setSearchToDate] = useState('');
    const [searchStatus, setSearchStatus] = useState('');
    const [searchLevel, setSearchLevel] = useState('');
    const myfun = () => {
        if (toggleFilter === "none") {
            setToggleFilter("flex");
        } else {
            setToggleFilter("none");
        }
    }

    async function GetData() {
        setLoading(true);
        try {
            axios({
                method: "get",
                url: ApiPaths.Generation,
                data: {
                    "level": 20,
                },
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token
                },
            })
                .then(function (response) {
                    console.log("Generation", response);
                    if (response.data.tokenStatus == false) {
                        setLoading(false)
                        navigate('/')
                    } else {
                        setGenerationData(response.data.result)
                        setLoading(false)
                    }
                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false)
                });
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }
    useEffect(() => {
        GetData()
    }, [])

    async function FilterFun() {
        setLoading(true);
        try {
            let searchUrk = `${ApiPaths.Generation}?username=${searchId}&start_date=${searchFromDate}&end_date=${searchToDate}&active_status=${searchStatus}&selected_level=${searchLevel}`
            console.log('searchUrk', searchUrk)
            axios({
                method: "get",
                url: searchUrk,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token
                },
            })
                .then(function (response) {
                    console.log("Generation", response);
                    if (response.data.tokenStatus == false) {
                        setLoading(false)
                        navigate('/')
                    } else {
                        setGenerationData(response.data.result)
                        setLoading(false)
                    }
                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false)
                });
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }

    function Reset() {
        setSearchId('');
        setSearchFromDate('');
        setSearchToDate('');
        setSearchStatus('');
        GetData();
    }
    return (
        <React.Fragment>
            {
                loading === true ? <Loader /> : ''
            }
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / My Genelogy / <span>Generation</span></p>
                </div>
                <Row id="filterRow">
                    <span id="filterLogo" onClick={() => myfun()}><i><BiFilter /></i>Filter</span>
                    <Row className="p-0 m-0" style={{ display: toggleFilter }}>
                        <Col lg="2" md="4">
                            <div>
                                <input
                                    type="text"
                                    placeholder='Search User By Id'
                                    value={searchId}
                                    onChange={(e) => setSearchId(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input
                                    type="date"
                                    placeholder='from date'
                                    value={searchFromDate}
                                    onChange={(e) => setSearchFromDate(e.target.value)}
                                />

                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input
                                    type="date"
                                    placeholder='to date'
                                    value={searchToDate}
                                    onChange={(e) => setSearchToDate(e.target.value)} />
                            </div>
                        </Col>

                        <Col lg="2" md="4">
                            <div>
                                <select value={searchStatus}
                                    onChange={(e) => setSearchStatus(e.target.value)} >
                                    <option value="2">--Status--</option>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <select value={searchLevel}
                                    onChange={(e) => setSearchLevel(e.target.value)} >
                                    <option value="2">--Level--</option>
                                    <option value="1">Level 1</option>
                                    <option value="2">Level 2</option>
                                    <option value="3">Level 3</option>
                                    <option value="4">Level 4</option>
                                    <option value="5">Level 5</option>
                                    <option value="6">Level 6</option>
                                    <option value="7">Level 7</option>
                                    <option value="8">Level 8</option>
                                    <option value="9">Level 9</option>
                                    <option value="10">Level 10</option>
                                </select>
                            </div>
                        </Col>
                        <div>
                            <button className="save filter" onClick={FilterFun}>Filter<i><BiFilter /></i></button>
                            <button className="cancel reset" onClick={Reset}>Reset <i><GrPowerReset /></i></button>
                        </div>
                    </Row>
                </Row>
                <Row id="directTableRow">
                    <Col md="12" className="p-0">
                        <div style={{ width: "100%" }}>
                            <table>
                                <tr>
                                    <th>S No.</th>
                                    <th>UserId</th>
                                    <th>Joining Date</th>
                                    <th>Status</th>
                                    <th>Package</th>
                                </tr>

                                {
                                    generationData?.map((x, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{x?.user_Id}</td>
                                                <td>{x?.joining_date}</td>
                                                {
                                                    x?.status == 0 ? <td style={{ color: "red" }}>Inactive</td> :
                                                        <td style={{ color: "green" }}>Active</td>
                                                }
                                                <td>{x.my_pkg}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Generation