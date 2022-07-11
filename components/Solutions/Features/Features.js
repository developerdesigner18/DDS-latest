import { useTheme } from "next-themes";
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
    const { theme } = useTheme();

    return (
        <>
            <div className="features-holder">
                <div className="container">
                    <h2 className="title">
                        Features of Ecommerce, Retail & B2B Solutions
                    </h2>
                    <div className="row solutions-row">
                        {features.map(({ image, heading }, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6 col-sm-6"
                            >
                                <div className="single-featured-services-box feature">
                                    {console.log(theme, "featur")}
                                    <div className={`icon solution`}>
                                        {theme == "dark" && (
                                            <img
                                                src={image}
                                                alt="team-image"
                                                className="flaticon-megaphone-dark"
                                            />
                                        )}
                                        {theme == "light" && (
                                            <img src={image} alt="team-image" />
                                        )}
                                    </div>
                                    <h3>{heading}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
