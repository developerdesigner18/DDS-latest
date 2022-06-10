import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import Footer from "../components/_App/Footer/Footer";
import PortfolioDetails from "../components/ProtfolioView/PortfolioDetails";
import Moreprofile from "../components/ProtfolioView/Moreprofile";

const portfolioview = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Portfolio" />

            <PortfolioDetails />

            <Moreprofile />

            <Footer />
        </>
    );
};

export default portfolioview;
