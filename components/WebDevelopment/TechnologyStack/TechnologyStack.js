import Link from "next/link";
import { createTitleSlug } from "../../../utils/utils";
import { technologies } from "../../../data/technologies";

const TechnologyStack = ({ whatWeOffer }) => {
    return (
        <div>
            {" "}
            <div className="technology-stack ptb-100 ">
                <div className="container">
                    <div className="technology-stack-heading text-center">
                        <h2>Technology Stack</h2>
                    </div>
                    <div className="row text-center">
                        {technologies.map((data) => {
                            return (
                                <div className="col-lg-2 col-md-4 col-sm-6 pt-50">
                                    <div className="single-gallery-item">
                                        <Link
                                            href={`/services/technology/${createTitleSlug(
                                                data.title
                                            )}`}
                                        >
                                            <div>
                                                <img
                                                    src={data.techimg}
                                                    alt="image"
                                                    className="technology-image-holder"
                                                />
                                                <h6 className="text-center">
                                                    {data.title}
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyStack;
