import Link from "next/link";

const users = [
    {
        userImg: "/images/portfolio/design.png",
        content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        userImg: "/images/portfolio/interface.png",
        content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        userImg: "/images/portfolio/website.png",
        content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
];

const Moreprofile = () => {
    return (
        <>
            <div className="portfolio-area">
                <div className="container">
                    <h3 className="moreprojectheading">
                        More Projects You Might Like{" "}
                    </h3>
                    <div className="row">
                        {users.map((elm) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-portfolio-box">
                                            <Link href="/single-portfolio">
                                                <a className="image d-block">
                                                    <img
                                                        src={elm.userImg}
                                                        alt="image"
                                                    />
                                                </a>
                                            </Link>

                                            <div className="content">
                                                <p>{elm.content}</p>

                                                <Link href="/single-portfolio">
                                                    <a className="link-btn">
                                                        <i className="flaticon-next-button"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Moreprofile;
