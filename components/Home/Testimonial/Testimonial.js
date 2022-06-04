import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const testimonials = [
    {
        name: "John Smith",
        role: "Python Developer",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        name: "Sarah Taylor",
        role: "Web Developer",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        name: "James Anderson",
        role: "Web Designer",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
];

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>",
    ],
};

const Testimonial = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    // Popup Video
    const [isOpen, setIsOpen] = useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="testimonials-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="testimonials-image">
                            <img src="/images/thumbnail.png" alt="image" />
                            <div className="overlay"></div>
                            <div
                                onClick={(e) => {
                                    e.preventDefault();
                                    openModal();
                                }}
                                className="video-btn popup-youtube"
                            >
                                <i className="flaticon-play-button"></i>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="testimonials-content">
                            <span className="sub-title">Testimonials</span>
                            <h2>What Our Clients Are Saying?</h2>

                            {display ? (
                                <OwlCarousel
                                    className="testimonials-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    {testimonials.map(
                                        ({ name, role, feedback }, index) => (
                                            <div
                                                key={index}
                                                className="single-testimonials-item"
                                            >
                                                <p>{feedback}</p>

                                                <div className="client-info">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src="/images/user1.jpg"
                                                            alt="image"
                                                        />
                                                        <div className="title">
                                                            <h3>{name}</h3>
                                                            <span>{role}</span>
                                                        </div>
                                                    </div>
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
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
