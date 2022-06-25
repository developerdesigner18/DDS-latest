const OurExpertise = () => {
    const expertiseData = [
        {
            expertiseimg: "/images/laravel/expertise1.png",
            title: "Certified ISO 2018:2022 Company",
        },
        {
            expertiseimg: "/images/laravel/expertise2.png",
            title: "Laravel Development Solution",
        },
        {
            expertiseimg: "/images/laravel/expertise3.png",
            title: "2500+Projects Delivered",
        },
        {
            expertiseimg: "/images/laravel/expertise4.png",
            title: "Customer Satisfaction",
        },
        {
            expertiseimg: "/images/laravel/expertise5.png",
            title: "365 Days Availability",
        },
        {
            expertiseimg: "/images/laravel/expertise6.png",
            title: "High Quality Development",
        },
    ];
    return (
        <div>
            {" "}
            <div className="expertise-stack pt-50 pb-70">
                <div className="container">
                    <div className="expertise-stack-heading text-left  pb-50">
                        <h2>Our Experties</h2>
                    </div>
                    <div className="row text-center">
                        {expertiseData.map((data) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-5 mb-3">
                                    <div className="expertise-container-holder">
                                        <img
                                            src={data.expertiseimg}
                                            alt="image"
                                            className="expertise-image-holder"
                                        />
                                        <h6 className="text-center pt-4 mt-2">
                                            {data.title}
                                        </h6>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurExpertise;
