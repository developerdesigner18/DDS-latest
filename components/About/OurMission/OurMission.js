import Link from "next/link";

const OurMission = () => {
    return (
        <div className="our-mission-area ptb-100 bg-f9f9f9">
            <div className="container">
                <h3>Our Mission</h3>
                <div className="our-mission">
                    <div className="left-img">
                        <img src="/images/our-mission/left.png" alt="" />
                    </div>
                    <div className="about-content">
                        <p>
                            We are a client-centric company who believes in
                            going above and beyond to meet your demands and
                            exceed your expectations in order to reach your
                            business objectives and give the best possible
                            reality to your dreams.
                        </p>
                        <Link href="/">
                            <a className="default-btn">Schedule a Demo</a>
                        </Link>
                    </div>
                    <div className="right-img">
                        <img src="/images/our-mission/right.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
