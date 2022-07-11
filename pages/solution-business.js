import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import Features from "../components/Solutions/Features/Features";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Solution = () => {
    const contentFirst =
        "A business-to-business (B2B) transaction, usually referred to as a B-to-B transaction, is a type of transaction between businesses. Examples include a transaction between a manufacturer and wholesaler or a wholesaler and a retailer. Business-to-firm refers to transactions that take place between businesses rather than between a business and a specific customer. Contrasting with business-to-consumer (B2C) and business-to-government (B2G) transactions are business-to-business transactions. In a normal supply chain, transactions between businesses are frequent as companies buy parts and goods, like other raw materials, to utilise in production. After that, finished goods can be bought and sold between businesses and individuals. Planning is necessary for business-to-business transactions to go well. Such transactions depend on the account management staff of a firm to develop customer connections. For effective transactions to occur, business-to-business relationships must also be fostered, generally through professional meetings prior to sales.";

    const contentSec =
        "Marketing to businesses is very different from marketing to consumers. Here, identifying the target group and addressing them directly through smaller, more focused actions is the major focus. Personal relationships and a spotless reputation are also crucial.";

    return (
        <>
            <PageBanner pageTitle="Solution" />

            <ServiceCard
                mainimage="/images/industries/b2b.webp"
                heading="Business to Business"
                content="Give businesses the tools they need to collaborate and prosper from any place and make them work as a team."
                btntext="Request A Quote"
                btnlink="#quote"
            />

            <InfoCard
                heading="Business to Business"
                images="/images/solutions/business.png"
                content={contentFirst}
            />

            <Features />

            <InfoCard
                heading="Business to Business"
                images="/images/solutions/chart.png"
                content={contentSec}
            />

            <GetAQuote />
        </>
    );
};

export default Solution;
