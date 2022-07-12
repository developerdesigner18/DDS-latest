import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Logos from "./Logos";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
    {
        id: 1,
        image: "/images/partner/partner1.png",
    },
    {
        id: 2,
        image: "/images/partner/partner2.png",
    },
    {
        id: 3,
        image: "/images/partner/partner3.png",
    },
    {
        id: 4,
        image: "/images/partner/partner4.png",
    },
    {
        id: 5,
        image: "/images/partner/partner5.png",
    },
    {
        id: 6,
        image: "/images/partner/partner6.png",
    },
];

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
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
            center: false,
            focusOnSelect: false,
        },
        992: {
            items: 3,
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

    var settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        // variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: "linear",
        touchMove: true,
        // prevArrow: '<button class="slick-prev"> < </button>',
        // nextArrow: '<button class="slick-next"> > </button>',
    };

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
        // <div class="wrap_slider">
        //     <Slider
        //         {...settings}
        //         className="partner-area bg-f9f9f9 slider_starter"
        //     >
        //         <div className="item_slider">
        //             <img src="/images/partner/3.png" />
        //         </div>
        //         <div className="item_slider">
        //             <img src="/images/partner/partner-img4.png" />
        //         </div>
        //         <div className="item_slider">
        //             <img src="/images/partner/partner-img3.png" />
        //         </div>
        //         <div className="item_slider">
        //             <img src="/images/partner/partner-img1.png" />
        //         </div>
        //         <div className="item_slider">
        //             <img src="/images/partner/partner-img2.png" />
        //         </div>
        //         <div className="item_slider">
        //             <img src="/images/partner/partner-img5.png" />
        //         </div>
        //     </Slider>
        // </div>
        // <Logos items={items} active={0} />
    );
};

export default Partners;
