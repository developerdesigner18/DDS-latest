import Navbar from "../components/_App/Navbar/Navbar";
import MainBanner from "../components/Home/MainBanner/MainBanner";
import OurServices from "../components/Home/OurServices/OurServices";
import OurProcess from "../components/Home/OurProcess/OurProcess";
import IndustriesWeServe from "../components/Home/IndsustriesWeServe/IndustriesWeServe";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Partners from "../components/Home/Partners/Partners";
import Footer from "../components/_App/Footer/Footer";

const Index = () => {
    return (
        <>
            <Navbar home={true} />

            <MainBanner />

            <OurServices />

            <OurProcess />

            <IndustriesWeServe />

            <Portfolio />

            <Testimonial />

            <Partners />

            <Footer />
        </>
    );
};

export default Index;
