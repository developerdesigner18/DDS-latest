import React from "react";

const DevelopmentBlock = () => {
    const developmentData = [
        {
            devimg: "/images/development/dev.png",
            title: "Style Guide",
            description:
                "Style guides are the building blocks of your app’s design. Having a sound style guide will help tremendously with your app’s usability by having a consistent design language users are more likely to be comfortable within your app..",
        },
        {
            devimg: "/images/development/dev2.png",
            title: "Development",
            description:
                "We hand over app design to developer where they start building a mobile app. Based on the design made by UI/UX developers, programmers can build necessary functionality for the app, both mobile clients and back-end part.",
        },
        {
            devimg: "/images/development/dev5.png",
            title: "Testing",
            description:
                "In mobile development , it’s a good idea to test early and often. The farther in you go into the development cycle, the costlier it becomes to fix bugs. The application should be tested for usability, compatibility , security, interface checks, stress and performance.",
        },
        {
            devimg: "/images/development/dev1.png",
            title: "Deployment",
            description:
                "After ensuring that all customer requirements have been met, the developers deploy the software for use. Before actual deployment, the software should be documented for future reference. Ownership should also be transferred to theclient. The deployment strategy depends on the specifications of the customer. It can be deployed in a data center or a client premise.",
        },
        {
            devimg: "/images/development/dev4.png",
            title: "Launch",
            description:
                "Your app is ready to submit. Choose a day and key up a formal launch. For different application stores, the policies of a launch an application are different. App development doesn’t end at launch. As your application gets in the hands of your users, feedback will pour in, and you will need to incorporate that feedback into future versions of the app.",
        },
    ];

    return (
        <>
            <div class="timeline testimonial">
                {developmentData.map((elm) => {
                    return (
                        <>
                            <div class="left devlopment">
                                <div class="content">
                                    <div className="devimg">
                                        <img src={elm.devimg} />
                                    </div>
                                    <div className="info">
                                        <h2>{elm.title}</h2>
                                        <p>{elm.description}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default DevelopmentBlock;
