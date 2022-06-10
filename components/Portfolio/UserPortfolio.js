import React, { useState } from "react";
import Link from "next/link";
import UserData from "./UserData";

const UserPortfolio = () => {
    return (
        <>
            <div className="portfolio-area ptb-100">
                <div className="container">
                    <div className="row">
                        {UserData.map((elm) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-portfolio-box">
                                            <Link href="/single-portfolio">
                                                <a className="image d-block">
                                                    <img
                                                        src={elm.userImg}
                                                        alt="image"
                                                    />
                                                </a>
                                            </Link>

                                            <div className="content">
                                                <p>{elm.content}</p>

                                                <Link href="/single-portfolio">
                                                    <a className="link-btn">
                                                        <i className="flaticon-next-button"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <Link href="/portfolioview">
                        <span className="default-btn portfolio">View More</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default UserPortfolio;
