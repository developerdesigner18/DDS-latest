import { whyDDSCards } from "../../../data/whyDDSCards";

const WhyDDS = () => {
    return (
        <div className="why-dds-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Why DDS</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                    </p>
                </div>

                <div className="row">
                    {whyDDSCards.map(({ id, title, description, image }) => (
                        <div
                            key={id}
                            className="why-dds-cards col-lg-4 col-md-6 col-sm-6"
                        >
                            <div className="why-dds-card">
                                <div className="title">
                                    <h3>{title}</h3>

                                    <h2>{id}</h2>

                                </div>

                                <p>{description}</p>
                                {/* {image && (
                                    <>
                                        <div className="bg-img">
                                            <img src={image} alt="image" />
                                        </div>
                                        <div className="overlay"></div>
                                    </>
                                )} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyDDS;
