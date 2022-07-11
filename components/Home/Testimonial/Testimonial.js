import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Carousel } from "react-bootstrap";
const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
});

const testimonials = [
    {
        name: "Mark Greedy",
        description:
            "They have taken it upon themselves to focus on our needs and the brief that we gave them and in 12 months we have multiplied our site by about 10 times and they have successfully managed to accomplish all my goals that I had envisioned while starting e-destination.",
        poster: "/images/testimonial/mark greedy.jpg",
        profile: "/images/testimonial/Mark Greedy_profile.png",
        videoId: "g1aMKl2rFAc",
        position: "CEO & Founder of Destinations-E",
        location: "Singapore",
        id: 0,
    },
    {
        name: "Robert Woods",
        description:
            "Ajay and his team are very responsive, they have developed and published my website in just two weeks and I would recommend them to anyone looking to build a website.",
        poster: "/images/testimonial/Robert woods.jpg",
        profile: "/images/testimonial/Robert Woods_profile.png",
        videoId: "zIsup5HhDlY",
        position: "Founder, Banneret Business Solutions",
        location: "United States",
        id: 1,
    },
    {
        name: "Simon Willmore",
        description:
            "Ajay always understood our requirements and made adjustments to our systems very quickly and accurately. The most important thing is he’s very good at interpreting our needs even though some of our team members are non-technical. The Daydreamsoft team has been wonderful, it's been a huge project but it was completed on time and it has been a huge success for us.",
        poster: "/images/testimonial/Simon Willmore.jpg",
        profile: "/images/testimonial/Simon Willmore_profile.png",
        videoId: "t1_BU8AN3RM",
        position: "Travel Daily Media",
        location: " United Kingdom",
        id: 2,
    },
    {
        name: "Brad Montgomery",
        description:
            "He’s a great guy, he is a quality provider, I would hire them in a snap, and you ought to hire him too. The best thing about him is he is ready to provide expertise and custom suggestions for the best results and he knows how to maintain a good relationship.",
        poster: "/images/testimonial/Brad Montgomery.jpg",
        profile: "/images/testimonial/brad montagomery_profile.png",
        videoId: "0ZzKLqnsxNY",
        position: "Funny Motivational Speaker",
        location: "United States",
        id: 3,
    },
    {
        name: "Natalie Nezhati",
        description:
            "He’s hardworking, accountable, and professional, he always meets deadlines, we really couldn’t have been happier with his work, he’s assisted us in several areas including complex website regionalization projects with great results.",
        poster: "/images/testimonial/Natalie Nezhati.jpg",
        profile: "/images/testimonial/natalie nezhati_profile.png",
        videoId: "8JVtEZZE2jo",
        position: "Director, Edtech Mark Ltd",
        location: "United Kingdom",
        id: 4,
    },
    {
        name: "Talib Qayyum",
        description:
            "They were very responsive in terms of getting back to us on changes, they were brilliant in taking what we said and delivering it. What I most appreciated about his work as he didn’t require a lot of guidance and everything came naturally with the delivery.",
        poster: "/images/testimonial/Talib quayyum.jpg",
        profile: "/images/testimonial/Talib Qayyum_profile.png",
        videoId: "cNim4U4mdQs",
        position: "Founder, Parking Eagle",
        location: "United Kingdom",
        id: 5,
    },
    {
        name: "Marvin Satchell",
        description:
            "We were stuck on a few things for some weeks when AJ came in and worked his magic all in a day and I am very grateful for the work he has done. He's very fluent in his communication and he’s very effective and disciplined in his approach.",
        poster: "/images/testimonial/Marvin Satchell.jpg",
        profile: "/images/testimonial/Marvin Satchell_profile.png",
        videoId: "FZ1bryeFtq8",
        position: "Digital Business Growth",
        location: "United States",
        id: 6,
    },
    {
        name: "Rod Hatefi",
        description:
            "I have been working with Rushil for some years now, he has always been professional, responsive, and reliable all around, he gets things done on time and on budget and I highly recommend Daydreamsoft for all your website maintenance and development needs. ",
        poster: "/images/testimonial/Rod hatefi.jpg",
        profile: "/images/testimonial/rod hatefi_profile.png",
        videoId: "DcNrfzq2XsQ",
        position: "pistachiohair.com",
        location: "United States",
        id: 7,
    },
    {
        name: "Mark Fuqua",
        description:
            "They have been a champ, no drama, no excuses, just prodigious amounts of excellent code every day, on rare occasions if there is a problem they just keep going at it until it’s solved. If you have Laravel or Vue projects you have found the perfect team or as close to perfect as one can get.",
        poster: "/images/testimonial/mark fuqua.jpg",
        profile: "/images/testimonial/mark fuqua_profile.png",
        videoId: "uJLNlinHMw8",
        position: "Availdata",
        location: "United States",
        id: 8,
    },
    {
        name: "Arjan Vriend",
        description:
            "Ajay and his team are really professional. They created my website, which has more than 180 pages and is in 8 different languages, in just 3 months. They have my highest recommendation, and I look forward to working with them soon.",
        poster: "/images/testimonial/ARJAN VRIEND.jpg",
        profile: "/images/testimonial/Arjan variend_profile.png",
        videoId: "3OhoBTcYE5M",
        position: " Instrument Industry",
        location: "Netherlands",
        id: 9,
    },
    {
        name: "Milad Rehmani",
        description:
            "He is an excellent developer, and I am very delighted with all of his outputs. He answers all of my queries swiftly and thoroughly explains his choices.",
        poster: "/images/testimonial/milad rahmani.jpg",
        profile: "/images/testimonial/milad rahmani_profile.png",
        videoId: "HD9W22zKxs8",
        position: "UX Designer",
        location: "Netherlands",
        id: 10,
    },
    {
        name: "Andrea Mascheroni",
        description:
            "He is someone I've employed twice for web services and web development. He is incredibly talented, and I wholeheartedly recommend him.",
        poster: "/images/testimonial/Andrea Mascheroni.jpg",
        profile: "/images/testimonial/andrea mascheroni_profile.png",
        videoId: "ckwwCgmB2CI",
        position: "Leedia",
        location: "Italy",
        id: 11,
    },
];

const Testimonial = () => {
    const [display, setDisplay] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);
    // typeof window !== "undefined" &&
    //     window.jQuery(".modal-video").css({ opacity: "0", display: "none" });
    // typeof window !== "undefined" &&
    //     window
    //         .jQuery(typeof window !== "undefined" && document)
    //         .keyup(function (e) {
    //             e.preventDefault();
    //             if (e.key === "Escape") {
    //                 e.preventDefault();
    //                 jQuery(".modal-video").hide();
    //                 e.preventDefault();
    //             }
    //         });

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
                                                        <ReadMore>
                                                            {description}
                                                        </ReadMore>

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
