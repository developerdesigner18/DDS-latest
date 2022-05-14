import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const services = [
    {
        title: "Ecommerce, Retail & B2B",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature.
            </p>,
        ],
        image: "/images/services/services-img1.png",
    },
];

const SingleServices = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Solutions" />

            <div className="overview-area ptb-100">
                <div className="container">
                    {services.map(({ title, description, image }, index) => (
                        <div key={index} className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">
                                        Our Services
                                    </span>
                                    <h2>{title}</h2>
                                    {description}
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={image} alt="image" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <a className="default-btn">View All</a>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default SingleServices;
