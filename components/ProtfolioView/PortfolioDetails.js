import PortfolioSidebar from "./PortfolioSidebar";

const PortfolioDetails = () => {
    return (
        <>
            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="portfolio-details-image">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <img
                                            src="/images/portfolio/first.png"
                                            alt="image"
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <img
                                            src="/images/portfolio/second.png"
                                            alt="image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-details-desc">
                                <span className="sub-title">Portfolio</span>
                                <h3 className="heading">
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text
                                </h3>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from
                                    Richard McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia,
                                </p>

                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="image">
                                            <img
                                                src="/images/portfolio/facts.png"
                                                alt="image"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="content">
                                            <h3 className="heading">
                                                Important Facts
                                            </h3>
                                            <ul>
                                                <li>AliaInstruments</li>
                                                <li>Skils & Thrills</li>
                                                <li>Travel Daily</li>
                                                <li>Mysunless</li>
                                                <li>Holy organic</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source.
                                </p>

                                <p>
                                    Richard McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source.
                                </p>
                                <h3 className="heading">Results</h3>

                                <p>
                                    Richard McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <PortfolioSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioDetails;
