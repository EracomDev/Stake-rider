import React, { useState } from 'react'
import "./NewsEvent.css"
import { Container, Row, Col } from "react-bootstrap";

const LatestNews = () => {
    return (
        <>
            <div id="latestNewsDiv">
                <Row id="latestNewsRow">
                    <Col sm="6" xs="6" md="6" lg="6" className="newsTitle"><p>welcome here</p></Col>
                    <Col sm="6" xs="6" md="6" lg="6" className="newsDate"><p>2022-01-31 08:32:39</p></Col>
                </Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, debitis. Quae architecto error quisquam alias perferendis nisi sint ullam quas, molestias ab nostrum cumque, </p>
            </div>
            <div id="latestNewsDiv">
                <Row id="latestNewsRow">
                    <Col sm="6" xs="6" md="6" lg="6" className="newsTitle"><p>welcome here</p></Col>
                    <Col sm="6" xs="6" md="6" lg="6" className="newsDate"><p>2022-01-31 08:32:39</p></Col>
                </Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, debitis. Quae architecto error quisquam alias perferendis nisi sint ullam quas, molestias ab nostrum cumque,  </p>
            </div>
            <div id="latestNewsDiv">
                <Row id="latestNewsRow">
                    <Col sm="6" xs="6" md="6" lg="6" className="newsTitle"><p>welcome here</p></Col>
                    <Col sm="6" xs="6" md="6" lg="6" className="newsDate"><p>2022-01-31 08:32:39</p></Col>
                </Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, debitis. Quae architecto error quisquam alias perferendis nisi sint ullam quas, molestias ab nostrum cumque,  </p>
            </div>
        </>
    )
}
const RecentEvents = () => {
    return (
        <>
            <div id="latestNewsDiv">
                <Row id="latestNewsRow">
                    <Col sm="6" xs="6" md="6" lg="6" className="newsTitle"><p>welcome here</p></Col>
                    <Col sm="6" xs="6" md="6" lg="6" className="newsDate"><p>2022-01-31 08:32:39</p></Col>
                </Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, debitis. Quae </p>
            </div>
            <div id="latestNewsDiv">
                <Row id="latestNewsRow">
                    <Col sm="6" xs="6" md="6" lg="6" className="newsTitle"><p>welcome here</p></Col>
                    <Col sm="6" xs="6" md="6" lg="6" className="newsDate"><p>2022-01-31 08:32:39</p></Col>
                </Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, debitis. Quae </p>
            </div>
            <div id="latestNewsDiv">
                <Row id="latestNewsRow">
                    <Col sm="6" xs="6" md="6" lg="6" className="newsTitle"><p>welcome here</p></Col>
                    <Col sm="6" xs="6" md="6" lg="6" className="newsDate"><p>2022-01-31 08:32:39</p></Col>
                </Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, debitis. Quae  </p>
            </div>
        </>
    )
}
const NewsEvent = () => {
    const [newsEventPage, setNewsEventPage] = useState("page1");
    // const [newsEventPage, setNewsEventPage] = useState("page1");
    return (
        <React.Fragment>
            <Container>
                <div id="newsEventTabDiv">
                    <Row id="newsEventTabRow">
                        <Col md="6" lg="6" xs="6" sm="6" id="newsEventTabCol" className={`${newsEventPage === "page1" ? "NewsEventActive" : "noActive"}`}>
                            <h5 onClick={() => setNewsEventPage("page1")}>Latest News</h5>
                        </Col>
                        <Col md="6" lg="6" xs="6" sm="6" id="newsEventTabCol" className={`${newsEventPage === "page2" ? "NewsEventActive" : "noActive"}`}>
                            <h5 onClick={() => setNewsEventPage("page2")}>Recent Events</h5>
                        </Col>
                    </Row>
                    <section>
                        {
                            newsEventPage === "page1" ? LatestNews() : RecentEvents()
                        }
                    </section>
                </div>
            </Container>
        </React.Fragment>
    )
}
export default NewsEvent