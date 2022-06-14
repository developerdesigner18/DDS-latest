import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const partners = [
    {
        id: 1,
        image: "/images/partner/partner-img6.png",
    },
    {
        id: 2,
        image: "/images/partner/partner-img4.png",
    },
    {
        id: 3,
        image: "/images/partner/partner-img3.png",
    },
    {
        id: 4,
        image: "/images/partner/partner-img1.png",
    },
    {
        id: 5,
        image: "/images/partner/partner-img2.png",
    },
    {
        id: 6,
        image: "/images/partner/partner-img5.png",
    },
];

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    center: true,
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
                        {partners.map(({ image, id }) => (
                            <div
                                key={id}
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
