import { useTheme } from "next-themes";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <PageBanner pageTitle="Contact Us" />

            <div className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className="bx bx-map"></i>
                                </div>
                                <div className="icon">
                                    <i
                                        className={`bx bx-map ${theme == "dark"
                                            ? "icon-holder-dark"
                                            : "icon-holder-light"
                                            }`}
                                    ></i>
                                </div>
                                <h3>Our Address</h3>
                                <p>
                                    408 , Marvella Business hub, Pal HaziraRoad,Pal-
                                    Umra Bridge, opp. Annapurna Temple,Adajan
                                    Gam, Adajan, Surat, Gujarat 395009

                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className="bx bx-phone-call "></i>
                                </div>
                                <div className="icon">
                                    <i
                                        className={`bx bx-phone-call ${theme == "dark"
                                            ? "icon-holder-dark"
                                            : "icon-holder-light"
                                            }`}
                                    ></i>
                                </div>
                                <h3>Contact</h3>
                                <p>
                                    Mobile:{" "}
                                    <a href="tel:+917573933439">
                                        (+91) 7573933439
                                    </a>
                                </p>
                                <p>
                                    E-mail:{" "}
                                    <a href="mailto:hello@mibix.com">
                                        contact@daydreamsoft.com

                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className="bx bx-time-five"></i>
                                </div>
                                <div className="icon">
                                    <i
                                        className={`bx bx-time-five ${theme == "dark"
                                            ? "icon-holder-dark"
                                            : "icon-holder-light"
                                            }`}
                                    ></i>
                                </div>
                                <h3>Hours of Operation</h3>
                                <p>Monday - Friday: 09:00 - 20:00</p>
                                <p>Saturday: 09.00 - 13.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />

            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"></iframe>
            </div>
        </>
    );
};

export default Contact;
