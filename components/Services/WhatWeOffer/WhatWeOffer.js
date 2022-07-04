import Link from "next/link";

const WhatWeOffer = () => {
    return (
        <div className="offerContainer">
            <div className="container blockContainer">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <div>
                            <p>Services</p>
                            <h2>What we offer</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti, voluptatem.
                            </p>
                            <button type="submit" className="default-btn">
                                View All
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <div className="service-block">
                            <div className="img-icons">
                                <img src="/images/services/user-experience.png" />
                            </div>
                            <p className="heading">UI/UX Design</p>
                            <p className="subheading">
                                We have experienced designers of the creative
                                industry, who create futuristic modern designs
                                with a smooth workflow and responsive layouts.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <Link href="web-development">
                            <div className="service-block">
                                <div className="img-icons">
                                    <img src="/images/services/world-wide-web.png" />
                                </div>
                                <p className="heading">Web Development</p>
                                <p className="subheading">
                                    From simple landing pages to complex
                                    e-commerce websites, we ‘Add’ value to the
                                    ‘Web’ world with our Experience and
                                    Expertise in Web Development Services.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <div className="service-block mobile-block">
                            <div className="img-icons">
                                <img src="/images/services/mobile-ap.png" />
                            </div>
                            <p className="heading">Mobile App Development</p>
                            <p className="subheading">
                                With smartphone apps, the phrase "the world is
                                in your hands" becomes rather literal.
                                Regardless of the complexity of the application,
                                we are experts at making it user-friendly,
                                engaging, and seamless.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <div className="service-block bottomBlock">
                            <div className="img-icons">
                                <img src="/images/services/game-development.png" />
                            </div>
                            <p className="heading">Game Development</p>
                            <p className="subheading">
                                Our game developers create the “trend” with
                                their games as they’re always up-to-date with
                                the latest games and have their logic and mind
                                set up for making even the trickiest application
                                rock on all marketplaces.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <div className="service-block bottomBlock">
                            <div className="img-icons">
                                <img src="/images/services/networking.png" />
                            </div>
                            <p className="heading">AI & Machine Learning</p>
                            <p className="subheading">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has classical Latin
                                literature
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <div className="service-block bottomBlock">
                            <div className="img-icons">
                                <img src="/images/services/seo.png" />
                            </div>
                            <p className="heading">SEO & Digital Marketing</p>
                            <p className="subheading">
                                Our digital marketers are experts in making your
                                websites and applications rank better and
                                attract organic audiences.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-2">
                        <div className="service-block bottomBlock">
                            <div className="img-icons">
                                <img src="/images/services/quality-assurance.png" />
                            </div>
                            <p className="heading">Quality Assurance</p>
                            <p className="subheading">
                                What good is a product if it doesn't satisfy the
                                standards of today's market? As a result, for
                                your product to succeed, we use a very specific
                                and rigorous testing technique to verify that
                                they are of the highest quality possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
