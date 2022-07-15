import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Carousel } from "react-bootstrap";
import { testimonials } from "../../../data/testimonials";
const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
});

const Testimonial = () => {
    const [display, setDisplay] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    const openModal = () => {
        setIsOpen(true);
    };
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text?.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "... read more" : " show less"}
                </span>
            </p>
        );
    };
    const [index, setIndex] = useState(0);
    const videoId = testimonials.find((data) => data.id == index);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="testimonials-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="testimonials-image">
                            <img src={videoId?.poster} alt="image" />
                            <div className="overlay"></div>
                            <div
                                onClick={openModal}
                                className="video-btn popup-youtube"
                                id="main_video"
                            >
                                <i className="flaticon-play-button"></i>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="testimonials-content">
                            {display ? (
                                <Carousel
                                    activeIndex={index}
                                    onSelect={handleSelect}
                                    slide={false}
                                    interval={null}
                                    controls={false}
                                >
                                    {testimonials.map(
                                        (
                                            {
                                                name,
                                                role,
                                                description,
                                                position,
                                                videoId,
                                                profile,
                                                id,
                                            },
                                            index
                                        ) => (
                                            <Carousel.Item>
                                                <>
                                                    <span className="sub-title">
                                                        Testimonials
                                                    </span>
                                                    <h2>
                                                        What Our Clients Are
                                                        Saying?
                                                    </h2>

                                                    <div
                                                        key={index}
                                                        className="single-testimonials-item"
                                                    >
                                                        <p>{description}</p>

                                                        <div className="client-info">
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src={
                                                                        profile
                                                                    }
                                                                    alt="image"
                                                                />
                                                                <div className="title">
                                                                    <h3>
                                                                        {name}
                                                                    </h3>
                                                                    <span>
                                                                        {
                                                                            position
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </Carousel.Item>
                                        )
                                    )}
                                </Carousel>
                            ) : (
                                ""
                            )}
                        </div>
                        <ModalVideo
                            channel="youtube"
                            isOpen={isOpen}
                            videoId={videoId?.videoId}
                            onClose={() => setIsOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
