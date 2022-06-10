const ServiceCard = () => {
    return (
        <>
            <div className="container servicecard">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="solution-image">
                            <img
                                src="/images/solutions/eccomerce.png"
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content service">
                            <div className="content">
                                <h2>Ecommerce, Retail And B2B</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book
                                </p>
                                <button type="submit" className="default-btn">
                                    Request A Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
