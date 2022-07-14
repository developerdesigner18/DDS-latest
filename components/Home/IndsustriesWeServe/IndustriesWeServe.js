import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Link from "next/link";
import { createSolutionTitle } from "../../../utils/utils";

const industries = [
    {
        image: "/images/industries/e-commerce.webp",
        title: "Ecommerce",
    },
    {
        image: "/images/industries/b2b.webp",
        title: "Business to Business",
    },
    {
        image: "/images/industries/non-profit.webp",
        title: "Non-Profit",
    },
    {
        image: "/images/industries/real-estate.webp",
        title: "Real Estate & Property",
    },
    {
        image: "/images/industries/startup.webp",
        title: "Startup",
    },
    {
        image: "/images/industries/social-networking.webp",
        title: "Social Networking",
    },
    {
        image: "/images/industries/food-and-restaurant.jpg",
        title: "Food & Restaurant",
    },
    {
        image: "/images/industries/banking-and-finance.webp",
        title: "Banking & Finance",
    },
    {
        image: "/images/industries/education.webp",
        title: "Education",
    },
    {
        image: "/images/industries/travel.webp",
        title: "Travel",
    },
    {
        image: "/images/industries/media-and-entertainment.webp",
        title: "Media & Entertainment",
    },
    {
        image: "/images/industries/healthcare-and-fitness.webp",
        title: "Healthcare & Fitness",
    },
    {
        image: "/images/industries/transport-and-automotive.webp",
        title: "Transport & Automotive",
    },
    {
        image: "/images/industries/gaming-and-leisure.webp",
        title: "Gaming & Leisure",
    },
    {
        image: "/images/industries/directory-and-organization.webp",
        title: "Directory & Organisation",
    },
    {
        image: "/images/industries/event-and-tickets.webp",
        title: "Event & Tickets",
    },
    {
        image: "/images/industries/sports.webp",
        title: "Sports",
    },
];

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
                                            href={`/solutions/${createSolutionTitle(
                                                title
                                            )}`}
                                        >
                                            <img src={image} alt="team-image" />
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <Link
                                            href={`/solutions/${createSolutionTitle(
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
