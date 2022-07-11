import PageBanner from "../components/Common/PageBanner/PageBanner";
import StartProjectWithUs from "../components/Common/StartProjectWithUs";
import Link from "next/link";
import PricingBlock from "../components/Common/Pricing/PricingBlock";

const Pricing = () => {
    return (
        <>
            <PageBanner pageTitle="Pricing" />

            <PricingBlock />
        </>
    );
};

export default Pricing;
