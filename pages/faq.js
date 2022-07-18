import PageBanner from "../components/Common/PageBanner/PageBanner";
import FaqBlock from "../components/Common/Faq/Accordian";
import { faqData } from "../data/faqData";

const Faq = () => {
    return (
        <>
            <PageBanner pageTitle="Frequently Asked Questions" />
            <div className="accordion-main ptb-100">
                {faqData.map((elm) => {
                    return (
                        <>
                            <div className="container">
                                <FaqBlock
                                    key={elm.id}
                                    title={elm.title}
                                    content={elm.content}
                                />
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Faq;
