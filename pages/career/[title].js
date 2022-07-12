import React, { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { accordionData } from "../../data/career";
import { createCareerTitle } from "../../utils/utils";

const CareerAccordian = ({ data }) => {

    return (
        <>
            <div className="accordion-main">
                <div className="container p-0">
                    <div className="accordian-content">
                        <div className="p-3">
                            <Link href="/career">
                                <button className="accordian-btn career according-btn-text-holder"
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
                                    {data?.title}
                                </h1>
                                <Link href="/careerform">
                                    <a className="default-btn">Apply Now</a>
                                </Link>
                            </div>
                            <hr />
                            <div className="p-2 carrer-according-li-holder">
                                <h6 className="pb-1">
                                    Number of Positions : {data.numPostion}{" "}
                                </h6>
                                <h6 className="pb-1">
                                    Required Experience : {data.experience}
                                </h6>
                                <h5 className="pt-3 pb-3">Job Brief</h5>
                                <p>
                                    We are looking to hire a skilled WordPress
                                    Frontend Developer to implement attractive
                                    and functional websites for our clients. You
                                    will be responsible for both implementation
                                    of WordPress themes and plugins as well as
                                    site integration and security updates.
                                </p>
                                <h5 className="pt-2 pb-3">
                                    Job Responsibilities
                                </h5>
                                <ul>
                                    {data.responsibilities.map((data) => {
                                        return <li>{data}</li>;
                                    })}
                                </ul>
                                <h5 className="pt-2 pb-3">Requirements</h5>
                                <ul>
                                    {data.requirements.map((data) => {
                                        return <li>{data}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="career-info container">
                    <p>
                        To know more about other amazing opportunities, email us
                        at
                        <span> contact@daydreamsoft.com</span>
                    </p>
                    <p>
                        Get a taste of what it’s like to work with Daydreamsoft.
                        Find out what <span> Life at Daydreamsoft </span> is all
                        about! Visit our
                        <span> LinkedIn profile</span> to know about the latest
                        from our turf
                    </p>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps(context) {
    const title = accordionData.find(
        (data) =>
            createCareerTitle(data.title) ===
            context.params.title
    );
    return {
        props: {
            data: title,
        },
    };
}

export async function getStaticPaths() {
    const paths = accordionData.map((data) => ({
        params: {
            title: createCareerTitle(data.title),
        },
    }));

    return {
        paths,
        fallback: true,
    };
}
export default CareerAccordian;
