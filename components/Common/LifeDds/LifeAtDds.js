import React from "react";

const TeamData = [
    {
        pic: "/images/life/foundation.png",
        name: "Daydreamsoft LLP Foundation Day",
    },
    {
        pic: "/images/life/aniversory.png",
        name: "Celebrating 2nd Anniversary of the company with enthusiastic team",
    },
    {
        pic: "/images/life/diwali.png",
        name: "Diwali Celebration",
    },
    {
        pic: "/images/life/lunch.png",
        name: "Quarterly lunch meet with enthusiastic team",
    },
    {
        pic: "/images/life/picnic.png",
        name: "DDS Family Picnic",
    },
];

const LifeAtDds = () => {
    return (
        <>
            <div className="team-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        {TeamData.map((elm) => {
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

                                            <div className="content">
                                                <h3>{elm.name}</h3>
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

export default LifeAtDds;
