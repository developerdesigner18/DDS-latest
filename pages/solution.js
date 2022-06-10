import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import Features from "../components/Solutions/Features/Features";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Solution = () => {
    const content =
        "Aliquip velit excepteur do elit dolore eiusmod ut voluptate irure. Nostrud deserunt duis consectetur dolor id. Proident ut voluptate ea labore excepteur dolor fugiat cupidatat ea voluptate. Ad id reprehenderit qui aute excepteur officia qui nostrud ex commodo irure culpa. Magna elit cillum in esse sint.";

    return (
        <>
            <PageBanner pageTitle="Solution" />

            <ServiceCard />

            <InfoCard
                heading="Ecommerce, Retail & B2B Solutions"
                images="/images/solutions/retails.png"
                content={content}
            />

            <Features />

            <InfoCard
                heading="Ecommerce, Retail & B2B Solutions"
                images="/images/solutions/chart.png"
                content={content}
            />

            <GetAQuote />
        </>
    );
};

export default Solution;
