import PageBanner from "../components/Common/PageBanner/PageBanner";
import DevelopmentBlock from "../components/OurDevlopment/DevelopmentBlock";

const ourDevelopmentProcess = () => {
    return (
        <>
            <PageBanner pageTitle="Our Development Process" />
            <DevelopmentBlock />
            <div className="bg-imgdev">
                <img src="/images/development/dev3.png" />
            </div>
        </>
    );
};

export default ourDevelopmentProcess;
