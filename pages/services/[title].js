import PageBanner from "../../components/Common/PageBanner/PageBanner";
import ServiceCard from "../../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../../components/Common/InfoCard/InfoCard";
import WebDevelopmentServices from "../../components/WebDevelopment/WebDevelopmentServices/WebDevelopmentServices";
import TechnologyStack from "../../components/WebDevelopment/TechnologyStack/TechnologyStack";
import WebDevelopmentProcess from "../../components/WebDevelopment/WebDevelopmentProcess/WebDevelopmentProcess";
import WebDevelopmentAreas from "../../components/WebDevelopment/WebDevelopmentAreas/WebDevelopmentAreas";
import { whatWeOfferData } from "../../data/services";
import { createCareerTitle } from "../../utils/utils";
const WebDevelopment = ({ data }) => {
    const content = (
        <>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
            </p>
            <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text,
            </p>
        </>
    );

    return (
        <>
            <PageBanner pageTitle={data.title} />

            <ServiceCard
                subheading="Our Services"
                mainimage="/images/web-development/cardImage.png"
                heading={`${data.title} Services`}
                content={data.description}
                btntext="Our Portfolio"
                btntext2="Get A Quote"
                btnlink="/web-development-view"
            />
            <InfoCard
                heading="Custom Web Design Services"
                images="/images/web-development/Web_Programmer.png"
                content={content}
            />

            <WebDevelopmentServices />

            <TechnologyStack whatWeOffer={data} />

            <WebDevelopmentProcess />

            <WebDevelopmentAreas />
        </>
    );
};
export async function getStaticProps(context) {
    const title = whatWeOfferData.find(
        (data) => createCareerTitle(data?.title) === context.params.title
    );
    return {
        props: {
            data: title,
        },
    };
}

export async function getStaticPaths() {
    const paths = whatWeOfferData.map((data) => ({
        params: {
            title: createCareerTitle(data?.title),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
export default WebDevelopment;
