import { ddsTeam } from "../../../data/ddsTeam";

const TeamBlock = () => {
    return (
        <>
            <div className="team-area-two pt-50">
                <div className="container">
                    <div className="row align-items-center">
                        {ddsTeam.map((elm) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-team-member pb-2">
                                            <div className="image">
                                                <img
                                                    src={elm.pic}
                                                    alt="team-image"
                                                />
                                            </div>

                                            <div className="content">
                                                <h3>{elm.name}</h3>
                                                <span>{elm.profession}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamBlock;
