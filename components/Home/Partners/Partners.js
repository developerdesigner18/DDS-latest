import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partners } from "../../../data/partners";

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 60,
    center: true,
    focusOnSelect: true,
    variableWidth: true,
    cssEase: "linear",
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        520: {
            items: 1,
            center: false,
            focusOnSelect: false,
        },
        767: {
            items: 1,
            center: false,
            focusOnSelect: false,
        },
        768: {
            items: 3,
            margin: 40,
        },
        1024: {
            items: 5,
            margin: 20,
        },
        1200: {
            items: 5,
        },
    },
};
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Partners = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <div id="#partners" className="partner-area bg-f9f9f9 main-owl">
            <div className="container">
                {display ? (
                    <OwlCarousel
                        className="partners-slides owl-carousel owl-theme slider_starter"
                        {...options}
                    >
                        {partners.map(({ image, id }) => (
                            <div
                                key={id}
                                className="row align-items-center justify-content-md-center item_slider"
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
