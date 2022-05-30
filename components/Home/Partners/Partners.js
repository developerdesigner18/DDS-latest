import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

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
            items: 5,
        },
    },
};

const partners = [
    {
        image: "/images/partner/partner-img6.png",
    },
    {
        image: "/images/partner/partner-img4.png",
    },
    {
        image: "/images/partner/partner-img3.png",
    },
    {
        image: "/images/partner/partner-img1.png",
    },
    {
        image: "/images/partner/partner-img2.png",
    },
    {
        image: "/images/partner/partner-img5.png",
    },
];

const Partners = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <div id="#partners" className="partner-area bg-f9f9f9">
            <div className="container">
                {display ? (
                    <OwlCarousel
                        className="partners-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {partners.map(({ image }, index) => (
                            <div
                                key={index}
                                className="row align-items-center justify-content-md-center"
                            >
                                <div className="single-partner-item">
                                    <a className="image">
                                        <img src={image} alt="image" />
                                    </a>
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

export default Partners;
