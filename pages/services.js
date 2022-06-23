import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import WhatWeOffer from "../components/Services/WhatWeOffer/WhatWeOffer";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Services = () => {
    const content = (
        <>
            <p>
                We believe in listening and providing the best creative
                solutions to meet your requirements and focusing on yielding
                maximum efficiency, growth, and traffic on all your digital
                platforms across the globe. In simple terms, “You share, we
                listen, implement and deliver”. Our developers and digital
                experts join hands to provide you with the most efficient,
                standard, and convenient websites, mobile applications, modern
                UI/UX designs, and marketing strategies.
            </p>
            <p>
                Tap into the knowledge of our experts and achieve more uptime,
                better performance, faster case resolution, and proactive issue
                avoidance and prevention.
            </p>
        </>
    );

    return (
        <>
            <PageBanner pageTitle="Services" />

            <ServiceCard
                subheading="Our Services"
                mainimage="/images/services/main.png"
                heading="Sky Rocket your Business in the Digital World with Us."
                content={content}
                btntext="Read more"
            />

            <WhatWeOffer />

            <GetAQuote />
        </>
    );
};

export default Services;
