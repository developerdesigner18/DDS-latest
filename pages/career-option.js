import CareerAccordian from "../components/Common/Career/CareerAccordian";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import { useTheme } from "next-themes";
import { useState } from "react";
import { accordionData } from "../data/career";
import useLocalStorage from "../hooks/useLocalStorage";

const Career = () => {
    const { theme } = useTheme();

    const [career, setCareer] = useLocalStorage("career");

    const [showContent, setShowContent] = useState(false);
    // const [contentId, setcontentId] = useState("");
    const contentId =
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("contentId"));
    const contantData = accordionData.find((data) => data.id === contentId);

    const toggle =
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("toggle"));
    return (
        <>
            <PageBanner pageTitle="Career" />

            <div className="accordion-main">
                {toggle && (
                    <>
                        <div className="container p-0">
                            <div className="accordian-content">
                                <CareerAccordian
                                    setShowContent={setShowContent}
                                    data={accordionData}
                                    contantData={contantData}
                                    setCareer={setCareer}
                                />
                            </div>
                        </div>
                    </>
                )}

                <div className="career-info container">
                    <p>
                        To know more about other amazing opportunities, email us
                        at
                        <span> contact@daydreamsoft.com</span>
                    </p>
                    <p>
                        Get a taste of what it’s like to work with Daydreamsoft.
                        Find out what <span> Life at Daydreamsoft </span> is all
                        about! Visit our
                        <span> LinkedIn profile</span> to know about the latest
                        from our turf
                    </p>
                </div>
            </div>
        </>
    );
};

export default Career;
