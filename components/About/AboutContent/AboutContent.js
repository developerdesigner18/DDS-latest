import {
    COMPLETED_PROJECTS,
    SATISFIED_CLIENTS,
    TEAM_MEMBERS,
} from "../../../utils/AppConfig";

const AboutContent = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/images/about-img1.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">About Us</span>
                                <h2>WE LOVE WHAT WE DO AND WE DO IT WELL</h2>
                                <p>
                                    We are a group of developers with a passion
                                    for creativity. We believe in the
                                    transformative power of technology and its
                                    ability to simplify communications, elevate
                                    experiences, engage and inspire people
                                    everywhere. Let's make something
                                    internet-breaking together!
                                </p>

                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>{COMPLETED_PROJECTS}</h3>
                                            <p>Completed projects</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>{SATISFIED_CLIENTS}</h3>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>{TEAM_MEMBERS}</h3>
                                            <p>Expert team members</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
