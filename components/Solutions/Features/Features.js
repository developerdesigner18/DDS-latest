const features = [
    {
        image: "/images/solutions/feature/tap.png",
        heading: "Easy to use",
    },
    {
        image: "/images/solutions/feature/discounts.png",
        heading: "Volume Discount",
    },
    {
        image: "/images/solutions/feature/cashless-payment.png",
        heading: "Payment Options",
    },
    {
        image: "/images/solutions/feature/repeat.png",
        heading: "Reordering",
    },
    {
        image: "/images/solutions/feature/open-box.png",
        heading: "Minimum Order Quantity",
    },
    {
        image: "/images/solutions/feature/restriction.png",
        heading: "Access Restriction",
    },
    {
        image: "/images/solutions/feature/target.png",
        heading: "customer Segment",
    },
];

const Features = () => {
    return (
        <>
            <div className="container feature-card">
                <h2 className="title">
                    Features of Ecommerce, Retail & B2B Solutions
                </h2>
                <div className="row solutions-row">
                    {features.map(({ image, heading }, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-featured-services-box feature">
                                <div className="icon solution">
                                    <img
                                        src={image}
                                        className="flaticon-megaphone"
                                    />
                                </div>
                                <h3>{heading}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Features;
