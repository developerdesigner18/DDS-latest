import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceCard from "../components/Common/ServiceCard";
import InfoCard from "../components/Common/InfoCard";
import Features from "../components/Solutions/Features";
import GetAQuote from "../components/Solutions/GetAQuote";
import Footer from "../components/_App/Footer";

const solutions = [
    {
        title: "Ecommerce, Retail & B2B",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/services/services-img1.png",
    },
    {
        title: "On-Demand Solutions",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/services/services-img2.png",
    },
    {
        title: "Social Networking",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/services/services-img1.png",
    },
    {
        title: "Food And Restaurant",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/services/services-img2.png",
    },
];

const Solutions = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Solutions" />

            <ServiceCard />

            <InfoCard />

            <Features />

            <InfoCard />

            <GetAQuote />

            {/* <div className="overview-area ptb-100">
                <div className="container">
                    {solutions.map(({ title, description, image }, index) => (
                        <div key={index} className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">Solutions</span>
                                    <h2>{title}</h2>
                                    {description}
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={image} alt="image" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <a className="default-btn">View All</a>
                </div>
            </div> */}

            <Footer />
        </>
    );
};

export default Solutions;
