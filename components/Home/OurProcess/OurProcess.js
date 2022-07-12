import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

const OurProcess = () => {
    const { theme } = useTheme();
    return (
        <div className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                Detailed. Reliable. Quality
                            </span>
                            <h2>Our Process</h2>
                            <p>
                                We believe in listening and providing the best
                                creative solutions exceeding your requirements
                                and focusing on yielding maximum efficiency,
                                growth, and traffic on all your digital
                                platforms On-Time and In-Budget. In simple
                                terms, “You share, we listen, implement and
                                deliver”.
                            </p>

                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">01</div>
                                    <h3>Planning</h3>
                                    <p>
                                        A road map and getting to know you are
                                        the first steps in every endeavor. We
                                        investigate every aspect of the project
                                        and provide the strategies, budget, and
                                        wireframes to understand all your
                                        requirements.
                                    </p>
                                </div>

                                <div className="single-item">
                                    <div className="count-box">02</div>
                                    <h3>Development</h3>
                                    <p>
                                        Here is where the idea becomes a
                                        reality, we focus on all aspects of
                                        designing, coding, testing, and every
                                        little tweak before making it all live.
                                    </p>
                                </div>

                                <div className="single-item">
                                    <div className="count-box">03</div>
                                    <h3>Publish</h3>
                                    <p>
                                        Experience the reality, here we not only
                                        make your idea live on all digital
                                        platforms but also take care of your
                                        reach, marketing and success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            {theme == "light" && (
                                <img
                                    src="/images/our-process.png"
                                    alt="image"
                                />
                            )}
                            {theme == "dark" && (
                                <img
                                    src="/images/our-process-dark.png"
                                    alt="image"
                                />
                            )}
                        </div>
                    </div>
                    <Link href="/our-development-process">
                        <a className="default-btn view-process">View All</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
