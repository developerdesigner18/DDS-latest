import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const portfolios = [
    {
        image: "/images/portfolio/portfolio-img1.jpg",
        info: "Customer Satisfaction for a Digital Marketing Agency",
    },
    {
        image: "/images/portfolio/portfolio-img2.jpg",
        info: "Customer Satisfaction for a Digital Marketing Agency",
    },
    {
        image: "/images/portfolio/portfolio-img3.jpg",
        info: "Customer Satisfaction for a Digital Marketing Agency",
    },
    {
        image: "/images/portfolio/portfolio-img4.jpg",
        info: "Customer Satisfaction for a Digital Marketing Agency",
    },
    {
        image: "/images/portfolio/portfolio-img5.jpg",
        info: "Customer Satisfaction for a Digital Marketing Agency",
    },
];

const options = {
    loop: true,
    nav: true,
    dots: false,
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
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
};

const Portfolio = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <div className="portfolio-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Portfolio</span>
                    <h2>
                        We Strive To Innovate And Are Proud Of What We Have
                        Built.
                    </h2>
                </div>
            </div>

            <div className="container">
                {display ? (
                    <OwlCarousel
                        className="portfolio-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {portfolios.map(({ image, info }, index) => (
                            <div key={index} className="single-portfolio-item">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src={image} alt="image" />
                                    </a>
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>{info}</a>
                                        </Link>
                                    </h3>
                                    <Link href="/single-portfolio">
                                        <a className="link-btn">
                                            <i className="flaticon-next-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Portfolio;
