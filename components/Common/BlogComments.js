import React from "react";
import Link from "next/link";

const BlogComments = () => {
    return (
        <div className="comments-area">
            <h3 className="comments-title">2 Comments:</h3>

            <ol className="comment-list">
                <li className="comment">
                    <article className="comment-body">
                        <footer className="comment-meta">
                            <div className="comment-author vcard">
                                <img
                                    src="/images/user1.jpg"
                                    className="avatar"
                                    alt="image"
                                />
                                <b className="fn">John Jones</b>
                                <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                                <a href="#">
                                    <span>April 24, 2019 at 10:59 am</span>
                                </a>
                            </div>
                        </footer>

                        <div className="comment-content">
                            <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                            </p>
                        </div>

                        <div className="reply">
                            <a href="#" className="comment-reply-link">
                                Reply
                            </a>
                        </div>
                    </article>

                    <ol className="children">
                        <li className="comment">
                            <article className="comment-body">
                                <footer className="comment-meta">
                                    <div className="comment-author vcard">
                                        <img
                                            src="/images/user2.jpg"
                                            className="avatar"
                                            alt="image"
                                        />
                                        <b className="fn">Steven Smith</b>
                                        <span className="says">says:</span>
                                    </div>

                                    <div className="comment-metadata">
                                        <a href="#">
                                            <span>
                                                April 24, 2019 at 10:59 am
                                            </span>
                                        </a>
                                    </div>
                                </footer>

                                <div className="comment-content">
                                    <p>
                                        Lorem Ipsum has been the industry’s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen.
                                    </p>
                                </div>

                                <div className="reply">
                                    <a href="#" className="comment-reply-link">
                                        Reply
                                    </a>
                                </div>
                            </article>

                            <ol className="children">
                                <li className="comment">
                                    <article className="comment-body">
                                        <footer className="comment-meta">
                                            <div className="comment-author vcard">
                                                <img
                                                    src="/images/user3.jpg"
                                                    className="avatar"
                                                    alt="image"
                                                />
                                                <b className="fn">
                                                    Sarah Taylor
                                                </b>
                                                <span className="says">
                                                    says:
                                                </span>
                                            </div>

                                            <div className="comment-metadata">
                                                <a href="#">
                                                    <span>
                                                        April 24, 2019 at 10:59
                                                        am
                                                    </span>
                                                </a>
                                            </div>
                                        </footer>

                                        <div className="comment-content">
                                            <p>
                                                Lorem Ipsum has been the
                                                industry’s standard dummy text
                                                ever since the 1500s, when an
                                                unknown printer took a galley of
                                                type and scrambled it to make a
                                                type specimen.
                                            </p>
                                        </div>

                                        <div className="reply">
                                            <a
                                                href="#"
                                                className="comment-reply-link"
                                            >
                                                Reply
                                            </a>
                                        </div>
                                    </article>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>

                <li className="comment">
                    <article className="comment-body">
                        <footer className="comment-meta">
                            <div className="comment-author vcard">
                                <img
                                    src="/images/user4.jpg"
                                    className="avatar"
                                    alt="image"
                                />
                                <b className="fn">John Doe</b>
                                <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                                <a href="#">
                                    <span>April 24, 2019 at 10:59 am</span>
                                </a>
                            </div>
                        </footer>

                        <div className="comment-content">
                            <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                            </p>
                        </div>

                        <div className="reply">
                            <a href="#" className="comment-reply-link">
                                Reply
                            </a>
                        </div>
                    </article>

                    <ol className="children">
                        <li className="comment">
                            <article className="comment-body">
                                <footer className="comment-meta">
                                    <div className="comment-author vcard">
                                        <img
                                            src="/images/user1.jpg"
                                            className="avatar"
                                            alt="image"
                                        />
                                        <b className="fn">James Anderson</b>
                                        <span className="says">says:</span>
                                    </div>

                                    <div className="comment-metadata">
                                        <a href="#">
                                            <span>
                                                April 24, 2019 at 10:59 am
                                            </span>
                                        </a>
                                    </div>
                                </footer>

                                <div className="comment-content">
                                    <p>
                                        Lorem Ipsum has been the industry’s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen.
                                    </p>
                                </div>

                                <div className="reply">
                                    <a href="#" className="comment-reply-link">
                                        Reply
                                    </a>
                                </div>
                            </article>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    );
};

export default BlogComments;
