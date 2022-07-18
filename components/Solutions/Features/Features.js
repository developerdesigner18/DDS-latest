import { useTheme } from "next-themes";
import { features } from "../../../data/features";

const Features = ({ heading }) => {
    const { theme } = useTheme();

    return (
        <>
            <div className="features-holder ptb-100">
                <div className="container">
                    <h2 className="title">
                        Features of {heading}
                    </h2>
                    <div className="row solutions-row">
                        {features.map(({ image, heading }, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6 col-sm-6 pt-50"
                            >
                                <div className="single-featured-services-box feature">
                                    <div className={`icon solution`}>
                                        {theme == "dark" && (
                                            <img
                                                src={image}
                                                alt="team-image"
                                                className="flaticon-megaphone-dark"
                                            />
                                        )}
                                        {theme == "light" && (
                                            <img src={image} alt="team-image" />
                                        )}
                                    </div>
                                    <h3>{heading}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
