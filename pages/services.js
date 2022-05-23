import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import WhatWeOffer from "../components/Services/WhatWeOffer/WhatWeOffer";
import Footer from "../components/_App/Footer/Footer";

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Services" />

            <ServiceCard />

            <WhatWeOffer />

            <Footer />
        </>
    );
};

export default Services;
