import React, { useState } from "react";
import BlogSidebarNew from "../Blog/BlogSidebar";
import Link from "next/link";

const DevelopmentViewMain = () => {
    const BlogData = [
        {
            blogimg: "/images/web-development-view/customphp.png",
            subtitile: "Custom PHP Development",
            title: "We specialize in development with following listed",
            date: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
        },
        {
            blogimg: "/images/web-development-view/cakephp.png",
            subtitile: "Cake PHP Development",
            title: "We specialize in development with following listed",
            date: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
        },
        {
            blogimg: "/images/web-development-view/codeigniter.png",
            subtitile: "Codeigniter Development",
            title: "We specialize in development with following listed",
            date: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 2",
        },
    ];
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide"
                    style={{ cursor: "grab" }}
                >
                    {isReadMore ? "... read more" : " show less"}
                </span>
            </p>
        );
    };
    return (
        <>
            <div className="blog-area bg-f9f9f9 ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="development-result-main">
                                        <p>
                                            Results for:
                                            <b> Web Development </b>
                                        </p>
                                    </div>
                                    {BlogData.map((elm) => {
                                        return (
                                            <>
                                                <div className="single-blog-post p-30">
                                                    <div className="image">
                                                        <Link href="/singleblog">
                                                            <a className="d-block">
                                                                <img
                                                                    src={
                                                                        elm.blogimg
                                                                    }
                                                                    alt="image"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="content">
                                                        <p> {elm.subtitile} </p>
                                                        <h3>
                                                            <Link href="/singleblog">
                                                                <a>
                                                                    {elm.title}
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex align-items-center">
                                                            <div className="info">
                                                                <span>
                                                                    <ReadMore>
                                                                        {
                                                                            elm.date
                                                                        }
                                                                    </ReadMore>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                    <a className="default-btn development-view">
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebarNew />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevelopmentViewMain;
