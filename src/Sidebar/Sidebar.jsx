import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Images/logo.png";
import Logosmall from "../Images/logosmall.png";
import { AiFillHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiLetterBomb } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoneyBillAlt, FaMoneyCheckAlt } from "react-icons/fa";
import NavPages from "../NavPages";
import ProfileImg from "./../Images/profileImg.png";
import { useNavigate } from "react-router-dom";
import Change from "../Common/StringToSub";
import useWindowDimensions from "../Common/useWindowDimensions";
const Sidebar = () => {
  const navigate = useNavigate();
  const userAddress = localStorage.getItem('userAddress');
  const [genelogyDropdown, setGenelogyDropdown] = useState("none");
  const [payoutReportDropdown, setPayoutReportDropdown] = useState("none");
  // ----------------------------Dropdown Icons --------------------------------------
  const [genelogyDropdownIcon, setGenelogyDropdownIcon] = useState("0deg");
  const { height, width } = useWindowDimensions();
  const [payoutReportDropdownIcon, setPayoutReportDropdownIcon] =
    useState("0deg");
  const [toggle, setToggle] = useState("0");
  const Logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (width < 900) {
      setToggle('-260px')
    } else {
      setToggle('0px')
    }
  }, [width])

  return (
    <React.Fragment>
      <Container fluid className="p-0">
        <div id="sidebar-wrapper" className="" style={{ left: toggle }}>
          <div id="sidebarTopDiv">
            <Link to='/dashboard' className="logo">

              <img src={Logo} alt="logo.png" />
            </Link>
          </div>
          <section style={{ padding: "5px", marginTop: "80px" }}>
            <div className="logowithtext">
              <img src={Logosmall} alt="logo.png" />
              <h3 className="m-0">
                User Name <div></div>
              </h3>
              <p>{Change(userAddress)} </p>
            </div>
            <NavLink to="" end activeClassName="active" >
              <div
                className='items'>
                <i>
                  <AiFillHome />
                </i>
                <h4 className="m-0">Dashboard</h4>
              </div>
            </NavLink>
            <NavLink to="deposit_withdrawal" activeClassName="active" >
              <div
                className='items'>
                <i>
                  <FaMoneyBillAlt />
                </i>
                <h4 className="m-0">Deposit & Withdrawal</h4>
              </div>
            </NavLink>

            {/* --------------------------------My Genelogy--------------------------------- */}
            <div
              className="dropdownitems"
              onClick={() =>
                genelogyDropdown === "none"
                  ? (setGenelogyDropdown("block"),
                    setGenelogyDropdownIcon("180deg"))
                  : (setGenelogyDropdown("none"),
                    setGenelogyDropdownIcon("0deg"))
              }
            >
              <div
                className={`head items`}
              >
                <i>
                  <IoIosPeople />
                </i>
                <h4 className="m-0">My Genelogy</h4>
                <i
                  className="dropicon"
                  style={{ transform: `rotate(${genelogyDropdownIcon})` }}
                >
                  <BsChevronDown />
                </i>
              </div>
              <div className="dropdown" style={{ display: genelogyDropdown }}>
                <NavLink to="direct" activeClassName="active">
                  <div
                    className="items">
                    <i>
                      <GiLetterBomb />
                    </i>
                    <h4 className="m-0">Direct</h4>
                  </div>
                </NavLink>
                <NavLink to="generation">
                  <div
                    className="items">
                    <i>
                      <CgProfile />
                    </i>
                    <h4 className="m-0">Generation</h4>
                  </div>
                </NavLink>
              </div>
            </div>
            {/* --------------------------------------Payout Report--------------------------------------*/}
            <div
              className="dropdownitems"
              onClick={() =>
                payoutReportDropdown === "none"
                  ? (setPayoutReportDropdown("block"),
                    setPayoutReportDropdownIcon("180deg"))
                  : (setPayoutReportDropdown("none"),
                    setPayoutReportDropdownIcon("0deg"))
              }
            >
              <div
                className={`head items`}
              >
                <i>
                  <FaMoneyCheckAlt />
                </i>
                <h4 className="m-0">Payout Report</h4>
                <i
                  className="dropicon"
                  style={{ transform: `rotate(${payoutReportDropdownIcon})` }}
                >
                  <BsChevronDown />
                </i>
              </div>
              <div
                className="dropdown"
                style={{ display: payoutReportDropdown }}
              >
                <NavLink to="roi_income">
                  <div
                    className="items">
                    <i>
                      <GiLetterBomb />
                    </i>
                    <h4 className="m-0">ROI Income</h4>
                  </div>
                </NavLink>
                <NavLink to="level-income">
                  <div
                    className="items">
                    <i>
                      <GiLetterBomb />
                    </i>
                    <h4 className="m-0">Level Income</h4>
                  </div>
                </NavLink>
                <NavLink to="roi_level_income">
                  <div
                    className="items">
                    <i>
                      <GiLetterBomb />
                    </i>
                    <h4 className="m-0">ROI Level Income</h4>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* -----------------------------------------------------------------------------------------------*/}
            <NavLink to="orders" activeClassName="active">
              <div
                className="items"
              >
                <i>
                  <BsFillCartCheckFill />
                </i>
                <h4 className="m-0">Orders</h4>
              </div>
            </NavLink>


            <div className="items" onClick={Logout}>
              <i>
                <IoIosLogOut />
              </i>
              <h4 className="m-0">Logout</h4>
            </div>
          </section>
        </div>
        <div
          id="page-content"
          className="p-0"
          style={{
            background: "#F4F7FC",
            minHeight: "100vh",
            marginLeft: width > 900 ? toggle === "-260px" ? "0px" : "260px" : '0px',
          }}
        >
          <div className="navMain">
            <div className="topNavbar">
              <i
                onClick={() =>
                  toggle === "-260px" ? setToggle("0") : setToggle("-260px")
                }
                style={{ cursor: "pointer" }}
              ><GiHamburgerMenu />
              </i>
              <div
              // style={{ marginRight: toggle === "-260px" ? "0px" : "260px" }}
              >

              </div>
            </div>
          </div>

          <div style={{ marginTop: "80px" }}>{<NavPages />}</div>
        </div>
      </Container>
    </React.Fragment>
  );
};
// const Sidebar = withRouter(Side);
export default Sidebar;
