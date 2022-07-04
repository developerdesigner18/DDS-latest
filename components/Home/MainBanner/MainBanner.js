import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
});

const MainBanner = () => {
    // Popup Video
    const [isOpen, setIsOpen] = useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="main-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <span className="sub-title">
                                    Designers. Developers. Strategists.
                                </span>
                                <h1>
                                    People “DRESS” to impress, <br /> We
                                    “DESIGN” for businesses to succeed.
                                </h1>
                                <p>
                                    Daydreamsoft, a Surat-based IT company,
                                    offers innovative solutions to businesses
                                    ranging from startups to Fortune 500
                                    corporations. Consider us a creative
                                    collaborator rather than a resource. This
                                    means we have a shared perspective on how we
                                    can work together to achieve your goals,
                                    reach new heights and follow the path to
                                    success.
                                </p>

                                <div className="btn-box">
                                    <div className="d-flex align-items-center">
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Get Started
                                            </a>
                                        </Link>

                                        <div
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openModal();
                                            }}
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="flaticon-play-button"></i>{" "}
                                            Watch Video
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-image">
                                <img src="/images/banner-img.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel="youtube"
                isOpen={!isOpen}
                videoId="bk7McNUjWgw"
                onClose={() => setIsOpen(!isOpen)}
            />
        </>
    );
};

export default MainBanner;
