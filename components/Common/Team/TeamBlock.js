import React from "react";

const TeamData = [
    {
        pic: "/images/team/team-img2.jpg",
        name: "Ajay Paladiya",
        profession: "CEO And Founder",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Hitesh Paladiya",
        profession: "CEO And Founder",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Bhavesh Motisariya",
        profession: "CTO",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Dipak Dholakiya",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Disha Gelani",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Pratik Gohil",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Rushil Pachchigar",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Romikk Sheladiya",
        profession: "Mobile Team Leader",
    },
    {
        pic: "/images/team/team-img2.jpg",
        name: "Vanshita Agarwal",
        profession: "Web Team Leader",
    },
];

const TeamBlock = () => {
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
