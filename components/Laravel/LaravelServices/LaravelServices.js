import { laravelServicesData } from "../../../data/laravelServiceData";

const LaravelServices = () => {
    return (
        <div className="laravel-service-Container ptb-100">
            <div className="container blockContainer">
                <div className="laravel-service-holder">
                    <h2>Our Services</h2>
                </div>
                <div className="row">
                    {laravelServicesData.map((data) => {
                        return (
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="service-image-block bottomBlock">
                                    <div className="img-icons-holder">
                                        <img src={data.laravelimg} />
                                    </div>
                                </div>
                                <div className="laravel-service-block">
                                    <p className="heading">{data.title}</p>
                                    <p className="subheading text-center ">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LaravelServices;
