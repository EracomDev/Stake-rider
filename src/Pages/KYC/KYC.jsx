import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./KYC.css"
import { FcCheckmark } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import Info from "./../../Images/info.png"
import Identity from "./../../Images/identity.png"
import Identity2 from "./../../Images/identity2.png"
import Bank3 from "./../../Images/bank3.png"
import Bank1 from "./../../Images/bank1.png"
import NomineeImg from "./../../Images/nominee.png"
const KYCStatus = () => {
    return (
        <>
            <Row id="directTableRow" className="p-4">
                <Col md="12" lg="12" className="p-0">
                    <div style={{ width: "100%" }}>
                        <table>
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Personal</th>
                                <th>Identity</th>
                                <th>Pan</th>
                                <th>Bank</th>
                                <th>Nominee</th>
                            </tr>
                            <tr>
                                <td>C437467</td>
                                <td>John Smith</td>
                                <td style={{ color: "green" }}>Submitted</td>
                                <td><i><FcCheckmark /></i></td>
                                <td><i><FcCheckmark /></i></td>
                                <td><i><FcCheckmark /></i></td>
                                <td><i><FcCheckmark /></i></td>
                            </tr>
                        </table>
                    </div>
                </Col>
            </Row>
        </>
    )
}
const PersonalInfo = () => {
    return (
        <div className="PersonalDetail">
            <Row className="p-4">
                <Col lg="6" md="6" className="PersonalDetailImgCol">
                    <img src={Info} alt="logo.png" />
                </Col>
                <Col lg="6" md="6" className="PersonalDetailCol outerBox">
                    <h3 className='pageHeading'>Personal Information</h3>
                    <div>
                        <label>
                            Name
                        </label>
                        <p>John Smith</p>
                    </div>

                    <div>
                        <label>
                            Email
                        </label>
                        <p>user@gmail.com</p>
                    </div>
                    <div>
                        <label>
                            Distributor Number
                        </label>
                        <p>C675454</p>
                    </div>
                    <div>
                        <label>
                            Mobile
                        </label>
                        <p>98756-96357</p>
                    </div>
                </Col>
            </Row>
        </div>

    )
}
const IdentityVerification = () => {
    return (
        <div id="identityVerification">
            <Row className="p-4">
                <Col lg="6" md="6" id="identityVerificationImgCol">
                    <img src={Identity2} alt="" />
                </Col>
                <Col lg="6" md="6" className="outerBox">
                    <h3 className='pageHeading'>Identity Verificaton</h3>
                    <div>
                        <label>Select Services</label>
                        <select name="" id="">
                            <option value="">Select</option>
                            <option value="">Aadhaar</option>
                            <option value="">Voter Id</option>
                            <option value="">Driving Licence</option>
                            <option value="">Passport</option>
                        </select>
                    </div>
                    <div>
                        <label>Document Number</label>
                        <input type="text" placeholder='Enter Document Number' />
                    </div>
                    <div className="IdentityVerificationChooseFile">
                        <label>Front Image</label>
                        <input type="file" />
                    </div>
                    <div className="IdentityVerificationChooseFile">
                        <label>Back Image</label>
                        <input type="file" />
                    </div>
                    <button className="save">Submit</button>
                </Col>
            </Row>
        </div>
    )
}
const PanCardDetails = () => {
    return (
        <div id="identityVerification">
            <Row className="p-4">
                <Col lg="6" md="6" id="panCardDetailsImgCol">
                    <img src={Identity} alt="" />
                </Col>
                <Col lg="6" md="6" className="outerBox">
                    <h3 className='pageHeading'>Pan Card Details</h3>
                    <div>
                        <label>Pan Number</label>
                        <input type="text" placeholder='Enter Pan Number' />
                    </div>
                    <div className="IdentityVerificationChooseFile">
                        <label>Pan Card Image</label>
                        <input type="file" />
                    </div>
                    <button className="save">Submit</button>
                </Col>
            </Row>
        </div>
    )
}
const BankDetails = () => {
    return (
        <div className="bankDetails">
            <Row className="p-4">
                <Col lg="6" md="6" id="bankDetailsImgCol">
                    <img src={Bank1} alt="logo.png" />
                </Col>
                <Col lg="6" md="6" className="outerBox"><div>
                    <h3 className='pageHeading'>Bank Details</h3>
                    <div className="bankitems">
                        <label>Account Holder Name</label>
                        <input type="text" placeholder='Enter Account Holder Name' />
                    </div>
                    <div className="bankitems">
                        <label>Bank Name</label>
                        <input type="text" placeholder='Enter Bank Name' />
                    </div>
                    <div className="bankitems">
                        <label>Account Number</label>
                        <input type="text" placeholder='Enter Account Number' />
                    </div>
                    <div className="bankitems">
                        <label>IFSC Code</label>
                        <input type="text" placeholder='Enter IFSC Code' />
                    </div>
                    <div className="bankitems">
                        <label>Bank Branch</label>
                        <input type="text" placeholder='Enter Bank Branch' />
                    </div>
                    <div className="bankitems">
                        <label>Bank Passbook Image</label>
                        <input id="passbookImg" type="file" placeholder='Enter Account Holder Name' />
                    </div>
                </div>
                    <button className="save">Submit</button>
                </Col>
            </Row>
        </div>
    )
}
const Nominee = () => {
    return (
        <div id='nominee'>
            <Row className="p-4">
                <Col lg="6" md="6" id="nomineeImgCol">
                    <img src={NomineeImg} alt="logo.png" />
                </Col>
                <Col lg="6" md="6" className="outerBox"><div>
                    <h3 className='pageHeading'>Nominee Details</h3>
                    <div className="bankitems">
                        <label>Nominee Name</label>
                        <input type="text" placeholder='Enter Nominee Name' />
                    </div>
                    <div className="bankitems">
                        <label>Nominee Ralation</label>
                        <input type="text" placeholder='Enter Nominee Reltion' />
                    </div>
                    <div className="bankitems">
                        <label>Nominee D.O.B.</label>
                        <input type="date" placeholder='Enter Nominee Date of Birth' />
                    </div>
                </div>
                    <button className="save">Submit</button>
                </Col>
            </Row>
        </div>
    )
}

