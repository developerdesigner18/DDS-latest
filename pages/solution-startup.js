import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import Features from "../components/Solutions/Features/Features";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Solution = () => {
    const contentFirst =
        "A startup is a business in its infancy that is founded by one or more persons with the intention of disrupting an established market with special goods or services. Startup businesses frequently struggle with a lack of funding for their operations, making them unable to compete with more established businesses. A tech startup is a business whose goal is to market technology-related goods or services. These businesses offer brand-new technological goods or services, as well as innovative ways to offer already-available technological goods or services. Startups are often run by one or a small group of entrepreneurs who are eager to fill a market gap with a fresh product or service. A startup firm is concerned with rapid and lucrative expansion within its target market, while small enterprises frequently have the objective of staying small.";

    const contentSec =
        "The goal of startups is to accelerate growth in early-stage enterprises and reduce time to market. As entrepreneurs (startups) develop marketable and scalable products, operating models, and business procedures, our boutique consulting firm supports them.";

    return (
        <>
            <PageBanner pageTitle="Solution" />

            <ServiceCard
                mainimage="/images/industries/startup.png"
                heading="Startup"
                content="We work with startups and forward-thinking businesses that want to establish and expand their online footprint."
                btntext="Request A Quote"
                btnlink="#quote"
            />

            <InfoCard
                heading="Startup"
                images="/images/industries/startup-sec.png"
                content={contentFirst}
            />

            <Features />

            <InfoCard
                heading="Startup"
                images="/images/solutions/chart.png"
                content={contentSec}
            />

            <GetAQuote />
        </>
    );
};

export default Solution;
