import React, { useState } from 'react'
import "./PinBox.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { IoIosCopy } from "react-icons/io"
import { BsShareFill } from "react-icons/bs"
const PinBox = () => {
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
                    <p className="m-0">Home / E-Pin / <span>Pin Box</span></p>
                </div>
                <Row id="filterRow">
                    <span onClick={() => myfun()} id="filterLogo"><i><BiFilter /></i>Filter</span>
                    <Row id={toggleFilter} className="p-0 m-0">
                        <Col lg="2" md="2" sm="3">
                            <div>
                                <select name="" id="">
                                    <option value="">--Select Type--</option>
                                    <option value="">Used</option>
                                    <option value="">Unused</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="2" md="2" sm="3">
                            <div>
                                <select name="" id="">
                                    <option value="">20</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                    <option value="">200</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="4" md="4" sm="6">
                            <div>
                                <button className="save filter inlineBtn">Filter <i><BiFilter /></i></button>
                                <button className="cancel reset inlineBtn">Reset <i><GrPowerReset /></i></button>
                            </div>
                        </Col>

                    </Row>
                </Row>
                <Row id="directTableRow">
                    <Col md="12" className="p-0">
                        <div style={{ width: "100%" }}>
                            <table>
                                <tr>
                                    <th>S No.</th>
                                    <th>Pin</th>
                                    <th>Use IN</th>
                                    <th>Pin Type</th>
                                    <th>Use For</th>
                                    <th>Date&Time</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>XODMSEIFNCN <span id="CopyShareIcon"><i><IoIosCopy /></i> <i><BsShareFill /></i></span></td>
                                    <td>Transfer</td>
                                    <td>Welcome Kit</td>
                                    <td>C4545512</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>XODMSEIFNCN <span id="CopyShareIcon"><i><IoIosCopy /></i> <i><BsShareFill /></i></span></td>
                                    <td>Transfer</td>
                                    <td>Welcome Kit</td>
                                    <td>C4545512</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>XODMSEIFNCN <span id="CopyShareIcon"><i><IoIosCopy /></i> <i><BsShareFill /></i></span></td>
                                    <td>Transfer</td>
                                    <td>Welcome Kit</td>
                                    <td>C4545512</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>XODMSEIFNCN <span id="CopyShareIcon"><i><IoIosCopy /></i> <i><BsShareFill /></i></span></td>
                                    <td>Transfer</td>
                                    <td>Welcome Kit</td>
                                    <td>C4545512</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>XODMSEIFNCN <span id="CopyShareIcon"><i><IoIosCopy /></i> <i><BsShareFill /></i></span></td>
                                    <td>Transfer</td>
                                    <td>Welcome Kit</td>
                                    <td>C4545512</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>XODMSEIFNCN <span id="CopyShareIcon"><i><IoIosCopy /></i> <i><BsShareFill /></i></span></td>
                                    <td>Transfer</td>
                                    <td>Welcome Kit</td>
                                    <td>C4545512</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>XODMSEIFNCN <span id="CopyShareIcon"><i><IoIosCopy /></i> <i><BsShareFill /></i></span></td>
                                    <td>Transfer</td>
                                    <td>Welcome Kit</td>
                                    <td>C4545512</td>
                                    <td>2022-09-10 15:24:37</td>
                                </tr>

                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default PinBox