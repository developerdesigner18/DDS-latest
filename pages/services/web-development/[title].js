import PageBanner from "../../../components/Common/PageBanner/PageBanner";
import ServiceCard from "../../../components/Common/ServiceCard/ServiceCard";
import LaravelIndustries from "../../../components/Laravel/LaravelIndustries/LaravelIndustries";
import LaravelServices from "../../../components/Laravel/LaravelServices/LaravelServices";
import ProjectInMind from "../../../components/Laravel/ProjectInMind/ProjectInMind";
import OurExpertise from "../../../components/Laravel/OurExpertise/OurExpertise";
import ReasonToChoose from "../../../components/Laravel/ReasonToChoose/ReasonToChoose";
import InfoCardWeb from "../../../components/Common/InfoCardWeb/InfoCardWeb";
import { webDevelopmentData } from "../../../data/webDevelopment";
import { createCareerTitle } from "../../../utils/utils";

const Laravel = ({ data }) => {
    return (
        <>
            <PageBanner pageTitle={data.title} />

            <ServiceCard
                subheading="Web Development"
                mainimage="/images/laravel/laravel.png"
                heading={`${data.title} Framework For Web Development`}
                content={data.mainParagraph}
                btntext="Our Portfolio"
                btnlink="/web-development"
                btntext2="Get A Quote"
            />

            <InfoCardWeb
                heading={`Why Developers Prefer ${data.title} For Web Development`}
                images="/images/laravel/cardImage.png"
                secondaryParagraph={data.secondaryParagraph}
            />

            <LaravelIndustries />

            <LaravelServices />

            <ReasonToChoose />

            <ProjectInMind />

            <OurExpertise />
        </>
    );
};
export async function getStaticProps(context) {
    const title = webDevelopmentData.find(
        (data) => createCareerTitle(data?.title) === context.params.title
    );
    return {
        props: {
            data: title,
        },
    };
}

export async function getStaticPaths() {
    const paths = webDevelopmentData.map((data) => ({
        params: {
            title: createCareerTitle(data?.title),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
export default Laravel;
