const ServiceCard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="/images/services/service.png" alt="service" />
                </div>
                <div className="col-6">
                    <p>our services</p>
                    <h1>Integrated Services</h1>
                    <p className="serviceContent">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature.
                    </p>
                    <button type="submit" className="default-btn">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
