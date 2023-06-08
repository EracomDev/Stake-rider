import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./PinTransfer.css"
import EPinCard from "./../../Component/EPinCard/EPinCard";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiWallet3Fill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPinAngleFill } from "react-icons/bs";
const PinTransferTab = () => {
    return <>
        <Col><div>
            {/* <h3 className='pageHeading'>Pin Transfer</h3> */}
            <div className="bankitems">
                <label>Username</label>
                <input type="text" placeholder='Enter Username' />
            </div>
            <div className="bankitems">
                <label>Select Pin</label>
                <select name="" id="PinSelect">
                    <option value="">Select Pin</option>
                    <option value="">Welcome Kit</option>
                </select>
            </div>
            <div className="bankitems">
                <label>Number Of Pins</label>
                <input type="number" placeholder='Enter Number Of Pins' />
            </div>
        </div>
            <button className="save">Transfer</button>
        </Col>
    </>
}


const PinRequestTab = () => {
    return (
        <>
            <Col ><div>
                {/* <h3 className='pageHeading'>Pin Request</h3> */}
                <div className="bankitems">
                    <label>Username</label>
                    <input type="text" placeholder='Enter Username' />
                </div>
                <div className="bankitems">
                    <label>UTR Number</label>
                    <input type="text" placeholder='Enter UTR Number' />
                </div>
                <div className="bankitems">
                    <label>Bank Passbook Image</label>
                    <input id="passbookImg" type="file" placeholder='Enter Account Holder Name' />
                </div>
                <div className="bankitems">
                    <label>Select Pin</label>
                    <select name="" id="PinSelect">
                        <option value="">Select Pin</option>
                        <option value="">Welcome Kit</option>
                    </select>
                </div>
                <div className="bankitems">
                    <label>number Of Pins</label>
                    <input type="number" placeholder='Enter Number Of Pins' />
                </div>
                <div className="bankitems">
                    <label>Remark</label>
                    <input type="text" placeholder='Enter Remark' />
                </div>

            </div>
                <button className="save">Submit</button>
            </Col></>
    )
}

const PinTransfer = () => {
    const [activePinTab, setActivePinTab] = useState("page1");
    const [activePinTabClass, setActivePinTabClass] = useState("PinActive");
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg="4">
                        <EPinCard
                            img={GiTakeMyMoney}
                            title="Active E-Pin Balance"
                            pin="2"
                        />
                    </Col>
                    <Col lg="4"><EPinCard
                        img={RiWallet3Fill}
                        title="Available E-Pin Balance"
                        pin="10"
                    /></Col>
                    <Col lg="4"> <EPinCard
                        img={GiReceiveMoney}
                        title="Pending E-Pin Balance"
                        pin="10"
                    /></Col>
                </Row>
                <Row className="">


                    <Col md="12" lg="12" id="ECardForm" >
                        <div className="outerBox">
                            <Row>
                                <Col xs="6" onClick={() => setActivePinTab("page1")}><h4 className={`${activePinTab === "page1" ? "PinActive" : "PinNotActive"}`}>Pin Transfer</h4>
                                </Col>
                                <Col xs="6" onClick={() => setActivePinTab("page2")}><h4 className={`${activePinTab === "page2" ? "PinActive" : "PinNotActive"}`}>Pin Request</h4></Col>
                            </Row>
                            <Row>
                                {
                                    activePinTab === "page1" ? PinTransferTab() : PinRequestTab()
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container >
        </React.Fragment >
    )
}

export default PinTransfer