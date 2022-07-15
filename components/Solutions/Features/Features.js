import { useTheme } from "next-themes";
import { features } from "../../../data/features";

const Features = () => {
    const { theme } = useTheme();

    return (
        <>
            <div className="features-holder">
                <div className="container">
                    <h2 className="title">
                        Features of Ecommerce, Retail & B2B Solutions
                    </h2>
                    <div className="row solutions-row">
                        {features.map(({ image, heading }, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6 col-sm-6"
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
