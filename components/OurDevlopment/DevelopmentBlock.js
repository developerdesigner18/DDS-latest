import { developmentData } from "../../data/developmentData";

const DevelopmentBlock = () => {
    return (
        <>
            <div className="development-block-holder">
                <div class="devBlock testimonial">
                    {developmentData.map((elm) => {
                        return (
                            <>
                                <div class="left devlopment">
                                    <div class="devBlock-content">
                                        <div className="devimg">
                                            <img src={elm.devimg} />
                                        </div>
                                        <div className="info">
                                            <h2>{elm.title}</h2>
                                            <p>{elm.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default DevelopmentBlock;
