import Featuresinfo from "./Featuresinfo";

const Features = () => {
    return (
        <>
            <div className="container">
                <h2 className="title">
                    Features of Ecommerce, Retail & B2B Solutions
                </h2>
                <div className="row solutions-row">
                    {Featuresinfo.map((elm) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="single-featured-services-box feature">
                                        <div className="icon solution">
                                            <img
                                                src={elm.featureimg}
                                                className="flaticon-megaphone"
                                            />
                                        </div>
                                        <h3>{elm.heading}</h3>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Features;
