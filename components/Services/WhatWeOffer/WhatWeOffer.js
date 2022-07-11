import { useTheme } from "next-themes";
const featuresData = [
    {
        featureimg: "/images/services/user-experience.png",
        title: "Custom Web Development",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        featureimg: "/images/services/world-wide-web.png",
        title: "Front-End Development",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        featureimg: "/images/services/mobile-ap.png",
        title: "Open source Development",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        featureimg: "/images/services/game-development.png",
        title: "Open source Development",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        featureimg: "/images/services/networking.png",
        title: "Open source Development",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        featureimg: "/images/services/seo.png",
        title: "Open source Development",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        featureimg: "/images/services/quality-assurance.png",
        title: "Open source Development",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
];
const WhatWeOffer = () => {
    const { theme } = useTheme();
    return (
        <div className="offerContainer">
            <div className="container blockContainer">
                <div
                    className={`row ${
                        theme == "dark" && "image-holder-darkmode"
                    }`}
                >
                    <div className="col-lg-3 col-md-6 col-sm-6 service-holder">
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
                    {featuresData.map((data) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-5">
                                <div className="service-block">
                                    <div className="img-icons">
                                        {theme == "dark" && (
                                            <img
                                                src={data.featureimg}
                                                className="image-holder-darkmode"
                                            />
                                        )}
                                        {theme == "light" && (
                                            <img src={data.featureimg} />
                                        )}
                                    </div>
                                    <p className="heading">{data.title}</p>
                                    <p className="subheading">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    {/* <div className="col-lg-3 col-md-4 col-sm-2">
                        <div className="service-block">
                            <div className="img-icons">
                                <img src="/images/services/world-wide-web.png" />
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
