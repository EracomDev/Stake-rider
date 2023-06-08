import React from 'react'
import "./Rewards.css"
import { Container, Row, Col } from "react-bootstrap";
import Reward3 from "./../../Images/reward3.png"
const Rewards = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / <span>Rewards</span></p>
                </div>
                <div id="rewardsTableDiv">
                    <Row className="" id="rewardsTableRow">
                        <Col md="6" id="rewardsImgCol" className="d-block m-auto ">
                            <img src={Reward3} alt="logo.png" />
                        </Col>
                        <Col md="6" className="m-0" id="directTableRow">
                            <div style={{ width: "100%" }}>
                                <table>
                                    <tr>
                                        <th>Level</th>
                                        <th>My Team</th>
                                        <th>Team Required ($)</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr>
                                        <td>Active</td>
                                        <td>0</td>
                                        <td>50</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>DIRECTOR</td>
                                        <td>0</td>
                                        <td>100</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>SENIOR DIRECTOR</td>
                                        <td>0</td>
                                        <td>200</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>STAR</td>
                                        <td>0</td>
                                        <td>250</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>SENIOR STAR</td>
                                        <td>0</td>
                                        <td>300</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>SILVER</td>
                                        <td>0</td>
                                        <td>350</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>SENIOR SILVER</td>
                                        <td>0</td>
                                        <td>400</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>GOLD</td>
                                        <td>0</td>
                                        <td>450</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>SENIOR GOLD</td>
                                        <td>0</td>
                                        <td>500</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>DIAMOND</td>
                                        <td>0</td>
                                        <td>600</td>
                                        <td>Pending</td>
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

export default Rewards