import PageBanner from "../components/Common/PageBanner/PageBanner";
import Link from "next/link";

const solutions = [
    {
        title: "Ecommerce, Retail & B2B",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/solutions/solution/eccomerce.png",
    },
    {
        title: "On-Demand Solutions",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/solutions/solution/demand.png",
    },
    {
        title: "Social Networking",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/solutions/solution/social.png",
    },
    {
        title: "Food And Restaurant",
        description: [
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            </p>,
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
            </p>,
        ],
        image: "/images/solutions/solution/food.png",
    },
];

const Solutions = () => {
    return (
        <>
            <PageBanner pageTitle="Solutions" />

            <div className="overview-area ptb-100">
                <div className="container">
                    {solutions.map(({ title, description, image }, index) => (
                        <div key={index} className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <Link href="/solution">
                                        <span
                                            className="sub-title"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Solutions
                                        </span>
                                    </Link>
                                    <Link href="/solution">
                                        <h2 style={{ cursor: "pointer" }}>
                                            {title}
                                        </h2>
                                    </Link>
                                    {description}
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={image} alt="image" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <Link href="/solution">
                        <span
                            className="default-btn"
                            style={{ cursor: "pointer" }}
                        >
                            View All
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Solutions;
