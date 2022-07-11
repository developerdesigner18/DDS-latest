import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
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
const GetAQuote = () => {
    // Form initial state
    const INITIAL_STATE = {
        name: "",
        email: "",
        number: "",
        subject: "",
        text: "",
    };
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
        console.log(contact);
    };

    const onSubmit = async (e) => {
        // e.preventDefault();
        try {
            const url = `http://localhost:3000/api/quoteform`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
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
            <div className="getAQuote-holder">
                <div className="container servicecard" id="quote">
                    <div className="row quote">
                        <div className="col-lg-5 col-md-12">
                            <div className="solution-image">
                                <img
                                    src="/images/solutions/quote.png"
                                    alt="image"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content service">
                                <div className="content">
                                    <span className="subheading">
                                        Get A Free Quote
                                    </span>
                                    <h2>Get quote from us</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                    <div>
                                        <form
                                            id="contactForm"
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group quote">
                                                        <label>Full Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            value={contact.name}
                                                            onChange={
                                                                handleChange
                                                            }
                                                            ref={register({
                                                                required: true,
                                                            })}
                                                        />
                                                        <div
                                                            className="invalid-feedback"
                                                            style={{
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            {errors.name &&
                                                                "Name is required."}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group quote">
                                                        <label>Website</label>
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            className="form-control"
                                                            value={
                                                                contact.email
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            ref={register({
                                                                required: true,
                                                                pattern:
                                                                    /^\S+@\S+$/i,
                                                            })}
                                                        />
                                                        <div
                                                            className="invalid-feedback"
                                                            style={{
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            {errors.email &&
                                                                "Email is required."}
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
                                                            value={
                                                                contact.number
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            ref={register({
                                                                required: true,
                                                            })}
                                                        />
                                                        <div
                                                            className="invalid-feedback"
                                                            style={{
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            {errors.number &&
                                                                "Number is required."}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group quote">
                                                        <label>Email</label>
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            className="form-control"
                                                            value={
                                                                contact.subject
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            ref={register({
                                                                required: true,
                                                            })}
                                                        />
                                                        <div
                                                            className="invalid-feedback"
                                                            style={{
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            {errors.subject &&
                                                                "Subject is required."}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <button
                                                        type="submit"
                                                        className="default-btn"
                                                    >
                                                        Get A Quote
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetAQuote;
