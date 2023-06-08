import React from "react";
import "./BinaryTree.css"
import UserImg from "./../../Images/userGreen.png";
import UserRed from "./../../Images/userRed.png"
import UserGreen from "./../../Images/userGreen.png"
import ReactTooltip from 'react-tooltip';
import { FaCircle } from "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap";
const BinaryTree = () => {
    return (
        <React.Fragment >
            <ReactTooltip place="right" type="dark" effect="float" />
            <Container fluid className="of mb-4" >
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12" className="m-0 p-0">
                        <div className="imgDiv" >
                            {/* <ReactTooltip place="top" type="dark" effect="float" /> */}
                            <img data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0" src={UserImg} alt="logo.png" />
                            <div id="dataTree">
                                <p id="userId">SM128439 <i><FaCircle /></i></p>
                                <p>eracom tester</p>
                            </div>
                            <hr className="hrVertical"></hr>
                        </div>

                        <hr className="hrHorizontal"></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="6" className="m-0 p-0">
                        <div className="imgDiv" >
                            <hr className="hrVerticalOnImg"></hr>
                            <img data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0" src={UserImg} alt="logo.png" />
                            <div id="dataTree">
                                <p id="userId">SM128439 <i><FaCircle /></i></p>
                                <p>eracom tester</p>
                            </div>
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                    </Col>
                    <Col lg="6" md="6" sm="6" xs="6" className="m-0 p-0">
                        <div className="imgDiv" >
                            <hr className="hrVerticalOnImg"></hr>
                            <img data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0" src={UserImg} alt="logo.png" />
                            <div id="dataTree">
                                <p id="userId">SM128439 <i><FaCircle /></i></p>
                                <p>eracom tester</p>
                            </div>
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" >
                            <hr className="hrVerticalOnImg"></hr>
                            <img data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0" src={UserImg} alt="logo.png" />
                            <div id="dataTree">
                                <p id="userId">SM128439 <i><FaCircle /></i></p>
                                <p>eracom tester</p>
                            </div>
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" >
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>

                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" >
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>

                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" >
                            <hr className="hrVerticalOnImg"></hr>
                            <img data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0" src={UserImg} alt="logo.png" />
                            <div id="dataTree">
                                <p id="userId">SM128439 <i><FaCircle /></i></p>
                                <p>eracom tester</p>
                            </div>
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" >
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>

                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" >
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>

                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" >
                            <hr className="hrVerticalOnImg"></hr>
                            <img data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0" src={UserImg} alt="logo.png" />
                            <div id="dataTree">
                                <p id="userId">SM128439 <i><FaCircle /></i></p>
                                <p>eracom tester</p>
                            </div>
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" >
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>

                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" >
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" >
                            <hr className="hrVerticalOnImg"></hr>
                            <img data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0" src={UserImg} alt="logo.png" />
                            <div id="dataTree">
                                <p id="userId">SM128439 <i><FaCircle /></i></p>
                                <p>eracom tester</p>
                            </div>
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" >
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>

                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" >
                                    <ReactTooltip place="right" type="dark" effect="float" />
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0" src={UserRed} alt="logo.png" />
                                    <div id="dataTree">
                                        <p id="userId">SM128439 <i><FaCircle /></i></p>
                                        <p>eracom tester</p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>
        </React.Fragment >
    );
}

export default BinaryTree
