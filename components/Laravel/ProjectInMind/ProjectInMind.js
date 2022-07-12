import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
// import baseUrl from "../../utils/baseUrl";

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
};
const ProjectInMind = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
    };
    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    };

    const onSubmit = async (e) => {
        // e.preventDefault();
        try {
            const url = `http://localhost:3000/api/projectform`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="project-inMind pb-100">
            <div className="container">
                <div className="project-section-title">
                    <h2>Have a Project in Mind?</h2>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="project-inMind-form">
                            <form
                                id="contactForm"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label-holder">
                                                Full Name
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
                                            </label>

                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.name &&
                                                    "Name is required."}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label-holder">
                                                Email
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
                                            </label>
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.email &&
                                                    "Email is required."}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label-holder">
                                                Phone
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
                                            </label>
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.email &&
                                                    "Email is required."}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label-holder">
                                                Requirements
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
                                            </label>
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                {errors.text &&
                                                    "Text body is required."}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkbox-send-btn">
                                        <div className="col-lg-12 col-sm-12 checkbox-holder">
                                            <input
                                                type="checkbox"
                                                id="agree"
                                                onChange={checkboxHandler}
                                                style={{
                                                    backgroundColor: "none",
                                                }}
                                                className="checkboxInput-Holder"
                                            />
                                            <label htmlFor="agree">
                                                I have to read and agreeed to
                                                the terms & conditions.
                                            </label>
                                        </div>

                                        <div className="col-lg-12 col-sm-12">
                                            <button
                                                type="submit"
                                                className="send-btn-holder"
                                            >
                                                Send Message
                                            </button>
                                        </div>
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

export default ProjectInMind;
