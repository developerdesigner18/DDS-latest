import React from "react";
const WebDevelopmentServices = () => {
    const webDevelopmentData = [
        {
            webimg: "/images/web-development/service1.png",
            title: "E-Commerce Website Development",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            webimg: "/images/web-development/service2.png",
            title: "Open Source(CMS) development",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            webimg: "/images/web-development/service3.png",
            title: "Online Portal Development",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            webimg: "/images/web-development/service4.png",
            title: "Website Maintenance",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            webimg: "/images/web-development/service5.png",
            title: "CRM Applications Development",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            webimg: "/images/web-development/service6.png",
            title: "Social Networking Portal Development",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];
    return (
        <div>
            <div className="blog-area bg-f9f9f9 ptb-100">
                <div className="container">
                    <h2 className="webservice-heading">
                        Our Web Development Services Include
                    </h2>
                    <div className="row">
                        {webDevelopmentData.map((data) => {
                            return (
                                <div className="col-lg-4 col-md-6">
                                    <div className="serviceCard">
                                        <div className="content">
                                            <div className="d-flex align-items-center ">
                                                <img
                                                    src={data.webimg}
                                                    alt="image"
                                                    className="serviceCardImg"
                                                />
                                                <div className="serviceCardContent">
                                                    <h5>{data.title}</h5>
                                                    <span>
                                                        {data.description}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevelopmentServices;
