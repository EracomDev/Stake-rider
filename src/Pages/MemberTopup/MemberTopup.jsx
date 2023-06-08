import React from 'react'
import "./MemberTopup.css"
import { Container, Row, Col } from "react-bootstrap";
import { BsPinAngleFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
const MemberTopup = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / Topup / <span>Member Topup</span></p>
                </div>
                <Row className="memberTopupRow">
                    <Col lg="7" md="7" className="memberTopupFormCol">
                        <div>
                            <h4>Pin Available</h4>
                            <h4><span><i className="color-primary"><BsPinAngleFill /></i> </span> 10</h4>
                            <div>
                                <div className="bankitems">
                                    <label>Username</label>
                                    <input type="text" placeholder='Enter Username' />
                                </div>
                                <div className="bankitems">
                                    <label>Select Package</label>
                                    <select name="" id="PinSelect">
                                        <option value="">Select Package</option>
                                        <option value="">Welcome Kit</option>
                                    </select>
                                </div>

                            </div>
                            <button className="save">Transfer</button>
                        </div>
                    </Col>
                    <Col lg="5" md="5" className="memberTopupTextCol">
                        <h4>STEPS FOR TOPUP</h4>
                        <p><span><i className='mr-10 color-primary'><FaHandPointRight /></i></span>You Can Topup Any User Id</p>
                        <p><span><i className='mr-10 color-primary'><FaHandPointRight /></i></span>Enter Username Which You Want To Topup</p>
                        <p><span><i className='mr-10 color-primary'><FaHandPointRight /></i></span>Select Package From The Drop Down Menu And Then Click On Topup Button.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default MemberTopup