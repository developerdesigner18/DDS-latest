import { expertiseData } from "../../../data/expertiesData";

const OurExpertise = () => {
    return (
        <div>
            {" "}
            <div className="expertise-stack pt-50">
                <div className="container">
                    <div className="expertise-stack-heading text-left pb-50">
                        <h2>Our Experties</h2>
                    </div>
                    <div className="row text-center">
                        {expertiseData.map((data) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-50">
                                    <div className="expertise-container-holder">
                                        <img
                                            src={data.expertiseimg}
                                            alt="image"
                                            className="expertise-image-holder"
                                        />
                                        <h6 className="text-center pt-4 mt-2">
                                            {data.title}
                                        </h6>
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

export default OurExpertise;
