import React from "react";
import BlogSidebarNew from "../Blog/BlogSidebarNew";
import BlogComments from "./BlogComments";
import BlogSidebar from "./BlogSidebar";

const SingleBlogMain = () => {
    return (
        <>
            <div className="blog-details-area bg-f9f9f9 ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img
                                        src="/images/blog/blog.png"
                                        alt="image"
                                    />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="bx bx-folder-open"></i>
                                                <span>Category</span>
                                                <a href="#">Fashion</a>
                                            </li>
                                            <li>
                                                <i className="bx bx-group"></i>
                                                <span>View</span>
                                                813,454
                                            </li>
                                            <li>
                                                <i className="bx bx-calendar"></i>
                                                <span>Last Updated</span>
                                                Jun 15, 2022
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>Online blogs You should Read</h3>

                                    <p>
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old.
                                    </p>

                                    <p>
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney College in
                                        Virginia, looked up one of the more
                                        obscure Latin words, consectetur.
                                    </p>

                                    <blockquote className="wp-block-quote">
                                        <p>
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout.
                                        </p>

                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img
                                                    src="/images/blog/blog.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img
                                                    src="/images/blog/creative.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img
                                                    src="/images/blog/social.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </li>
                                    </ul>

                                    <p>
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod labore
                                        et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor
                                        in reprehenderit in sed quia non numquam
                                        eius modi tempora incidunt ut labore et
                                        dolore magnam aliquam quaerat
                                        voluptatem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud.
                                    </p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span>
                                            <i className="bx bx-purchase-tag"></i>
                                        </span>
                                        <a href="#">Design</a>
                                        <a href="#">Websites</a>
                                        <a href="#">SEO</a>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li>
                                                <span>Share:</span>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="facebook"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="twitter"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="linkedin"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="instagram"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="dibiz-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href="#">
                                                <span className="image-prev">
                                                    <img
                                                        src="/images/blog/social.png"
                                                        alt="image"
                                                    />
                                                    <span className="post-nav-title">
                                                        Prev
                                                    </span>
                                                </span>

                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">
                                                        Digital Marketing
                                                        Strategies for Lead
                                                        Generation
                                                    </span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">
                                                            Jun 20, 2020
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">
                                                        Agencies Can
                                                        Successfully Recover
                                                        From COVID?
                                                    </span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">
                                                            Jun 19, 2020
                                                        </span>
                                                    </span>
                                                </span>

                                                <span className="image-next">
                                                    <img
                                                        src="/images/blog/seo.png"
                                                        alt="image"
                                                    />
                                                    <span className="post-nav-title">
                                                        Next
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* <BlogComments /> */}
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

export default SingleBlogMain;
