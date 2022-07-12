import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

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

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
    companyname: "",
    website: "",
    country: "",
    service: "",
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
    };

    const onSubmit = async (e) => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const {
                name,
                email,
                website,
                service,
                country,
                companyname,
                number,
                subject,
                text,
            } = contact;
            const payload = {
                name,
                companyname,
                website,
                email,
                number,
                subject,
                text,
                country,
                service,
            };
            await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {}
    };

    return (
        <div className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Get in Touch</span>
                    <h2>
                        Ready to Get Started?<span className="overlay"></span>
                    </h2>
                    <p>
                        Your email address will not be published. Required
                        fields are marked *
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-form">
                            <form
                                id="contactForm"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
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
                                                style={{ display: "block" }}
                                            >
                                                {errors.name &&
                                                    "Name is required."}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input
                                                type="text"
                                                name="companyname"
                                                className="form-control"
                                                value={contact.companyname}
                                                onChange={handleChange}
                                                ref={register({
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.companyname &&
                                                    "Companyname is required."}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Website</label>
                                            <input
                                                type="text"
                                                name="website"
                                                className="form-control"
                                                value={contact.website}
                                                onChange={handleChange}
                                                ref={register({
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.website &&
                                                    "Website is required."}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
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
                                                style={{ display: "block" }}
                                            >
                                                {errors.number &&
                                                    "Number is required."}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
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
                                                style={{ display: "block" }}
                                            >
                                                {errors.email &&
                                                    "Email is required."}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input
                                                type="text"
                                                name="country"
                                                className="form-control"
                                                value={contact.country}
                                                onChange={handleChange}
                                                ref={register({
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.country &&
                                                    "Country is required."}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group contact-select-holder">
                                            <label>Required Service</label>

                                            <select
                                                onChange={handleChange}
                                                name="service"
                                            >
                                                <option hidden>
                                                    ---Select Service---
                                                </option>
                                                <option value="webdevelopment">
                                                    Web Development
                                                </option>
                                                <option value="reactnative">
                                                    React Native
                                                </option>
                                                <option value="php">
                                                    PHP Developer
                                                </option>
                                                <option value="laravel">
                                                    Laravel
                                                </option>
                                            </select>
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.service &&
                                                    "Service is required."}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
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
                                                style={{ display: "block" }}
                                            >
                                                {errors.subject &&
                                                    "Subject is required."}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea
                                                name="text"
                                                cols="30"
                                                rows="5"
                                                className="form-control"
                                                value={contact.text}
                                                onChange={handleChange}
                                                ref={register({
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.text &&
                                                    "Text body is required."}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <button
                                            type="submit"
                                            className="default-btn"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
