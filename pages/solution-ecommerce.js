import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import Features from "../components/Solutions/Features/Features";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Solution = () => {
    const contentFirst =
        "E-commerce is the process of purchasing and selling products or services online, as well as the data and money transfers required to execute the transactions. It is often referred to as online commerce or electronic commerce. E-commerce, often known as electronic commerce, is the exchange of products and services as well as the sending of money and data through an electronic network, most commonly the internet. These commercial dealings can be either B2B (business-to-business), B2C (business-to-consumer), C2C (consumer-to-consumer), or C2B. Reaching as many clients as possible at the correct moment will enhance sales and the profitability of the company. E-commerce involves the purchasing and selling of items as well as sending money or data through the internet.";

    const contentSec =
        "E-commerce is a whole-business endeavour rather than an IT problem. The businesses that utilise it as an excuse to overhaul their operational procedures stand to gain the most. E-commerce is also a useful tool that allows customers access to businesses and organisations throughout the globe.";

    return (
        <>
            <PageBanner pageTitle="Solution" />

            <ServiceCard
                mainimage="/images/industries/e-commerce.png"
                heading="Ecommerce"
                content="Provide a rich and frictionless transaction experience for your customers."
                btntext="Request A Quote"
                btnlink="#quote"
            />

            <InfoCard
                heading="Ecommerce, Retail & B2B Solutions"
                images="/images/industries/e-commerce-sec.png"
                content={contentFirst}
            />

            <Features />

            <InfoCard
                heading="Ecommerce, Retail & B2B Solutions"
                images="/images/solutions/chart.png"
                content={contentSec}
            />

            <GetAQuote />
        </>
    );
};

export default Solution;
