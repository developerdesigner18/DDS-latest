import PageBanner from "../components/Common/PageBanner/PageBanner";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
});
// import Testimonial from "../components/Home/Testimonial/Testimonial";

// const testimonials = [
//     {
//         name: "Mark Greedy",
//         profesion: "CEO & Founder of Destination-E",
//         title: "We managwe to many people to constantly be searching for stuff",
//         subtitle: "Lorem Ipsum is simply dummy text ",
//         userimg: "/images/testimonial/thumbnail1.png",
//         feedback:
//             "They have taken upon themselves to focus on our needs and the brief that we gave them and in 12 months we have multiplied our site by about 10 times and they have successfully managed to accomplish all my goals that I had envisioned while starting e-destination. ",
//     },
//     {
//         name: "Robert Woods",
//         profesion: "Founder , Banneret Business solution",
//         title: "We managwe to many people to constantly be searching for stuff",
//         subtitle: "Lorem Ipsum is simply dummy text",
//         userimg: "/images/testimonial/thumbnail2.png",
//         feedback:
//             "Ajay and his team are very responsive, they have developed and published my website in just two weeks and I would recommend them to anyone looking to build a website.",
//     },
//     {
//         name: "Simon Willmore",
//         profesion: "Travel Daily Media",
//         title: "We managwe to many people to constantly be searching for stuff",
//         subtitle: "Lorem Ipsum is simply dummy text",
//         userimg: "/images/testimonial/thumbnail3.png",
//         feedback:
//             "Ajay always understood our requirements and made adjustments to our systems very quickly and accurately.The most important thing is he’s very good at interpreting our needs even though some of our team members are non-technical. The Daydreamsoft team has been absolutely wonderful, it's been a huge project but itwas completed on time and it has been a huge success for us.",
//     },
//     {
//         name: "Brad Montgomery",
//         profesion: "Funny Motivatioanl Speaker",
//         title: "We managwe to many people to constantly be searching for stuff",
//         subtitle: "Lorem Ipsum is simply dummy text",
//         userimg: "/images/testimonial/thumbnail4.png",
//         feedback:
//             "He’s a great guy, he is a quality provider, I would hire them in a snap, and you ought to hire him too. The best thing about him is he is ready to provide expertise and custom suggestions for best results and he definitely knows how to maintain a good relationship.",
//     },
//     {
//         name: "Talib Qayyum",
//         profesion: "Founder, Parking Eagle",
//         title: "We managwe to many people to constantly be searching for stuff",
//         subtitle: "Lorem Ipsum is simply dummy text",
//         userimg: "/images/testimonial/thumbnail5.png",
//         feedback:
//             "They were very responsive in terms of getting back to us on changes, they were absolutely brilliant on taking what we said and delivering it. What I most appreciated about his work was he didn’t require a lot of guidance and everything came naturally with the delivery.",
//     },
// ];

const testimonial = [
    {
        name: "Mark Greedy",
        description:
            "They have taken it upon themselves to focus on our needs and the brief that we gave them and in 12 months we have multiplied our site by about 10 times and they have successfully managed to accomplish all my goals that I had envisioned while starting e-destination.",
        poster: "/images/testimonial/mark greedy.jpg",
        profile: "/images/testimonial/Mark Greedy_profile.png",
        videoId: "g1aMKl2rFAc",
        position: "CEO & Founder of Destinations-E",
        location: "Singapore",
        headline:
            "Our site has grown by around 10 times in the past year, and they have effectively handled the growth",
        id: 0,
    },
    {
        name: "Robert Woods",
        description:
            "Ajay and his team are very responsive, they have developed and published my website in just two weeks and I would recommend them to anyone looking to build a website.",
        poster: "/images/testimonial/Robert woods.jpg",
        headline:
            "My website was created and launched by DayDreamSoft in just about two weeks and that is Exceptional, I must say",
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
        headline:
            "Despite the fact that some of our team members lack technical expertise, But Ajay, he is excellent at understanding our needs",
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
        headline: "Ajay is adept at preserving positive connections",
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
        headline:
            "Ajay consistently fulfils deadlines and is responsible, diligent, and professional",
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
        headline:
            "They were excellent at absorbing our input and putting it into action. They were also very quick to respond when we requested modifications",
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
        headline:
            "We had been trapped on a few issues for a few weeks until AJ stepped in and solved everything in a single day. I am really appreciative of the job he has done",
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
        headline:
            "I wholeheartedly suggest Daydreamsoft for all of your website creation and maintenance needs since they completes everything on time and within budget",
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
        headline:
            "They've performed well, producing enormous quantities of top-notch code every day without any difficulties or justifications",
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
        headline:
            "Ajay and his crew are very competent. They have my highest endorsement, and I am looking forward to starting a new project with them shortly",
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
        headline:
            "He's a great developer, in my opinion. In a timely manner, he responds to all of my questions and fully justifies his decisions",
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
        headline:
            "He is a person I have used twice for web services and site building. He has a great deal of talent",
        videoId: "ckwwCgmB2CI",
        position: "Leedia",
        location: "Italy",
        id: 11,
    },
];

const Testimonials = () => {
    const [showMore, setShowMore] = useState(true);
    const LIMIT = 4;
    const [list, setList] = useState(testimonial.slice(0, LIMIT));
    const [index, setIndex] = useState(LIMIT);
    const loadMore = () => {
        // const newIndex = index + LIMIT;
        const newIndex = testimonial.length;
        const newShowMore = newIndex < testimonial.length - 1;
        const newList = list.concat(testimonial.slice(index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    };
    const [isOpen, setIsOpen] = useState(true);
    const [indexVideo, setIndexVideo] = useState(0);

    const videoId = testimonial.find((data) => data.id == indexVideo);
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
                                    {/* <div className="image">
                                        <img src={poster} alt="image" />
                                    </div> */}
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
