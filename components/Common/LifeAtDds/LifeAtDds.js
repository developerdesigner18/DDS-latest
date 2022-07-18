import { lifeAtDDSData } from "../../../data/lifeAtDDSData";

const LifeAtDds = () => {
    return (
        <>
            <div className="team-area-two pt-50">
                <div className="container">
                    <div className="row">
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
                                                <h6 style={{ margin: 0 }}>{elm.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className="pb-50">

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
            </div>
        </>
    );
};

export default LifeAtDds;
