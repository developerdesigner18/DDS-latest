import React from "react";
import Link from "next/link";

const BlogSidebarNew = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <input
                            type="search"
                            className="search-field"
                            placeholder="Search..."
                        />
                    </label>
                    <button type="submit">
                        <i className="bx bx-search-alt"></i>
                    </button>
                </form>
            </div>

            <div className="widget widget_dibiz_posts_thumb">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="post-holder">
                    <div className="item">
                        <Link href="/singleblog">
                            <a className="thumb">
                                <span
                                    className="fullimage cover bg1"
                                    role="img"
                                ></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>Feb 20,2022</span>
                            <h4 className="title usmall">
                                <Link href="/singleblog">
                                    <a>
                                        Marketing branding planning vision goals
                                        concept
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/singleblog">
                            <a className="thumb">
                                <span
                                    className="fullimage cover bg2"
                                    role="img"
                                ></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>Feb 20,2022</span>
                            <h4 className="title usmall">
                                <Link href="/singleblog">
                                    <a>
                                        Marketing branding planning vision goals
                                        concept
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/singleblog">
                            <a className="thumb">
                                <span
                                    className="fullimage cover bg3"
                                    role="img"
                                ></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>Feb 20,2022</span>
                            <h4 className="title usmall">
                                <Link href="/singleblog">
                                    <a>
                                        Marketing branding planning vision goals
                                        concept
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li>
                        <a href="/blog1">
                            General News{" "}
                            <span className="post-count">(05)</span>
                        </a>
                    </li>
                    <li>
                        <a href="/blog1">
                            Websites <span className="post-count">(03)</span>
                        </a>
                    </li>
                    <li>
                        <a href="/blog1">
                            Mobile Apps
                            <span className="post-count">(08)</span>
                        </a>
                    </li>
                    <li>
                        <a href="/blog1">
                            Digital Marketing
                            <span className="post-count">(10)</span>
                        </a>
                    </li>
                    <li>
                        <a href="/blog1">
                            SEO <span className="post-count">(09)</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <a href="/blog1">Design</a>
                    <a href="/blog1">Websites</a>
                    <a href="/blog1">Design</a>
                    <a href="/blog1">SEO</a>
                    <a href="/blog1">Design</a>
                    <a href="/blog1">Marketing</a>
                    <a href="/blog1">Design</a>
                    <a href="/blog1">SEO</a>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebarNew;
