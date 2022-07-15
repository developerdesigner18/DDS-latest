import Link from "next/link";

const ServiceCard = (props) => {
    return (
        <>
            <div className="main-service">
                <div className="container servicecard">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="solution-image">
                                <img src={props.mainimage} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content service">
                                <div className="content">
                                    <h6>{props.subheading}</h6>
                                    <h2>{props.heading}</h2>
                                    <p>{props.content}</p>
                                    {props.btntext && (
                                        <Link href={props.btnlink}>
                                            <a
                                                type="submit"
                                                className="default-btn"
                                            >
                                                {props.btntext}
                                            </a>
                                        </Link>
                                    )}
                                    {props.btntext2 && (
                                        <Link href={props.btnlink}>
                                            <a
                                                type="submit"
                                                className="extra-btn"
                                            >
                                                {props.btntext2}
                                            </a>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
