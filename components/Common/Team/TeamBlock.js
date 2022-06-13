import React from "react";

const TeamData = [
    {
        pic: "/images/team/AJ.png",
        name: "Ajay Paladiya",
        profession: "CEO And Founder",
    },
    {
        pic: "/images/team/hiteshsir.png",
        name: "Hitesh Paladiya",
        profession: "CEO And Founder",
    },
    {
        pic: "/images/team/bhaveshsir.png",
        name: "Bhavesh Motisariya",
        profession: "CTO",
    },
    {
        pic: "/images/team/dipak.png",
        name: "Dipak Dholakiya",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/disha.png",
        name: "Disha Gelani",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/pratik.png",
        name: "Pratik Gohil",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/rusilsir.png",
        name: "Rushil Pachchigar",
        profession: "Web Team Leader",
    },
    {
        pic: "/images/team/romikk.png",
        name: "Romikk Sheladiya",
        profession: "Mobile Team Leader",
    },
    {
        pic: "/images/team/vanshita.png",
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
                                    <div className="col-lg-3 col-md-6 col-sm-6">
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
