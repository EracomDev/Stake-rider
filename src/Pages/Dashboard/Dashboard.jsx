import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css"
import { MdOutlineAttachMoney } from "react-icons/md"
import { SlSpeedometer } from "react-icons/sl"
import { IoMdWallet } from "react-icons/io"
import { RiFacebookFill } from "react-icons/ri"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"
import MoneyCard from "../../Component/MoneyCard/MoneyCard";
import DashboardCard from "../../Component/DashboardCard/DashboardCard";
import { IoIosCopy } from "react-icons/io"
import { BsPersonFill } from "react-icons/bs"
import { BiLinkAlt } from "react-icons/bi"
import axios from "axios";
import { ApiPaths } from "../../API";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";
const CopyToClipboard = () => {
    var copyText = document.getElementById("RefLink");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

const Dashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const [link, setLink] = useState('https://react.mlmreadymade.com');
    const [overalltoggle, setOverallToggle] = useState("overall");
    const [walletData, setWalletData] = useState([]);
    const [selfInvest, setSelfInvest] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const [incomesData, setIncomesData] = useState([]);
    const [dashboardData, setDashboardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const UserAddress = localStorage.getItem('userAddress');
    let x = 0;
    async function GetData() {
        setLoading(true);
        try {
            axios({
                method: "get",
                url: ApiPaths.Dashboard,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Token: token,
                },
            })
                .then(function (response) {
                    console.log("Data", response);
                    if (response.data.tokenStatus == false) {
                        navigate('/')
                        setLoading(false);
                    } else {
                        setDashboardData(response.data)
                        setIncomesData(response.data.incomes)
                        setWalletData(response.data.wallets);
                        setTeamData(response.data.team);
                        setLoading(false);
                    }

                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false);
                });
            return;
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    async function GetInvestment() {
        try {
            axios({
                method: "get",
                url: ApiPaths.SelfInvestment,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token
                },
            })
                .then(function (response) {
                    console.log("selfInvest", response);
                    if (response.data.tokenStatus == false) {
                        navigate('/')
                    } else {
                        setSelfInvest(response.data.result);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                });
            return;
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        if (x === 0) {
            GetData();
            x++;
        } else {

        }
        // GetInvestment()
    }, [])

    return <>
        <React.Fragment>
            {
                loading === true ? <Loader /> : ''
            }
            <Container fluid className="main p-0">
                <section id="dashboard">
                    <div className="topDiv">
                        <div>
                            <h2>Dashboard</h2>
                            <h4>Welcome To Stake Rider</h4>
                        </div>
                        <p>Self Investment: {dashboardData?.selfInvestment}</p>
                    </div>
                    <section id="dashboardContent">
                        {walletData && (
                            <Row className="m-0">
                                {
                                    incomesData?.map((value, i) => {
                                        return (
                                            <Col md="3" className="mb-3">
                                                <DashboardCard
                                                    title={value.name}
                                                    icon={MdOutlineAttachMoney}
                                                    quantity={value.value}
                                                    todayIncome={value.today_income}
                                                    about={`Today's ${value.name}`}
                                                    currency={dashboardData.currency}
                                                />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        )}
                        <div id="overallCommissionDiv">
                            <div id="overCommDiv">
                                <h5 id={`${overalltoggle === "overall" ? "overallActive" : "noId"}`} onClick={() => setOverallToggle("overall")}>OVERALL</h5>
                                <h5 id={`${overalltoggle === "commission" ? "overallActive" : "noId"}`} onClick={() => setOverallToggle("commission")}>Team</h5>
                            </div>
                            <hr></hr>
                            <div>
                                {
                                    overalltoggle === "overall" ? <Row >
                                        {walletData && (
                                            <Row>
                                                {walletData.map((value, x) => {
                                                    return (
                                                        <Col md="3" className="mb-3">
                                                            <MoneyCard
                                                                title={value.name}
                                                                money={value.value}
                                                                icon={IoMdWallet}
                                                                currency={dashboardData.currency}
                                                            />
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        )}
                                    </Row> : <Row >
                                        {walletData && (
                                            <Row>
                                                {teamData.map((value, i) => {
                                                    return (
                                                        <Col md="3" className="mb-3">
                                                            <MoneyCard
                                                                title={value.name}
                                                                money={value.value}
                                                                icon={BsPersonFill}
                                                            />
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        )}
                                    </Row>
                                }
                            </div>
                        </div>
                        <div>
                            <Row className="p-4">
                                <Col lg="8" id="ReferralLinkCol">
                                    <div id="ReferralLink">
                                        <h5>Referral Link</h5>
                                        <div id="ReferralLinkBtn">
                                            <input id="RefLink" type="text" value={window.location.origin + "/?ref=" + UserAddress} onChange={(e) => setLink(e.target.value)} title="link"></input>
                                            <div className="dashboardLinkButtons">
                                                <i title="copy" onClick={() => CopyToClipboard()}><IoIosCopy /></i>
                                                <a href={window.location.origin + "/?ref=" + UserAddress} target="_blank"><i title="open link"><BiLinkAlt /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4" id="socialMediaCol">
                                    <p>Social Media Share<span>(Referral Links)</span></p>
                                    <Row>
                                        <Col xs="4"><i id="socialMedia"><RiFacebookFill /></i></Col>
                                        <Col xs="4"><i id="socialMedia"><TiSocialTwitter /></i></Col>
                                        <Col xs="4"><i id="socialMedia"><TiSocialLinkedin /></i></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </section>
            </Container>
        </React.Fragment>
    </>
}
export default Dashboard;