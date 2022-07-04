import { useState } from "react";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import FaqBlock from "../components/Common/Faq/Accordian";

const Faq = () => {
    const accordionData = [
        {
            id: "1",
            title: "I want to join Daydreamsoft What Should I do ?",
            content: `To apply, please send your CV to jobs@daydreamsoft.com, and our team will contact you within 24 hours`,
        },
        {
            id: "2",
            title: "What is company’s working hours ?",
            content: `We are open Monday to Friday from 9:30 AM to 6:30 PM (IST) and on Saturday from 9:30 AM to 1:30 PM`,
        },
        {
            id: "3",
            title: "What is the estimated time frame for the completion of my project?",
            content: `Usually, the deadline for a design job is set by the client. Should you have any deadlines in mind, we will work hard to meet them. The most frequent cause of delays in developing and completing a new project is waiting for the customer to supply us with content (text/images). The majority of our assignments are completed within a 4-6 week time frame`,
        },
        {
            id: "4",
            title: "Do we need to meet face-to-face before we start the project?",
            content: `We prefer to meet with our clients in person whenever feasible, but sometimes that is not possible. Therefore projects are completed with communication by phone and email. Through our secure testing server, you may see the ongoing development process and all project-related information. By communicating frequently, we can make sure that the Daydreamsoft team is providing you with what you require.`,
        },
        {
            id: "5",
            title: "What are the best methods for supplying the content for my website? Or What is the best way to provide content for my website?",
            content: `It would be helpful if you could submit digital images and text in electronic formats, such as a digital camera file and a copy in MS Word. However, if this is not possible, we can help with getting your data ready for the website. As well as for instructions for uploading the files, you will also receive an FTP or email account.`,
        },
        {
            id: "6",
            title: "Should I have a database for my website?",
            content: `Depending on how much information you wish to publish on your website, this will be determined. The design of your website may benefit from including a database if you offer a lot of products or services. Upon recommendation, we will discuss all the details, including what it will cost and how it will work.`,
        },
    ];

    return (
        <>
            <PageBanner pageTitle="Frequently Asked Questions" />
            <div className="accordion-main">
                {accordionData.map((elm) => {
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
