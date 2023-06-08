import React, { useState } from 'react'
import "./Accounts.css"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";

const Accounts = () => {

    const YesNoCheck = (event) => {
        if (event.target.value === "bank") {
            setAccounts("block")
        } else {
            setAccounts("none")
        }
    }
    const [accounts, setAccounts] = useState("none");
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / My Account / <span>Profile</span></p>
                </div>
                <Row id="accounts">
                    <Col lg="6">
                        <div id="choosebank">
                            <label htmlFor='choosebank'>Select Payment Type</label>
                            <select name="" id="" onChange={YesNoCheck}>
                                <option value="default">--Select Type--</option>
                                <option value="bank">Bank</option>
                            </select>
                        </div>
                        <div id="ifYes" style={{ display: accounts }}>
                            <div className="bankitems">
                                <label>Bank Name</label>
                                <input type="text" placeholder='Enter Bank Name' />
                            </div>
                            <div className="bankitems">
                                <label>IFSC Code</label>
                                <input type="text" placeholder='Enter IFSC Code' />
                            </div>
                            <div className="bankitems">
                                <label>Account Number</label>
                                <input type="text" placeholder='Enter Account Number' />
                            </div>
                            <div className="bankitems">
                                <label>Account Holder Name</label>
                                <input type="text" placeholder='Enter Account Holder Name' />
                            </div>
                            <div className="bankitems">
                                <label>Account Type</label>
                                <input type="text" placeholder='Enter Account Type' />
                            </div>
                            <div className="bankitems">
                                <label>Bank Branch</label>
                                <input type="text" placeholder='Enter Bank Branch' />
                            </div>
                        </div>
                        <button className="save" style={{ marginBottom: "20px" }}>Add Account</button>
                    </Col>
                    <Col lg="6">
                        <div className="accountTable">
                            <table>
                                <tr>
                                    <th>S No.</th>
                                    <th>Default</th>
                                    <th>Account Details</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><i style={{ display: "block", textAlign: "center" }}><FcCheckmark /></i></td>
                                    <td>Lorem, ipsum.</td>
                                    <td>
                                        <Link id="tableDelete" style={{ display: "block" }}>Delete</Link>
                                        <Link id="tableSetDefault">Set Default</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td></td>
                                    <td>Jackson</td>
                                    <td>
                                        <Link id="tableDelete" style={{ display: "block" }}>Delete</Link>
                                        <Link id="tableSetDefault">Set Default</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td></td>
                                    <td>Doe</td>
                                    <td>
                                        <Link id="tableDelete" style={{ display: "block" }}>Delete</Link>
                                        <Link id="tableSetDefault">Set Default</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td></td>
                                    <td>Doe</td>
                                    <td>
                                        <Link id="tableDelete" style={{ display: "block" }}>Delete</Link>
                                        <Link id="tableSetDefault">Set Default</Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Accounts