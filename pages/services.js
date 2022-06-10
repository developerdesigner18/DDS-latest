import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import WhatWeOffer from "../components/Services/WhatWeOffer/WhatWeOffer";

const Services = () => {
    return (
        <>
            <PageBanner pageTitle="Services" />

            <ServiceCard />

            <WhatWeOffer />
        </>
    );
};

export default Services;
