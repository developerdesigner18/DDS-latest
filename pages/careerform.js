import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = () => {
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    last_name: "",
    cover_letter: "",
    agrement: "",
    upload_resume: "",
};

const careerform = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
        console.log(contact);
    };

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const onSubmit = async (e) => {
        // e.preventDefault();
        try {
            const body = new FormData();
            const upload_img = body.append("file", image);
            const url = `http://localhost:3000/api/careerform`;
            const {
                name,
                email,
                number,
                subject,
                text,
                last_name,
                cover_letter,
                agrement,

                // upload_resume,
            } = contact;
            const payload = {
                name,
                email,
                number,
                subject,
                text,
                last_name,
                cover_letter,
                agrement,
                upload_img,
                // upload_resume,
            };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <PageBanner pageTitle="Career" />
            <div className="career-form-main container">
                <h3 className="career-title">Submit Your Application</h3>
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group quote">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={contact.name}
                                    onChange={handleChange}
                                    ref={register({
                                        required: true,
                                    })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {errors.name && "Name is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group quote">
                                <label>Last name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    className="form-control"
                                    value={contact.last_name}
                                    onChange={handleChange}
                                    ref={register({
                                        required: true,
                                    })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {errors.last_name &&
                                        "Last name is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group quote">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="number"
                                    className="form-control"
                                    value={contact.number}
                                    onChange={handleChange}
                                    ref={register({
                                        required: true,
                                    })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {errors.number && "Number is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group quote">
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    value={contact.email}
                                    onChange={handleChange}
                                    ref={register({
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                    })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {errors.email && "Email is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group quote">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    value={contact.address}
                                    onChange={handleChange}
                                    ref={register({
                                        required: true,
                                    })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {errors.number && "Address is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group quote">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    value={contact.subject}
                                    onChange={handleChange}
                                    ref={register({
                                        required: true,
                                    })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {errors.subject && "Subject is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Cover Letter</label>
                                <textarea
                                    name="cover_letter"
                                    cols="30"
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="form-control"
                                    value={contact.cover_letter}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{ display: "block" }}
                                >
                                    {errors.cover_letter &&
                                        "Cover Letter is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Upload Resume</label>
                                <input
                                    type="file"
                                    name="upload_resume"
                                    placeholder="Write your message..."
                                    className="form-control"
                                    // value={contact.upload_resume}
                                    onChange={uploadToClient}
                                    ref={register({ required: true })}
                                    style={{ height: "34px" }}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{ display: "block" }}
                                >
                                    {errors.upload_resume &&
                                        "Upload Resume is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group quote">
                                <label className="agreement-box">
                                    <input
                                        type="checkbox"
                                        name="agrement"
                                        className="form-control"
                                        value={contact.agrement}
                                        onChange={handleChange}
                                        ref={register({
                                            required: true,
                                        })}
                                    />
                                    I have to read and agreed to teams &
                                    condition.
                                </label>

                                <div
                                    className="invalid-feedback"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {errors.agrement && "Agrement is required."}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <button type="submit" className="default-btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default careerform;
