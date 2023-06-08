import React from 'react'
import "./WelcomeLetter.css";
import { Container, Row, Col, Card, } from "react-bootstrap";
import { BsPrinterFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
export const WelcomeLetter = () => {
    const navigate = useNavigate();
    const Print = () =>{     
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents;
       window.location.reload(false);
      }
    return (
        <React.Fragment>
            <Container>
                <div id='printReport' className="text-center">
                    <i title='print form' onClick={Print}><BsPrinterFill /></i>
                </div>
                <div id="printablediv" className="outerBox welcomeLetter">
                    <Row >
                        <Col lg="1"></Col>
                        <Col lg="10" className="p-4">
                            <div className="welcomeLetter">
                                <div className="welcomeLetterDetailPerson">
                                    <h2>Welcome Letter</h2>
                                    <ul className="p-0">
                                        <li> <b>Email:   </b> companyname@gmail.com</li>
                                        <li> <b>Purchase Date:  </b>  2018-12-26 10:19:08</li>
                                        <li> <b>Purchase Amount: </b>   600</li>
                                    </ul>
                                </div>
                                <p>Dear Mam/Sir</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta nemo corporis officia optio perspiciatis eius, et adipisci magni dolor sequi dolore tempora ducimus cumque harum voluptatum nesciunt veniam! Assumenda magnam numquam temporibus sed omnis? Amet corrupti voluptatibus et eveniet.</p>

                                <div className="welcomeLetterDetailWithImage">
                                    <img src="https://cdn.vectorstock.com/i/1000x1000/53/21/young-businessman-profile-over-white-background-vector-12055321.webp" alt="logo.png" />
                                    <div className="mx-3 pt-2">
                                        <h3 className="p-0 m-0">User Name</h3>
                                        <p className='m-0'>user1</p>
                                        <p>9813538826</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </div>


            </Container>
        </React.Fragment>
    )
}
export default WelcomeLetter;