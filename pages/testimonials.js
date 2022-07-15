import { useState } from "react";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
});
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
    const [showMore, setShowMore] = useState(true);
    const LIMIT = 4;
    const [list, setList] = useState(testimonials.slice(0, LIMIT));
    const [index, setIndex] = useState(LIMIT);
    const loadMore = () => {
        const newIndex = testimonials.length;
        const newShowMore = newIndex < testimonials.length - 1;
        const newList = list.concat(testimonials.slice(index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    };
    const [isOpen, setIsOpen] = useState(true);
    const [indexVideo, setIndexVideo] = useState(0);

    const videoId = testimonials.find((data) => data.id == indexVideo);
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <PageBanner pageTitle="Our Testimonials" />

            <div className="testimonial-page">
                <div className="container">
                    {list.map(
                        (
                            {
                                headline,
                                poster,
                                position,
                                location,
                                description,
                                name,
                            },
                            index
                        ) => (
                            <div key={index} className="overview-box">
                                <div className="overview-content main-testimonial">
                                    <div className="content testimonial">
                                        <h2
                                            className=""
                                            style={{ cursor: "pointer" }}
                                        >
                                            {headline}
                                        </h2>

                                        <blockquote className="wp-block-quote testimonial">
                                            {description}
                                        </blockquote>
                                        <div className="testimonial-name">
                                            <h6>{name}</h6>{" "}
                                            <span>
                                                {" "}
                                                {position}, {location}{" "}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="overview-image">
                                    <div className="testimonials-image">
                                        <img src={poster} alt="image" />
                                        <div className="overlay"></div>
                                        <div
                                            onClick={(e) => {
                                                openModal();
                                                setIndexVideo(index);
                                            }}
                                            className="video-btn popup-youtube"
                                            id="main_video"
                                        >
                                            <i className="flaticon-play-button"></i>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className="text-center p-5">
                    {showMore && (
                        <a className="default-btn" onClick={loadMore}>
                            View All
                        </a>
                    )}
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                isOpen={!isOpen}
                videoId={videoId?.videoId}
                onClose={() => setIsOpen(!isOpen)}
            />
        </>
    );
};

export default Testimonials;
