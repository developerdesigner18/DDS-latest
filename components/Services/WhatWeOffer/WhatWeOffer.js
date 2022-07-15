import { useTheme } from "next-themes";
import Link from "next/link";
import { createTitleSlug } from "../../../utils/utils";
import { featuresData } from "../../../data/featuresData";

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
                                    <Link
                                        href={`/services/${createTitleSlug(
                                            data.title
                                        )}`}
                                    >
                                        <div>
                                            {theme == "dark" && (
                                                <div className="img-icons image-holder-darkmode">
                                                    <img
                                                        src={data.featureimg}
                                                    />
                                                </div>
                                            )}
                                            {theme == "light" && (
                                                <div className="img-icons">
                                                    <img
                                                        src={data.featureimg}
                                                    />
                                                </div>
                                            )}
                                            <p className="heading">
                                                {data.title}
                                            </p>
                                            <p className="subheading">
                                                {data.description}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
