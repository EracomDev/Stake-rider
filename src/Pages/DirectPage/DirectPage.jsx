import React, { useState } from 'react'
import "./DirectPage.css"
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { ApiPaths } from '../../API';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';
const DirectPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const [filter, setFilter] = useState('none');
    const [directs, setDirects] = useState([]);
    const [loading, setloading] = useState(false);
    const [searchId, setSearchId] = useState('');
    const [searchFromDate, setSearchFromDate] = useState('');
    const [searchToDate, setSearchToDate] = useState('');
    const [searchStatus, setSearchStatus] = useState('');
    const toggleFilter = () => {
        if (filter === 'none') {
            setFilter('flex')
        } else {
            setFilter('none')
        }
    }
    async function GetData() {
        setloading(true);
        try {
            axios({
                method: "get",
                url: ApiPaths.Directs,
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
                    console.log("Direct", response);
                    if (response.data.tokenStatus == false) {
                        setloading(false)
                        navigate('/');
                    } else {
                        setDirects(response.data.result)
                        setloading(false);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                    setloading(false);
                });
        } catch (e) {
            console.log(e);
            setloading(false);
        }
    }
    // https://test.mlmreadymade.com/mahavir/API/Team/directteam?username=0x71eb064642d22d967740e36f7a5fe7338c80d0e7
    async function GetFilterData() {
        setloading(true);
        try {
            let filterurl = `${ApiPaths.Directs}?username=${searchId}&start_date=${searchFromDate}&end_date=${searchToDate}&active_status=${searchStatus}`
            axios({
                method: "get",
                url: filterurl,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token
                },
            })
                .then(function (response) {
                    console.log("filter", response);
                    if (response.data.tokenStatus == false) {
                        setloading(false)
                        navigate('/');
                    } else {
                        setDirects(response.data.result)
                        setloading(false);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                    setloading(false);
                });
        } catch (e) {
            console.log(e);
            setloading(false);
        }
    }
    useEffect(() => {
        GetData();
    }, [])

    function FilterFun() {
        console.log('searchId', searchId);
        console.log('searchFromDate', searchFromDate);
        console.log('searchToDate', searchToDate);
        console.log('searchStatus', searchStatus);
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
                    <p className="m-0">Home / My Genelogy / <span>Direct</span></p>
                </div>
                <Row id="filterRow">
                    <span id="filterLogo" onClick={() => toggleFilter()}><i><BiFilter /></i>Filter</span>
                    <Row className="p-0 m-0" style={{ display: filter }}>
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
                        <div>
                            <button className="save filter" onClick={GetFilterData}>Filter <i><BiFilter /></i></button>
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
                                    directs?.map((x, i) => {
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

export default DirectPage