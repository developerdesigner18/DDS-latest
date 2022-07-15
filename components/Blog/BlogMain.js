import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import { blogs } from "../../data/blogs";

const BlogMain = () => {
    return (
        <>
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    {blogs.map((elm) => {
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
                                                    <div className="blog-content-holder">
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
                                                                    {elm.date}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
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

export default BlogMain;
