import Link from "next/link";
import { useTheme } from "next-themes";
import { webDevelopmentAreaData } from "../../../data/webDevelopmentAreaData";

const WebDevelopmentAreas = () => {
    const { theme } = useTheme();

    return (
        <div>
            <div className="featured-services-area pt-100 pb-70">
                <div className="container">
                    <div className="technology-area-heading ">
                        <h2>Web Development Areas We Expert In</h2>
                    </div>
                    <div className="row">
                        {webDevelopmentAreaData.map((data) => {
                            return (
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="single-featured-services-box area-holder">
                                        <div className="area-image-holder">
                                            {/* <i className="flaticon-megaphone"></i> */}
                                            {theme == "dark" && (
                                                <img
                                                    src={data.webareaimg}
                                                    alt="image"
                                                    className="area-image-holder-dark"
                                                />
                                            )}
                                            {theme == "light" && (
                                                <img
                                                    src={data.webareaimg}
                                                    alt="image"
                                                />
                                            )}
                                        </div>
                                        <h4>
                                            <Link href="/#">
                                                <a>{data.title}</a>
                                            </Link>
                                        </h4>
                                        <p>{data.description}</p>
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

export default WebDevelopmentAreas;
