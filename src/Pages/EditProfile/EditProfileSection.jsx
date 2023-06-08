import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, } from "react-bootstrap";
import { CallApi } from '../../Common/CallApi';
const EditProfileSection = () => {
    const [file, setFile] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userid, setUserid] = useState('');
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let newErrors = {};
        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is not valid';
        }
        if (!phone) {
            newErrors.phone = 'Mobile number is required';
        } else if (phone.length !== 10) {
            newErrors.phone = 'Enter valid mobile number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const GetData = async () => {
        try {
            console.log("token", localStorage.getItem("AuthToken"));
            const token = localStorage.getItem("AuthToken");
            const response = await fetch('http://192.168.1.16:3000/getprofile', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": token,
                }
            })
            var data = await response.json();
            console.log(data);
            if (data.status) {
                setName(data.result.name);
                setEmail(data.result.email);
                setFile(data.result.profile_pic);
                setPhone(data.result.phone);
                setUserid(data.result.user_Id);
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("AuthToken");
        const url = "http://192.168.1.16:3000/updateProfile";
        var editProfileBody = {
            name: name,
            email: email,
            file: file,
            phone: phone
        }
        if (validateForm()) {
            const myData = await CallApi(token, url, editProfileBody);
            console.log(myData)
        }
    }
    useEffect(() => {
        GetData();
    }, [])

    return (
        <>
            <React.Fragment>
                <section className="formItems">
                    <div className="uploadImage">
                        <img src={file} alt="logo.png" />
                        <div className='chooseFile'>
                            <label>
                                <span>Upload Profile</span>
                                <input type="file" onChange={(e) => (setFile(URL.createObjectURL(e.target.files[0])), console.log({ file }))} />
                            </label>
                        </div>
                    </div>
                    <div className="form">
                        <Row>
                            <Col lg="2"></Col>
                            <Col lg="8">
                                <form onSubmit={handleSubmit} className="registerForm">
                                    <div>
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => (setName(e.target.value))} />
                                        {errors.name && <div className="formError">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            value={userid} />
                                    </div>
                                    <div>
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && <div className="formError">{errors.email}</div>}
                                    </div>
                                    <div>
                                        <label>Contact Number</label>
                                        <input
                                            type="number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)} />
                                        {errors.phone && <div className="formError">{errors.phone}</div>}
                                    </div>
                                    <button onClick={handleSubmit} className='save'>Save</button>
                                    <a className='cancel'>Cancel</a>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        </>
    )
}

export default EditProfileSection