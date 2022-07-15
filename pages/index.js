import MainBanner from "../components/Home/MainBanner/MainBanner";
import OurServices from "../components/Home/OurServices/OurServices";
import OurProcess from "../components/Home/OurProcess/OurProcess";
import IndustriesWeServe from "../components/Home/IndsustriesWeServe/IndustriesWeServe";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Partners from "../components/Home/Partners/Partners";

const Index = () => {
    return (
        <>
            <MainBanner />

            <OurServices />

            <OurProcess />

            <IndustriesWeServe />

            <Portfolio />

            <Testimonial />

            <Partners />
        </>
    );
};

export default Index;
