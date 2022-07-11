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
    const [contentId, setcontentId] = useState("");
    const contantData = accordionData.find((data) => data.id === contentId);

    console.log(career, "===================");
    return (
        <>
            <PageBanner pageTitle="Career" />

            <div className="accordion-main">
                {!showContent && (
                    <>
                        <div className="career-position container">
                            <h3>Opening Positions</h3>
                            <div className="col-lg-12 col-sm-7 col-md-7">
                                <div className="career-option">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Job Title"
                                        name="coupon-code"
                                        id="coupon-code"
                                    />
                                    <select>
                                        <option>Job Category</option>
                                        <option>React Native</option>
                                        <option>PHP Developer</option>
                                        <option>Laravel</option>
                                    </select>
                                    <button
                                        type="submit"
                                        className="default-btn"
                                    >
                                        Search Job
                                    </button>
                                </div>
                            </div>
                        </div>
                        <>
                            {accordionData.map((elm, index) => {
                                return (
                                    <>
                                        <div className="container p-0">
                                            {/* <CareerAccordian
                                    key={elm.id}
                                    title={elm.title}
                                    content={elm.content}
                                /> */}
                                            <button
                                                onClick={() => {
                                                    // setCareer(true);
                                                    setShowContent(true),
                                                        setcontentId(elm.id);
                                                }}
                                                className="accordian-btn career"
                                            >
                                                {elm.title}{" "}
                                                <div
                                                    className={`icons career ${
                                                        theme == "dark" &&
                                                        "career-dark-icon"
                                                    }`}
                                                >
                                                    <img src="/images/career/downarrow.svg" />
                                                </div>
                                            </button>
                                        </div>
                                    </>
                                );
                            })}
                        </>
                    </>
                )}
                {showContent && (
                    <div className="container p-0">
                        <div className="accordian-content">
                            {/* {contantData?.content} */}
                            <CareerAccordian
                                setShowContent={setShowContent}
                                data={accordionData}
                                contantData={contantData}
                                setCareer={setCareer}
                            />
                        </div>
                    </div>
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
