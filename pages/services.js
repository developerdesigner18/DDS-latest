import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import WhatWeOffer from "../components/Services/WhatWeOffer/WhatWeOffer";
import Footer from "../components/_App/Footer/Footer";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Services" />

            <ServiceCard
                subheading="Our Services"
                mainimage="/images/services/main.png"
                heading="Integrated Services"
                content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
                btntext="Read more"
            />

            <WhatWeOffer />

            <GetAQuote />

            <Footer />
        </>
    );
};

export default Services;
