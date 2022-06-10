import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import Footer from "../components/_App/Footer/Footer";
import UserPortfolio from "../components/Portfolio/UserPortfolio";

const Portfolio = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Portfolio" />

            <UserPortfolio />

            <Footer />
        </>
    );
};

export default Portfolio;
