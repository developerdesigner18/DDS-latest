import PageBanner from "../../../components/Common/PageBanner/PageBanner";
import ServiceCard from "../../../components/Common/ServiceCard/ServiceCard";
import LaravelIndustries from "../../../components/Laravel/LaravelIndustries/LaravelIndustries";
import LaravelServices from "../../../components/Laravel/LaravelServices/LaravelServices";
import ProjectInMind from "../../../components/Laravel/ProjectInMind/ProjectInMind";
import OurExpertise from "../../../components/Laravel/OurExpertise/OurExpertise";
import ReasonToChoose from "../../../components/Laravel/ReasonToChoose/ReasonToChoose";
import InfoCardWeb from "../../../components/Common/InfoCardWeb/InfoCardWeb";
import { webDevelopmentData } from "../../../data/webDevelopment";
import { createTitleSlug } from "../../../utils/utils";

const Laravel = ({ technology }) => {
    return (
        <>
            <PageBanner pageTitle={technology.title} />

            <ServiceCard
                subheading="Web Development"
                mainimage="/images/laravel/laravel.png"
                heading={`${technology.title} Framework For Web Development`}
                content={technology.mainParagraph}
                btntext="Our Portfolio"
                btnlink="/web-development"
                btntext2="Get A Quote"
            />

            <InfoCardWeb
                heading={`Why Developers Prefer ${technology.title} For Web Development`}
                images="/images/laravel/cardImage.png"
                secondaryParagraph={technology.secondaryParagraph}
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
    const technology = webDevelopmentData.find(
        (data) => createTitleSlug(data?.title) === context.params.title
    );
    return {
        props: {
            technology,
        },
    };
}

export async function getStaticPaths() {
    const paths = webDevelopmentData.map((data) => ({
        params: {
            technology: createTitleSlug(data?.title),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
export default Laravel;
