import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import Features from "../components/Solutions/Features/Features";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Solution = () => {
    const contentFirst =
        "Real estate, often known as real property, is made up of both land and improvements, such as buildings, fixtures, roads, buildings, and utility systems. Natural resources including minerals, plants, animals, water, and improvements are given a title of ownership through property rights. Real estate is among the top investment possibilities because of its minimal risk and high potential return. As property prices increase over time, it acts as an inflation safety net. In addition to owning a permanent abode, income generation is among the most crucial factors for horizontal property investors.";

    const contentSec =
        "Real estate may be utilised for many things, including giving people a place to live, utilising undeveloped land for farming, and renting out commercial property for a business. Building or facilitating the trade of property is how members of the real estate sector, such as brokers, developers, and agents, make their money.";

    return (
        <>
            <PageBanner pageTitle="Solution" />

            <ServiceCard
                mainimage="/images/industries/real-estate.webp"
                heading="Real Estate & Property"
                content="Let buyers discover their desired property and make it simple for them to connect with dealers."
                btntext="Request A Quote"
                btnlink="#quote"
            />

            <InfoCard
                heading="Real Estate & Property"
                images="/images/industries/real-estate-sec.png"
                content={contentFirst}
            />

            <Features />

            <InfoCard
                newClass="newInfo"
                heading="Real Estate & Property"
                images="/images/solutions/chart.png"
                content={contentSec}
            />

            <GetAQuote />
        </>
    );
};

export default Solution;
