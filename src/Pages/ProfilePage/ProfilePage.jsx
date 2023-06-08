import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileImg from "./../../Images/profileImg.png";
import { useDispatch, useSelector } from "react-redux";
import { ApiPaths } from "../../API";
import axios from "axios";
// import { setProfileData } from "../../Reducer/ProfileSlice";
const ProfilePage = () => {
  const [profileData, setprofileData] = useState([]);
  const [colorActive, setColorActive] = useState("#555");
  const token = localStorage.getItem('authToken')
  // const GetData = async () => {
  //   try {
  //     console.log("token", localStorage.getItem("AuthToken"));
  //     const token = localStorage.getItem("AuthToken");
  //     const response = await fetch("http://192.168.1.16:3000/getprofile", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         Authorization: token,
  //       },
  //     });
  //     var data = await response.json();
  //     console.log(data);
  //     setprofileData(data);
  //     if (data.result.status === "Active") {
  //       setColorActive("green");
  //     } else {
  //       setColorActive("red");
  //     }
  //     console.log("data is=", profileData.result.email);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   GetData();
  // }, []);

  async function GetData() {
    try {
      axios({
        method: "get",
        url: ApiPaths.GetProfile,
        // data: {
        //   "user_name": userId,
        //   "password": userPassword
        // },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      })
        .then(function (response) {
          console.log("Data", response);
          setprofileData(response.data)
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
    GetData()
  }, [])

  return (
    <React.Fragment>
      <Container className="mt-4">
        <div className="pagePath">
          <p className="m-0">
            Home / My Account / <span>Profile</span>
          </p>
        </div>
        <div className="editProfileCard">
          <div className="d-flex">
            <img src={ProfileImg} alt="logo.png" />
            <div className="m-3" style={{ marginTop: "20px" }}>
              <h3>{profileData.result?.name}</h3>
              <p>
                Status:{" "}
                <span style={{ color: colorActive }}>
                  {profileData.result?.status}
                </span>
              </p>
            </div>
          </div>
          <button>Edit Profile</button>
        </div>

        <div className="profileUserDetail">
          <Row>
            <Col lg="4">
              <ul className="p-0">
                <li>
                  <b>Status :</b>
                  {profileData.result?.status}
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <ul className="p-0">
                <li>
                  <b>Sponsor Name : </b>
                  {profileData.result?.sponsor_Name}
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <ul className="p-0">
                <li>
                  <b>Date of Joining :</b>
                  {profileData.result?.joining_date}
                </li>
              </ul>
            </Col>

          </Row>
          {/* <Row>
                        <Col lg="6">
                            <ul className="p-0">
                                <li><b>Sponsor :</b>{ProfileData.sponsor_id}</li>
                                <li><b>Name :</b>{ProfileData.name}</li>
                                <li><b>Email :</b>{ProfileData.email}</li>
                                <li><b>Status :</b>{ProfileData.status}</li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <ul className="p-0">
                                <li><b>Sponsor Name : </b>{ProfileData.sponsor_Name}</li>
                                <li><b>Mobile :</b> {ProfileData.phone}</li>
                                <li><b>Date if joining :</b>{ProfileData.joining_date}</li>
                                <li><b>Activation Date :</b>{ProfileData.Activation_date}</li>
                            </ul>
                        </Col>
                    </Row> */}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ProfilePage;
