import PageBanner from "../components/Common/PageBanner/PageBanner";
import Link from "next/link";
import { useState } from "react";
import { solutions } from "../components/Solutions/solutionData";

const Solutions = () => {
    const [showMore, setShowMore] = useState(true);
    const LIMIT = 4;
    const [list, setList] = useState(solutions.slice(0, LIMIT));
    const [index, setIndex] = useState(LIMIT);
    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < solutions.length - 1;
        const newList = list.concat(solutions.slice(index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    };

    return (
        <>
            <PageBanner pageTitle="Solutions" />

            <div className="overview-area ptb-100">
                <div className="container">
                    {list.map(
                        ({ title, description, image, redirection }, index) => (
                            <div key={index} className="overview-box">
                                <div className="overview-content">
                                    <div className="content">
                                        <span
                                            className="sub-title"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Solutions
                                        </span>

                                        <Link href={redirection}>
                                            <h2 style={{ cursor: "pointer" }}>
                                                {title}
                                            </h2>
                                        </Link>
                                        {description}
                                    </div>
                                </div>

                                <div
                                    className="overview-image"
                                    style={{ cursor: "pointer" }}
                                >
                                    <Link href={redirection}>
                                        <div className="image">
                                            <img src={image} alt="image" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    )}
                    <div
                        className="text-center p-5"
                        style={{ cursor: "pointer" }}
                    >
                        {showMore && (
                            <a className="default-btn" onClick={loadMore}>
                                View All
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solutions;
