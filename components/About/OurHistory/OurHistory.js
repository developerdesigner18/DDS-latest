import { history } from "../../../data/history";

const OurHistory = () => {
    return (
        <div className="history-area ptb-100 bg-f9f9f9">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our History</span>
                    <h2>History Begins In 2018</h2>
                </div>

                <ol className="timeline history-timeline">
                    {history.map(
                        ({ year, date, title, description, image }, index) => (
                            <li key={index} className="timeline-block">
                                <div className="timeline-date">
                                    <span>{year}</span>
                                    {date}
                                    <sup>st</sup>
                                </div>

                                <div className="timeline-icon">
                                    <span className="dot-badge"></span>
                                </div>

                                <div className="timeline-content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="content">
                                                <h3>{title}</h3>
                                                <p>{description}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-12">
                                            <div className="image">
                                                <img src={image} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    )}
                </ol>
            </div>
        </div>
    );
};

export default OurHistory;
