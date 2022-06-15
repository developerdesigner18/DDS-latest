const whyDDSCards = [
    {
        id: "01",
        title: "We Believe In Expertise",
        description:
            "We have highly trained engineers with in-depth technical knowledge and hands-on expertise with the most up-to-date software standards. We've established a vast knowledge base that we use to develop solutions that fit the needs, expectations, and budgets of our clients.",
    },
    {
        id: "02",
        title: "We Work With Perseverance",
        description:
            "Our first aim has always been to provide high-quality work and establish positive working relationships with our clients. Because we put our clients at the centre of all we do, we are thrilled that we are still servicing our very first business client.",
        image: "/images/why-dds/why-dds.png",
    },
    {
        id: "03",
        title: "We Offer Vast Experience",
        description:
            "From modest ecommerce ventures to large international enterprises, as well as healthcare providers, realtors, lawyers, local governments, county organisations, and other non-profit agencies and organisations, we've worked with practically every major industry in the globe, both directly and indirectly. DDS has one of the most diverse client bases on the internet!",
    },
];

const WhyDDS = () => {
    return (
        <div className="why-dds-area pt-100 pb-70">
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
                                {image && (
                                    <>
                                        <div className="bg-img">
                                            <img src={image} alt="image" />
                                        </div>
                                        <div className="overlay"></div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyDDS;
