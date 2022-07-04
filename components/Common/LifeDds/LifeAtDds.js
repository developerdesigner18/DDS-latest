import React from "react";

const TeamData = [
    {
        pic: "/images/portfolio/portfolio-img1.jpg",
        name: "Daydreamsoft LLP Foundation Day",
    },
    {
        pic: "/images/portfolio/portfolio-img2.jpg",
        name: "Celebrating 2nd Anniversary of the company with enthusiastic team",
    },
    {
        pic: "/images/portfolio/portfolio-img3.jpg",
        name: "Diwali Celebration",
    },
    {
        pic: "/images/portfolio/portfolio-img4.jpg",
        name: "Quarterly lunch meet with enthusiastic team",
    },
    {
        pic: "/images/portfolio/portfolio-img5.jpg",
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
