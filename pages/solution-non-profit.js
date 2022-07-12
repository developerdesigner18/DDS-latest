import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import Features from "../components/Solutions/Features/Features";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Solution = () => {
    const contentFirst =
        "A non-profit organisation is a group that was established with the intention of making a profit, and in which no part of the organisation's revenue is given to its directors, officials, or members. The public is served by nonprofit organisations, which offer a variety of services to raise the standard of living for individuals or communities. They frequently have a large contingent of volunteers or temporary employees with a variety of skill sets and strong altruistic motivations. A non-profit organisation's owners do not receive any income from it. Instead of using the money it gets for its own purposes, the group contributes it. Donations received may also be used by a not-for-profit organisation to maintain operations.";

    const contentSec =
        "The core, distinctive purpose of your nonprofit is described in your organisation's mission statement. It conveys the benefits the organisation offers, the populations it serves, and the manner in which it does so. Therefore, the finest nonprofit mission statements are a concise summary of: Why does your nonprofit exist?";

    return (
        <>
            <PageBanner pageTitle="Solution" />

            <ServiceCard
                mainimage="/images/industries/non-profit.webp"
                heading="Non-Profit"
                content="Help people with needs by utilising the most up-to-date digital and virtual solutions to connect the community and provide support."
                btntext="Request A Quote"
                btnlink="#quote"
            />

            <InfoCard
                heading="Non-Profit"
                images="/images/industries/non-profit-sec.png"
                content={contentFirst}
            />

            <Features />

            <InfoCard
                newClass="newInfo"
                heading="Non-Profit"
                images="/images/solutions/chart.png"
                content={contentSec}
            />

            <GetAQuote />
        </>
    );
};

export default Solution;
