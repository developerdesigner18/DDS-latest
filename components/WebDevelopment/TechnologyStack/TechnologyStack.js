const TechnologyStack = () => {
    const technologyData = [
        {
            techimg: "/images/web-development/1.png",
            title: "PHP",
        },
        {
            techimg: "/images/web-development/2.png",
            title: "Cake PHP",
        },
        {
            techimg: "/images/web-development/3.png",
            title: "Wordpress",
        },
        {
            techimg: "/images/web-development/4.png",
            title: "Drupal",
        },
        {
            techimg: "/images/web-development/5.png",
            title: "Joomla",
        },
        {
            techimg: "/images/web-development/6.png",
            title: "Laravel",
        },
        {
            techimg: "/images/web-development/7.png",
            title: "Codeigniter",
        },
        {
            techimg: "/images/web-development/8.png",
            title: "Shopify",
        },
        {
            techimg: "/images/web-development/9.png",
            title: "Pretashop",
        },
        {
            techimg: "/images/web-development/10.png",
            title: "Opencart",
        },
        {
            techimg: "/images/web-development/11.png",
            title: "Yii",
        },
        {
            techimg: "/images/web-development/12.png",
            title: "Mangento",
        },
    ];
    return (
        <div>
            {" "}
            <div className="technology-stack pt-50 pb-70">
                <div className="container">
                    <div className="technology-stack-heading text-center pb-50">
                        <h2>Technology Stack</h2>
                    </div>
                    <div className="row text-center">
                        {technologyData.map((data) => {
                            return (
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="single-gallery-item">
                                        <img
                                            src={data.techimg}
                                            alt="image"
                                            className="technology-image-holder"
                                        />
                                        <h6 className="text-center">
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

export default TechnologyStack;
