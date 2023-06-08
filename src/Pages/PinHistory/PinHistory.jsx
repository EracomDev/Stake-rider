import React, { useState } from 'react'
import "./PinHistory.css"
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
const PinHistory = () => {
    const [toggleFilter, setToggleFilter] = useState("FilterMainDiv");
    const myfun = () => {
        if (toggleFilter === "FilterMainDiv") {
            setToggleFilter("FilterMainDiv1");
        } else {
            setToggleFilter("FilterMainDiv");
        }
    }
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / E-Pin / <span>Pin History</span></p>
                </div>
                <Row id="filterRow" >
                    <span onClick={() => myfun()} id="filterLogo"><i><BiFilter /></i>Filter</span>
                    <Row id={toggleFilter} className="p-0 m-0">
                        <Col lg="2" md="4">
                            <div>
                                <input type="text" placeholder='Search By Name' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input type="text" placeholder='Search User By Id' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input type="date" placeholder='from date' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input type="date" placeholder='to date' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <select name="" id="">
                                    <option value="">--Credit/Debit--</option>
                                    <option value="">Credit</option>
                                    <option value="">Debit</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="2" md="4">

                        </Col>
                        <div>
                            <button className="save filter">Filter <i><BiFilter /></i></button>
                            <button className="cancel reset">Reset <i><GrPowerReset /></i></button>
                        </div>
                    </Row>
                </Row>
                <Row id="directTableRow">
                    <Col md="12" className="p-0">
                        <div style={{ width: "100%" }}>
                            <table>
                                <tr>
                                    <th>S No.</th>
                                    <th>TX Yser</th>
                                    <th>No. Of Pins</th>
                                    <th>Pin Type</th>
                                    <th>Credit/Debit</th>
                                    <th>Balance</th>
                                    <th>Remark</th>
                                    <th>Date&Time</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>10</td>
                                    <td>Welcome Kit</td>
                                    <td>Credit</td>
                                    <td>12</td>
                                    <td>Demo recieve 12 pins from admin</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John</td>
                                    <td>10</td>
                                    <td>Welcome Kit</td>
                                    <td>Credit</td>
                                    <td>12</td>
                                    <td>Demo recieve 12 pins from admin</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>John</td>
                                    <td>10</td>
                                    <td>Welcome Kit</td>
                                    <td>Credit</td>
                                    <td>12</td>
                                    <td>Demo recieve 12 pins from admin</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>

                            </table>
                        </div>
                    </Col>
                </Row>
            </Container >
        </React.Fragment >
    )
}

export default PinHistory