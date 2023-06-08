import React from "react";
import "./Tree.css"
import { Container, Row, Col } from "react-bootstrap";
import BinaryTree from "./../../Component/BinaryTree/BinaryTree"
const Tree = () => {
    return (
        <React.Fragment>
            <Container >
                <div className="pagePath">
                    <p className="m-0">Home / My Genelogy / <span>Tree</span></p>
                </div>
                <div>
                    <Row className="">
                        <Col lg="6" md="6">
                            <Row id="directTableRow" className="p-3">
                                <Col md="12" className="p-0">
                                    <div style={{ width: "100%" }}>
                                        <h5>Left Team</h5>
                                        <table>
                                            <tr>
                                                <th>Member</th>
                                                <th>BV</th>
                                                <th>Green Unit</th>
                                                <th>Green Direct</th>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6" md="6">
                            <Row id="directTableRow" className="p-3">
                                <Col md="12" className="p-0">
                                    <div style={{ width: "100%" }}>
                                        <h5>Right Team</h5>
                                        <table>
                                            <tr>
                                                <th>Member</th>
                                                <th>BV</th>
                                                <th>Green Unit</th>
                                                <th>Green Direct</th>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div id="treeFilterDiv" className="mb-2">
                    <Row className="treeFilter" >
                        <Col lg="4" md="4">
                            <input type="text" placeholder="Enter UserName" />
                        </Col>
                        <Col lg="4" md="4">
                            <select name="" id="">
                                <option value="">--Select--</option>
                                <option value="">Whole Team</option>
                                <option value="">Left Team</option>
                                <option value="">Right Team</option>
                            </select>
                        </Col>
                        <Col lg="4" md="4">
                            <button className="save reportBtn">Filter</button>
                            <button className="cancel reportBtn">Reset</button>
                        </Col>
                    </Row>
                </div>
                <div id="treeFilterDiv">
                    <BinaryTree />
                </div>
            </Container>
        </React.Fragment >
    );
}

export default Tree
