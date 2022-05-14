import Link from "next/link";

const OurProcess = () => {
    return (
        <div className="our-process-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-process-content">
                            <span className="sub-title">
                                Detailed, Reliable, Quality
                            </span>
                            <h2>Our Process</h2>
                            <p>
                                We believe in listening and providing the best
                                creative solutions exceeding your requirements
                                and focusing on yielding maximum efficiency,
                                growth and traffic on all your digital platforms
                                On-Time and In-Budget. In simple terms, “You
                                share, we listen, implement and deliver”.
                            </p>

                            <ul className="our-process-list">
                                <li>
                                    <span>Planning</span>
                                    <p>
                                        A road map and getting to know you are
                                        the first steps in every endeavour. We
                                        investigate every aspect of the project
                                        and provide the strategies, budget and
                                        wireframes understanding all your
                                        requirements.
                                    </p>
                                </li>
                                <li>
                                    <span>Development</span>
                                    <p>
                                        Here is where the idea becomes a
                                        reality, we focus on all aspects of
                                        designing, coding, testing and every
                                        little tweak before making it all live.
                                    </p>
                                </li>
                                <li>
                                    <span>Publish</span>
                                    <p>
                                        Experience the reality, here we not only
                                        make your idea live on all digital
                                        platforms but also take care of your
                                        reach, marketing and success.
                                    </p>
                                </li>
                            </ul>

                            <Link href="/view-all">
                                <a className="default-btn">View All</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-process-content-image">
                            <img
                                src="/images/our-process.png"
                                alt="Our Process"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
