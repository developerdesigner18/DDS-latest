import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { useTheme } from "next-themes";

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 0,
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
            items: 5,
        },
    },
};
const LaravelIndustries = () => {
    const { theme, setTheme } = useTheme();

    const laravelIndustriesData = [
        {
            industriesimg: "/images/laravel/industry1.png",
            title: "Ecommerce",
        },
        {
            industriesimg: "/images/laravel/industry2.png",
            title: "Business to Business",
        },
        {
            industriesimg: "/images/laravel/industry3.png",
            title: "Non-Profit",
        },
        {
            industriesimg: "/images/laravel/industry4.png",
            title: "Startup",
        },
        {
            industriesimg: "/images/laravel/industry5.png",
            title: "Event",
        },
        {
            industriesimg: "/images/laravel/industry5.png",
            title: "Event",
        },
        {
            industriesimg: "/images/laravel/industry5.png",
            title: "Event",
        },
    ];
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, []);
    return (
        <div>
            {" "}
            <div className="team-area-two ptb-100">
                <div className="container">
                    <div className="section-title-holder">
                        <h2 className="sub-title">Industries / solutions </h2>

                        <p className="inductry-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {display ? (
                        <div className="carousel-holder">
                            <OwlCarousel
                                className="team-slides owl-carousel owl-theme carousel-holder"
                                {...options}
                            >
                                {laravelIndustriesData.map((data) => {
                                    return (
                                        <div className="single-team-member">
                                            <>
                                                <div
                                                    className={`industry-image ${theme == "dark" &&
                                                        "industry-image-dark"
                                                        }`}
                                                >
                                                    <img
                                                        src={data.industriesimg}
                                                        alt="team-image"
                                                    />
                                                </div>

                                                <div className="industry-content">
                                                    <h3>{data.title}</h3>
                                                </div>
                                            </>
                                        </div>
                                    );
                                })}
                            </OwlCarousel>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>{" "}
        </div>
    );
};

export default LaravelIndustries;
