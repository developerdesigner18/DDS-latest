import Link from "next/link";
import { useTheme } from "next-themes";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import { createTitleSlug } from "../utils/utils";
import { accordionData } from "../data/career";

const Career = () => {
    const { theme } = useTheme();

    return (
        <>
            <PageBanner pageTitle="Career" />

            <div className="accordion-main">
                <>
                    <div className="career-position container mb-5">
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
                                <button type="submit" className="default-btn">
                                    Search Job
                                </button>
                            </div>
                        </div>
                    </div>
                    <>
                        {accordionData.map((elm, index) => {
                            return (
                                <>
                                    <div className="container p-0 mb-4">
                                        <Link
                                            href={`/career/${createTitleSlug(
                                                elm.title
                                            )}`}
                                        >
                                            <button className="accordian-btn career">
                                                {elm.title}{" "}
                                                <div
                                                    className={`icons career ${
                                                        theme == "dark" &&
                                                        "career-dark-icon"
                                                    }`}
                                                >
                                                    <i class="fa-solid fa-chevron-down"></i>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            );
                        })}
                    </>
                </>

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
