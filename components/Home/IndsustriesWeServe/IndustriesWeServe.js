import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { createTitleSlug } from "../../../utils/utils";
import { industries } from "../../../data/industries";

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 4,
        },
    },
};

const IndustriesWeServe = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <div className="industries-we-serve ptb-100 dark-bg-color">
            <div className="container">
                <div className="section-title">
                    <h2>Industries We Serve</h2>
                    <p>
                        Our developers and digital experts join hands to provide
                        you with the most efficient, standard and convenient
                        websites, applications and strategies.
                    </p>
                </div>

                {display ? (
                    <OwlCarousel
                        className="industries-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {industries.map(
                            ({ image, title, redirection }, index) => (
                                <div key={index} className="single-industry">
                                    <div className="image">
                                        <Link
                                            href={`/solutions/${createTitleSlug(
                                                title
                                            )}`}
                                        >
                                            <img src={image} alt="team-image" />
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <Link
                                            href={`/solutions/${createTitleSlug(
                                                title
                                            )}`}
                                        >
                                            <span style={{ cursor: "pointer" }}>
                                                {title}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        )}
                    </OwlCarousel>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default IndustriesWeServe;
