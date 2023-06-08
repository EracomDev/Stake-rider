import React from 'react'
import "./Orders.css"
import { Container, Row, Col } from "react-bootstrap";
import OrdersImg from "./../../Images/orders.png"
import { useState } from 'react';
import { ApiPaths } from '../../API';
import axios from 'axios';
import { useEffect } from 'react';
import ConvertTime from '../../Common/ConvertTime';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';
const Orders = () => {
    const token = localStorage.getItem('authToken');
    const [ordersData, setOrdersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function GetData() {
        setLoading(true);
        try {
            axios({
                method: "get",
                url: ApiPaths.Orders,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token
                },
            })
                .then(function (response) {
                    console.log("orders", response);
                    if (response.data.tokenStatus == false) {
                        setLoading(false);
                        navigate('/')
                    } else {
                        setOrdersData(response?.data?.result);
                        setLoading(false);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false);
                });
            return;
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <React.Fragment>
            {
                loading === true ? <Loader /> : ''
            }
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / <span>Orders</span></p>
                </div>
                <div id="directIncomeDiv">
                    <div id="ordersImg"><img src={OrdersImg} alt="" /></div>

                    <Row id="directTableRow" className="">
                        <Col md="12" className="p-0">
                            <div style={{ width: "100%" }}>
                                <table>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Package Amount ($)</th>
                                        <th>Package Date&Time</th>
                                        <th>Package Status</th>
                                    </tr>
                                    {
                                        ordersData?.map((x, i) => {
                                            return (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{x?.order_amount}</td>
                                                    <td>{ConvertTime(x?.time)}</td>
                                                    {
                                                        x?.status == "1" ?
                                                            <td>Approved</td> : <td>Pending</td>
                                                    }
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

export default Orders