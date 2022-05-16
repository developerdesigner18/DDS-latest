import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/Home/MainBanner";
import OurServices from "../components/Home/OurServices";
import OurProcess from "../components/Home/OurProcess";
import IndustriesWeServe from "../components/Home/IndustriesWeServe";
import Portfolio from "../components/Home/Portfolio";
import Testimonial from "../components/Home/Testimonial";
import Partners from "../components/Home/Partners";
import Footer from "../components/_App/Footer";

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
