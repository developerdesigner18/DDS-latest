import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const WebDevelopmentAreas = () => {
    const { theme } = useTheme();

    const webDevelopmentAreaData = [
        {
            webareaimg: "/images/web-development/area1.png",
            title: "Custom Web Development",
            description:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
            webareaimg: "/images/web-development/area2.png",
            title: "Front-End Development",
            description:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
            webareaimg: "/images/web-development/area3.png",
            title: "Open source Development",
            description:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
    ];
    return (
        <div>
            <div className="featured-services-area pt-100 pb-70">
                <div className="container">
                    <div className="technology-area-heading ">
                        <h2>Web Development Areas We Expert In</h2>
                    </div>
                    <div className="row">
                        {webDevelopmentAreaData.map((data) => {
                            return (
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="single-featured-services-box area-holder">
                                        <div className="area-image-holder">
                                            {/* <i className="flaticon-megaphone"></i> */}
                                            {theme == "dark" && (
                                                <img
                                                    src={data.webareaimg}
                                                    alt="image"
                                                    className="area-image-holder-dark"
                                                />
                                            )}
                                            {theme == "light" && (
                                                <img
                                                    src={data.webareaimg}
                                                    alt="image"
                                                />
                                            )}
                                        </div>
                                        <h4>
                                            <Link href="/#">
                                                <a>{data.title}</a>
                                            </Link>
                                        </h4>
                                        <p>{data.description}</p>
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

export default WebDevelopmentAreas;
