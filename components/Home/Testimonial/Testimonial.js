import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
});

const testimonials = [
    {
        name: "Mark Greedy",
        role: "Python Developer",
        feedback:
            "They have taken upon themselves to focus on our needs and the brief that we gave them and in 12 months we have multiplied our site by about 10 times and they have successfully managed to accomplish all my goals that I had envisioned while starting e-destination.",
    },
    {
        name: "Robert Woods",
        role: "Web Developer",
        feedback:
            "Ajay and his team are very responsive, they have developed and published my website in just two weeks and I would recommend them to anyone looking to build a website.",
    },
    {
        name: "Simon Willmore",
        role: "Web Designer",
        feedback:
            "Ajay always understood our requirements and made adjustments to our systems very quickly and accurately.The most important thing is he’s very good at interpreting our needs even though some of our team members are non-technical. The Daydreamsoft team has been absolutely wonderful, it's been a huge project but it was completed on time and it has been a huge success for us.",
    },
    {
        name: "Brad Montgomery",
        role: "Web Designer",
        feedback:
            "He’s a great guy, he is a quality provider, I would hire them in a snap, and you ought to hire him too. The best thing about him is he is ready to provide expertise and custom suggestions for best results and he definitely knows how to maintain a good relationship.",
    },
    {
        name: "Natalie Nezhati",
        role: "Web Designer",
        feedback:
            "He’s hardworking, accountable, professional, he always meets deadlines, we really couldn’t have been happier with his work, he’s assisted us in a number of areas including complex website regionalization projects with great results.",
    },
    {
        name: "Talib Qayyum",
        role: "Web Designer",
        feedback:
            "They were very responsive in terms of getting back to us on changes, they were absolutely brilliant on taking what we said and delivering it. What I most appreciated about his work was he didn’t require a lot of guidance and everything came naturally with the delivery.",
    },
    {
        name: "Marvin Satchell",
        role: "Web Designer",
        feedback:
            "We were stuck on a few things for some weeks when AJ came in and worked his magic all in a day and I am very grateful for the work he has done. He's very fluent in his communication and he’s very effective and disciplined in his approach.",
    },
    {
        name: "Rod Hatefi",
        role: "Web Designer",
        feedback:
            "I have been working with Rushil for some years now, he has always been a professional, responsive and reliable all around, he gets things done on time and on budget and I highly recommend Daydreamsoft for all your website maintenance and development needs.",
    },
    {
        name: "Mark Fuqua",
        role: "Web Designer",
        feedback:
            "They have been a champ, no drama, no excuses, just prodigious amounts of excellent code everyday, on rare occasions if there is a problem they just keep going at it until it’s solved. If you have Laravel or Vue projects you have found the perfect team or as close to perfect as one can get.",
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
            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel="youtube"
                isOpen={!isOpen}
                videoId="bk7McNUjWgw"
                onClose={() => setIsOpen(!isOpen)}
            />
        </div>
    );
};

export default Testimonial;
