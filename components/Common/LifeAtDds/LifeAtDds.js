import { lifeAtDDSData } from "../../../data/lifeAtDDSData";

const LifeAtDds = () => {
    return (
        <>
            <div className="team-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        {lifeAtDDSData.map((elm) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-team-member">
                                            <div className="image">
                                                <img
                                                    src={elm.pic}
                                                    alt="team-image"
                                                />
                                            </div>

                                            <div
                                                className="content-holder"
                                                style={{
                                                    color: "var(--mainDarkColor)",
                                                    textAlign: "left",
                                                    paddingTop: 15,
                                                }}
                                            >
                                                <h6>{elm.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <a
                        className="default-btn"
                        style={{
                            display: "flex",
                            width: "16%",
                            margin: "auto",
                            justifyContent: "center",
                        }}
                    >
                        View More
                    </a>
                </div>
            </div>
        </>
    );
};

export default LifeAtDds;
