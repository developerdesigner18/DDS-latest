import React, { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const CareerAccordian = ({ setShowContent, contantData, setCareer }) => {
    const [isshow, setIsShow] = useState(false);
    const hadleShow = () => {
        setIsShow(!isshow);
    };
    const { theme, setTheme } = useTheme();
    return (
        <>
            <div className="accordian-main">
                <div className="p-3">
                    <Link href="/career">
                        <button
                            onClick={() =>
                                // setCareer(false)
                                {
                                    setShowContent(false);
                                    localStorage.setItem("toggle", false);
                                }
                            }
                            className="accordian-btn career according-btn-text-holder"
                        >
                            <i className="fa-solid fa-chevron-left "></i>
                            Design
                        </button>
                    </Link>

                    <div className="accordian-button-holder">
                        <h1
                            className="p-2"
                            style={{ color: "var(--mainDarkColor)" }}
                        >
                            {contantData?.title}
                        </h1>
                        <Link href="/career-form">
                            <a className="default-btn">Apply Now</a>
                        </Link>
                    </div>
                    <hr />
                    <div className="p-2 carrer-according-li-holder">
                        <h6 className="pb-1">
                            Number of Positions : {contantData?.numPostion}{" "}
                        </h6>
                        <h6 className="pb-1">
                            Required Experience : {contantData?.experience}
                        </h6>
                        <h5 className="pt-3 pb-3">Job Brief</h5>
                        <p>
                            We are looking to hire a skilled WordPress Frontend
                            Developer to implement attractive and functional
                            websites for our clients. You will be responsible
                            for both implementation of WordPress themes and
                            plugins as well as site integration and security
                            updates.
                        </p>
                        <h5 className="pt-2 pb-3">Job Responsibilities</h5>
                        <ul>{contantData?.responsibilities}</ul>
                        <h5 className="pt-2 pb-3">Requirements</h5>
                        <ul>{contantData?.requirements}</ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareerAccordian;
