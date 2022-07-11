import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import LaravelIndustries from "../components/Laravel/LaravelIndustries/LaravelIndustries";
import LaravelServices from "../components/Laravel/LaravelServices/LaravelServices";
import ProjectInMind from "../components/Laravel/ProjectInMind/ProjectInMind";
import OurExpertise from "../components/Laravel/OurExpertise/OurExpertise";
import ReasonToChoose from "../components/Laravel/ReasonToChoose/ReasonToChoose";
const content = (
    <>
        <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
        </p>
        <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
        </p>
    </>
);
const Laravel = () => {
    return (
        <>
            <PageBanner pageTitle="Laravel" />

            <ServiceCard
                subheading="Web Development"
                mainimage="/images/laravel/laravel.png"
                heading="Laravel Framework For Web Development"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                btntext="Our Portfolio"
                btnlink="/web-development"
                btntext2="Get A Quote"
            />

            <InfoCard
                heading="Why Developers Prefer Laravel For Web Development"
                images="/images/laravel/cardImage.png"
                content={content}
            />

            <LaravelIndustries />

            <LaravelServices />

            <ReasonToChoose />

            <ProjectInMind />

            <OurExpertise />
        </>
    );
};

export default Laravel;
