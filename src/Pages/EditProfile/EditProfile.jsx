import './EditProfile.css'
import { Container, Row, Col, Card, } from 'react-bootstrap';
import React, { useState } from 'react';
import Two from './../../Images/two.png'
import { BsCheckCircle } from "react-icons/bs";
import EditProfileSection from './EditProfileSection';
import { CallApi } from '../../Common/CallApi';
import AlertMessage from '../../Component/AlertMessage/AlertMessage';
import { BiErrorCircle } from "react-icons/bi";
const EditProfile = () => {
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    }
    const [page, setPage] = useState('page1');
    const [active, setActive] = useState('true');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('null')
    const [passwordData, setPasswordData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });
    const handleChange = (event) => {
        setPasswordData({
            ...passwordData,
            [event.target.name]: event.target.value
        });
    }
    const validateForm = () => {
        let newErrors = {};
        if (!passwordData.password) {
            newErrors.password = 'Old Password is required';
        }
        if (!passwordData.newPassword) {
            newErrors.newPassword = 'New Password is required';
        } else if (passwordData.newPassword.length < 6) {
            newErrors.newPassword = 'Password should be at least 6 character';
        }
        if (!passwordData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(passwordData)
        const token = localStorage.getItem("AuthToken");
        const url = "http://192.168.1.16:3000/updatepassword";
        if (validateForm()) {
            const myData = await CallApi(token, url, passwordData);
            console.log(myData.message)
            if (myData.status) {
                setSuccess("true");
                setPasswordData({
                    password: '',
                    newPassword: '',
                    confirmPassword: ''
                })
                let delayres = await delay(3000);
                setSuccess("null");

            } else {
                setSuccess("false");
                let delayres = await delay(3000);
                setSuccess("null");
            }
        }
    }
    return (
        <React.Fragment>
            <Container>
                <section id='editProfile'>
                    <div id='profileImage' className='d-flex' style={{ justifyContent: 'center' }}>
                        {/* <h1 className='text-center'>Edit Profile</h1> */}
                    </div>
                    <div id='tabs' className='d-flex'>
                        <p id='infoTab' className={`${active === 'true' ? 'userActive' : 'notactive'}`} style={{ cursor: 'pointer' }} onClick={() => (setPage('page1'), setActive('true'))}>User Information</p>
                        <p id='passTab' className={`${active != 'true' ? 'userActive' : 'notactive'}`} style={{ cursor: 'pointer' }} onClick={() => (setPage('page2'), setActive('false'))}>Change Password</p>
                    </div>
                    <section id='editProfileContent'>
                        {
                            // ----------------------Tab change code here--------------------------
                            page === 'page1' ? <EditProfileSection /> : <section>

                                <div className='form'>
                                    <Row>
                                        <Col lg='6' id='passImage'>
                                            <img src={Two} alt='' />
                                        </Col>
                                        <Col lg='6' style={{ margin: 'auto' }}>
                                            <form onSubmit={handleSubmit} className="registerForm">
                                                <div id='changePassword'>
                                                    <div>
                                                        <label>
                                                            Old Password
                                                        </label>
                                                        <input
                                                            type='text'
                                                            name='password'
                                                            value={passwordData.password}
                                                            onChange={handleChange}
                                                        />
                                                        {errors.password && <div className="formError">{errors.password}</div>}
                                                    </div>
                                                    <div>
                                                        <label>
                                                            New Password
                                                        </label>
                                                        <input
                                                            type='text'
                                                            name='newPassword'
                                                            value={passwordData.newPassword}
                                                            onChange={handleChange}
                                                        />
                                                        {errors.newPassword && <div className="formError">{errors.newPassword}</div>}
                                                    </div>
                                                    <div>
                                                        <label>
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            type='email'
                                                            name='confirmPassword'
                                                            value={passwordData.confirmPassword}
                                                            onChange={handleChange}
                                                        />
                                                        {errors.confirmPassword && <div className="formError">{errors.confirmPassword}</div>}
                                                    </div>
                                                    <button type='submit' className='save' onClick={handleSubmit}>Update</button>
                                                    <a onClick={() => setPasswordData({
                                                        password: '',
                                                        newPassword: '',
                                                        confirmPassword: ''
                                                    })} className='cancel'>Cancel</a>
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </div>
                            </section>}
                    </section>
                </section>
                {success === 'true' ? <AlertMessage
                    msg="password updated successfully"
                    icon={<BsCheckCircle />}
                /> : success === 'false' ? <AlertMessage
                    msg="old password dose note match"
                    bgcolor="pink"
                    color="red"
                    hrcolor="red"
                    icon={<BiErrorCircle />}
                /> : ''}    
            </Container>
        </React.Fragment>
    )
}

export default EditProfile
