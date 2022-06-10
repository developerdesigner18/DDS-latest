import PageBanner from "../components/Common/PageBanner/PageBanner";
import PortfolioDetails from "../components/ProtfolioView/PortfolioDetails";
import Moreprofile from "../components/ProtfolioView/Moreprofile";

const portfolioview = () => {
    return (
        <>
            <PageBanner pageTitle="Portfolio" />

            <PortfolioDetails />

            <Moreprofile />
        </>
    );
};

export default portfolioview;
