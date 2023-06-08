import React from 'react'
import "./ReportPage.css"
import { Container, Row, Col } from "react-bootstrap";
import { GrPowerReset } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
const ReportPage = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / <span>Report</span></p>
                </div>
                <div id='reportPageLeftDiv'>
                    <div className="p-2">
                        <h4>FULL REPORT</h4>
                        <p>Date Wise Income</p>
                    </div>
                    <Row>
                        <Col md="6" lg="6" id="reportPageLeftCol">
                            {/* <h4>FULL REPORT</h4>
                            <p>Date Wise Income</p> */}
                            <Row>
                                <Col lg="6" md="6">
                                    <select name="" id="">
                                        <option value="">All Time</option>
                                        <option value="">Today</option>
                                        <option value="">Yesterday</option>
                                        <option value="">This Week</option>
                                        <option value="">Last Week</option>
                                    </select>
                                </Col>
                                <Col lg="6" md="6">
                                    <button className='save reportBtn'>View</button>
                                    <button className='save reportBtn'>Print</button>
                                    <button className='save reportBtn'><i><BiReset /></i></button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6" lg="6" id="reportPageRightCol">
                            <div className="mb-2">
                                <h5>John Smith</h5>
                                <p>Username</p>
                            </div>
                            <div><hr></hr></div>
                            <div>
                                <h5><span>$ </span>900</h5>
                                <p>Total Income</p>
                            </div>
                        </Col>
                    </Row>
                    <Row id="directTableRow" className="">
                        <Col md="12" className="">
                            <div style={{ width: "100%", margin: "0" }}>
                                <table>
                                    <tr>
                                        <td>Direct Income</td>
                                        <td>$ 200</td>

                                    </tr>
                                    <tr>
                                        <td>Level Income</td>
                                        <td>$ 600</td>
                                    </tr>
                                    <tr>
                                        <td>Reward Income</td>
                                        <td>$ 100</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>$ 900</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}
export default ReportPage