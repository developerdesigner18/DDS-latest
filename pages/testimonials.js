import PageBanner from "../components/Common/PageBanner/PageBanner";
import Link from "next/link";
// import Testimonial from "../components/Home/Testimonial/Testimonial";

const testimonials = [
    {
        name: "Mark Greedy",
        profesion: "CEO & Founder of Destination-E",
        title: "We managwe to many people to constantly be searching for stuff",
        subtitle: "Lorem Ipsum is simply dummy text ",
        userimg: "/images/testimonial/thumbnail1.png",
        feedback:
            "They have taken upon themselves to focus on our needs and the brief that we gave them and in 12 months we have multiplied our site by about 10 times and they have successfully managed to accomplish all my goals that I had envisioned while starting e-destination. ",
    },
    {
        name: "Robert Woods",
        profesion: "Founder , Banneret Business solution",
        title: "We managwe to many people to constantly be searching for stuff",
        subtitle: "Lorem Ipsum is simply dummy text",
        userimg: "/images/testimonial/thumbnail2.png",
        feedback:
            "Ajay and his team are very responsive, they have developed and published my website in just two weeks and I would recommend them to anyone looking to build a website.",
    },
    {
        name: "Simon Willmore",
        profesion: "Travel Daily Media",
        title: "We managwe to many people to constantly be searching for stuff",
        subtitle: "Lorem Ipsum is simply dummy text",
        userimg: "/images/testimonial/thumbnail3.png",
        feedback:
            "Ajay always understood our requirements and made adjustments to our systems very quickly and accurately.The most important thing is he’s very good at interpreting our needs even though some of our team members are non-technical. The Daydreamsoft team has been absolutely wonderful, it's been a huge project but itwas completed on time and it has been a huge success for us.",
    },
    {
        name: "Brad Montgomery",
        profesion: "Funny Motivatioanl Speaker",
        title: "We managwe to many people to constantly be searching for stuff",
        subtitle: "Lorem Ipsum is simply dummy text",
        userimg: "/images/testimonial/thumbnail4.png",
        feedback:
            "He’s a great guy, he is a quality provider, I would hire them in a snap, and you ought to hire him too. The best thing about him is he is ready to provide expertise and custom suggestions for best results and he definitely knows how to maintain a good relationship.",
    },
    {
        name: "Talib Qayyum",
        profesion: "Founder, Parking Eagle",
        title: "We managwe to many people to constantly be searching for stuff",
        subtitle: "Lorem Ipsum is simply dummy text",
        userimg: "/images/testimonial/thumbnail5.png",
        feedback:
            "They were very responsive in terms of getting back to us on changes, they were absolutely brilliant on taking what we said and delivering it. What I most appreciated about his work was he didn’t require a lot of guidance and everything came naturally with the delivery.",
    },
];

const Testimonials = () => {
    return (
        <>
            <PageBanner pageTitle="Our Testimonials" />

            <div className="container testimonial-page">
                {testimonials.map(
                    (
                        { title, userimg, subtitle, profesion, feedback, name },
                        index
                    ) => (
                        <div key={index} className="overview-box">
                            <div className="overview-content">
                                <div className="content testimonial">
                                    <span
                                        className="sub-title"
                                        style={{ cursor: "pointer" }}
                                    >
                                        {subtitle}
                                    </span>

                                    <h2
                                        className="flaticon-quote"
                                        style={{ cursor: "pointer" }}
                                    >
                                        {title}
                                    </h2>

                                    <blockquote className="wp-block-quote testimonial">
                                        {feedback}
                                    </blockquote>
                                    <div className="testimonial-name">
                                        <h6>{name}</h6>{" "}
                                        <span> {profesion} </span>
                                    </div>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={userimg} alt="image" />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default Testimonials;