const ChangePages = (pages) => {
    if (pages === "KYCStatus") {
        return KYCStatus();
    }
    if (pages === "PersonalInfo") {
        return PersonalInfo();
    }
    if (pages === "IdentityVerification") {
        return IdentityVerification();
    }
    if (pages === "PanCardDetails") {
        return PanCardDetails();
    }
    if (pages === "BankDetails") {
        return BankDetails();
    }
    if (pages === "Nominee") {
        return Nominee();
    }
}
const KYC = () => {
    const [KYCPages, setKYCPages] = useState("KYCStatus");
    const [activePage, setActivePage] = useState("KYCStatus");
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / <span>KYC</span></p>
                </div>
                <div id='kycTabs'>
                    <p className={`${activePage === "KYCStatus" ? "kycActivePage" : "undefine"}`} onClick={() => (setKYCPages("KYCStatus"), setActivePage("KYCStatus"))}>KYC Status</p>
                    <p className={`${activePage === "PersonalInfo" ? "kycActivePage" : "undefine"}`} onClick={() => (setKYCPages("PersonalInfo"), setActivePage("PersonalInfo"))}>Personal Info</p>
                    <p className={`${activePage === "IdentityVerification" ? "kycActivePage" : "undefine"}`} onClick={() => (setKYCPages("IdentityVerification"), setActivePage("IdentityVerification"))}>Identity Verification</p>
                    <p className={`${activePage === "PanCardDetails" ? "kycActivePage" : "undefine"}`} onClick={() => (setKYCPages("PanCardDetails"), setActivePage("PanCardDetails"))}>Pan Card Details</p>
                    <p className={`${activePage === "BankDetails" ? "kycActivePage" : "undefine"}`} onClick={() => (setKYCPages("BankDetails"), setActivePage("BankDetails"))}>Bank Details</p>
                    <p className={`${activePage === "Nominee" ? "kycActivePage" : "undefine"}`} onClick={() => (setKYCPages("Nominee"), setActivePage("Nominee"))}>Nominee</p>
                </div>
                <section id="KYCSection">

                    {
                        ChangePages(KYCPages)
                    }

                </section>
            </Container>
        </React.Fragment>
    )
}

export default KYC