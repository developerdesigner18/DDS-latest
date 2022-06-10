const InfoCard = (props) => {
    return (
        <>
            <div className="container servicecard info">
                <div className="container">
                    <h2>{props.heading}</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content info">
                                <div className="content">
                                    <p>{props.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="solution-image">
                                <img src={props.images} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoCard;
