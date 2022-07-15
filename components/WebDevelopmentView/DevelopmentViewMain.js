import { useState } from "react";
import Link from "next/link";
import BlogSidebar from "../Blog/BlogSidebar";
import { blogData } from "../../data/blogData";

const DevelopmentViewMain = () => {
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
            <div className="blog-area  ptb-100">
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
                                    {blogData.map((elm) => {
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
                                                    <div className="content development-view-holder">
                                                        <p> {elm.subtitile} </p>
                                                        <h3>
                                                            <Link href="/singleblog">
                                                                <a>
                                                                    {elm.title}
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex align-items-center">
                                                            <div className="info readmore-content-holder">
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
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevelopmentViewMain;
