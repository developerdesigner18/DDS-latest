import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import OurServices from '../components/Common/OurServices'
import OurProcess from '../components/Common/OurProcess'
import IndustriesWeServe from '../components/Common/IndustriesWeServe';
import Portfolio from '../components/Common/Portfolio';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <Navbar home={true} />

            <MainBanner />

            <OurServices />

            <OurProcess />

            <IndustriesWeServe />

            <Portfolio />

            <TestimonialStyleOne />

            <Partner />
            
            <Footer />
        </>
    )
}

export default Index;