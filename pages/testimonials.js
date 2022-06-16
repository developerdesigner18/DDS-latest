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
];

const Testimonials = () => {
    return (
        <>
            <PageBanner pageTitle="Our Testimonials" />

            <div className="container">
                {testimonials.map(
                    (
                        {
                            title,
                            description,
                            userimg,
                            subtitle,
                            profesion,
                            feedback,
                        },
                        index
                    ) => (
                        <div key={index} className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <Link href="/solution">
                                        <span
                                            className="sub-title"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {subtitle}
                                        </span>
                                    </Link>
                                    <Link href="/solution">
                                        <h4 style={{ cursor: "pointer" }}>
                                            {title}
                                        </h4>
                                    </Link>
                                    <blockquote className="wp-block-quote">
                                        {feedback}
                                    </blockquote>
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
