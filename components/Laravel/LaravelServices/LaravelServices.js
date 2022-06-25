const LaravelServices = () => {
    const laravelServicesData = [
        {
            laravelimg: "/images/laravel/service1.png",
            title: "Laravel Migration solution",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            laravelimg: "/images/laravel/service2.png",
            title: "Ecommerce Solution",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            laravelimg: "/images/laravel/service3.png",
            title: "3rd Party App Integration",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];
    return (
        <div className="offerContainer">
            <div className="container blockContainer">
                <div className="laravel-service-holder">
                    <h2>Our Services</h2>
                </div>
                <div className="row">
                    {laravelServicesData.map((data) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-2">
                                <div className="service-image-block bottomBlock">
                                    <div className="img-icons-holder">
                                        <img src={data.laravelimg} />
                                    </div>
                                </div>
                                <div className="service-block">
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
