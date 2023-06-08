import React, { useState } from 'react'
import "./Support.css"
import { Container, Row, Col, } from "react-bootstrap";
import { GiTicket } from "react-icons/gi"
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { BiSearchAlt2 } from "react-icons/bi";
const Support = () => {
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
                    <p className="m-0">Home / <span>Support</span></p>
                </div>
                {/* <div id="ticketIdDiv" className="p-2">
                    <Row>
                        <span onClick={() => myfun()} id="filterLogo"><i><BiFilter /></i>Filter</span>
                        <Row id={toggleFilter} className="p-0 m-0" >
                            <Col lg="6" md="6">
                                <label>Ticket ID</label>
                                <input type="text" placeholder='Enter Ticket Id' />
                            </Col>
                            <Col lg="6" md="6">
                                <label>Status</label>
                                <select name="" id="">
                                    <option value="">--Select Status--</option>
                                    <option value="">Replied</option>
                                    <option value="">Not Replied</option>
                                </select>
                            </Col>
                        </Row>
                    </Row>
                    <button className="save">Search</button>
                    <button className="save">Reset</button>
                </div> */}
                <Row id="filterRow">
                    <span onClick={() => myfun()} id="filterLogo"><i><BiFilter /></i>Filter</span>
                    <Row id={toggleFilter} className="p-0 m-0">
                        <Col lg="2" md="2" sm="3">
                            <div>
                                <input type="text" placeholder='Search By Name' />
                            </div>
                        </Col>
                        <Col lg="2" md="2" sm="3">
                            <div>
                                <select name="" id="">
                                    <option value="">--Select Status--</option>
                                    <option value="">Replied</option>
                                    <option value="">Not Replied</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="4" md="4" sm="6">
                            <div>
                                <button className="save filter inlineBtn">Search <i></i></button>
                                <button className="cancel reset inlineBtn">Reset <i><GrPowerReset /></i></button>
                            </div>
                        </Col>

                    </Row>
                </Row>
                <div id="supportDetailsDiv">
                    <Row id="supportDetailsRow">
                        <Col lg="3" md="3" sm="6" xs="6">
                            <div className="supportDetail">
                                <h1>5</h1>
                                <p>Support</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="6" xs="6">
                            <div className="supportDetail fontRed">
                                <h1>9</h1>
                                <p>Not Replied Inquiry</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="6" xs="6">
                            <div className="supportDetail">
                                <h1>7</h1>
                                <p>Replied Inquiry</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="6" xs="6">
                            <div className="supportDetail">
                                <h1>3</h1>
                                <p>Total Inquiry</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="urgentInquiry">
                    <Row >
                        <Col md="5" lg="4">
                            <div id="urgentInquiryDiv">
                                <h4 className="mb-4">Urgent Inquiry Information</h4>
                                <p>Name: <span>John Smith </span></p>
                                <p>Email: <span>Companyname@Gmail.Com </span></p>
                                <p>Phone:<span>9813538826 </span></p>
                            </div>
                            <div id="latestTicketDiv">
                                <h4>Latest Ticket <span><i><GiTicket /></i></span></h4>
                                <div id="ticketDiv">
                                    <i><GiTicket /></i>
                                    <div>
                                        <p id="ticketTitle">TKpOJvRj7g</p>
                                        <p>2022-09-12 14:16:04</p>
                                        <p>test</p>
                                    </div>
                                </div>
                                <div id="ticketDiv">
                                    <i><GiTicket /></i>
                                    <div>
                                        <p id="ticketTitle">TKpOJvRj7g</p>
                                        <p>2022-09-12 14:16:04</p>
                                        <p>test</p>
                                    </div>
                                </div>
                                <div id="ticketDiv">
                                    <i><GiTicket /></i>
                                    <div>
                                        <p id="ticketTitle">TKpOJvRj7g</p>
                                        <p>2022-09-12 14:16:04</p>
                                        <p>test</p>
                                    </div>
                                </div>
                                <div id="ticketDiv">
                                    <i><GiTicket /></i>
                                    <div>
                                        <p id="ticketTitle">TKpOJvRj7g</p>
                                        <p>2022-09-12 14:16:04</p>
                                        <p>test</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="7" lg="8">
                            <div id="newSupportTicket">
                                <h4>New Support Ticket</h4>
                                <p>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.</p>

                                <div id="newSupportTickeFormDiv">
                                    <label>Name</label>
                                    <p>User Name</p>
                                </div>
                                <div id="newSupportTickeFormDiv">
                                    <label>Email</label>
                                    <p>Usermail@gmail.com</p>
                                </div>
                                <div id="newSupportTickeFormDiv">
                                    <label>Description</label>
                                    <textarea name="" id="" cols="30" rows="5" placeholder='Write Your Message Here'></textarea>
                                </div>
                                <button className='save'>Send</button>
                                <button className='cancel'>Reset</button>
                            </div>
                            <div id="supportTicket">
                                <h4>Support Ticket</h4>
                                <Row id="directTableRow">
                                    <Col md="12" className="p-0">
                                        <div style={{ width: "100%" }}>
                                            <table>
                                                <tr>
                                                    <th>Ticket ID</th>
                                                    <th>Description</th>
                                                    <th>Create Date</th>
                                                    <th>Status</th>
                                                    <th>Reply</th>
                                                </tr>
                                                <tr>
                                                    <td>TKMj0hzX9u</td>
                                                    <td>Test</td>
                                                    <td>2022-09-10 15:24:37</td>
                                                    <td style={{ color: "green" }}>Replied</td>
                                                    <td>test</td>
                                                </tr>
                                                <tr>
                                                    <td>TKMj0hzX9u</td>
                                                    <td>Test</td>
                                                    <td>2022-09-10 15:24:37</td>
                                                    <td style={{ color: "green" }}>Replied</td>
                                                    <td>test</td>
                                                </tr>
                                                <tr>
                                                    <td>TKMj0hzX9u</td>
                                                    <td>Test</td>
                                                    <td>2022-09-10 15:24:37</td>
                                                    <td style={{ color: "red" }}>Not Replied</td>
                                                    <td>test</td>
                                                </tr>
                                                <tr>
                                                    <td>TKMj0hzX9u</td>
                                                    <td>Test</td>
                                                    <td>2022-09-10 15:24:37</td>
                                                    <td style={{ color: "red" }}>Not Replied</td>
                                                    <td>test</td>
                                                </tr>


                                            </table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Support